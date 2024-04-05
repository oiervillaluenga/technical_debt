import logging
import os
import smtplib
import pyodbc as po
import pandas as pd
from logging.handlers import TimedRotatingFileHandler
from sqlalchemy.engine import URL
from sqlalchemy import create_engine
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email import encoders
from typing import Optional

def remove_handlers():
    """
    Removes existing handlers from the logger.

    This function removes all the existing handlers from the root logger. Handlers
    are responsible for specifying where the log messages should be directed, such
    as writing to a file, console, etc. By removing the handlers, the logger will
    no longer send log messages to any specific output.

    Notes:
        Removing existing handlers is useful when you want to reconfigure or reset
        the logging behavior in your application. By removing handlers, you can
        prevent duplicate log entries or reset the logging to its default behavior.
    """
    for handler in logging.root.handlers[:]:
        logging.root.removeHandler(handler)
        handler.close()

def create_log(path):
    """
    Creates a rotating log.

    Parameters:
        path (str): The path of the rotating log file.

    Returns:
        logging.Logger: The logger object used for writing log messages.

    Notes:
        The function sets up the logging configuration to write log messages to
        a rotating log file at the specified 'path'. It uses 'TimedRotatingFileHandler'
        to rotate the log file daily (when = 'd') and keep 7 backup log files.

        The logger is returned to enable logging messages at different levels
        (DEBUG, INFO, WARNING, ERROR, and CRITICAL) in the calling code.
    """
    logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
                        , handlers=[TimedRotatingFileHandler(path,when = 'd', interval = 1, backupCount= 7)]
                        ,level = logging.DEBUG, datefmt='%Y-%m-%d %H:%M:%S')
    logger = logging.getLogger('Rotating Log')
    return logger

def save_df_to_excel(excel_file_address,df,sheet):
    """
    Save a DataFrame to an Excel sheet.

    Parameters:
        excel_file_address (str): The Excel file address to which the results are to be saved.
        df (pandas.DataFrame): The DataFrame that contains the data to be saved.
        sheet (str): The name of the sheet to which to save the data.

    Notes:
        This function uses 'xlsxwriter' as the engine to write the Excel file.

    """
    
    with pd.ExcelWriter(excel_file_address, engine='xlsxwriter') as writer:
        df.to_excel(writer, sheet_name=sheet, index=False,engine='xlsxwriter')
        writer.sheets[sheet].set_column(0, 0, 27)
        writer.sheets[sheet].set_column(1, len(df.columns), 15)
        writer.sheets[sheet].autofilter(0, 0, len(df), len(df.columns)-1)

def process_directory(folder_path):
    """
    Recursively processes a given directory and its subdirectories, collecting
    information about the files within each folder.

    Parameters:
        folder_path (str): The path of the directory to be processed.

    Returns:
        list: A list of dictionaries, where each dictionary contains information
              about a file found in the directory and its subdirectories. The
              dictionary structure is as follows:

              {
                'FileName': str,        # The name of the file (without the full path).
                'FolderPath': str,      # The path of the folder where the file is located.
                'Extension': str,       # The extension of the file (e.g., '.txt', '.jpg').
                'CreationTime': float,  # The creation time of the file (timestamp in seconds since epoch).
                'ModificationTime': float,  # The modification time of the file (timestamp in seconds since epoch).
                'AccessTime': float,    # The last access time of the file (timestamp in seconds since epoch).
                'Size': str             # The size of the file in megabytes (MB) as a string.
              }
    """
    file_data = []  # Initialize the file_data list for the main directory

    def process_folder(folder_path):
        """
        Recursive helper function that traverses the given directory and its subdirectories,
        collecting file information and storing it in the file_data list.

        Parameters:
            folder_path (str): The path of the current directory to be processed.

        Returns:
            None: The function modifies the 'file_data' list directly.
        """

        files = []
        folders = []

        # Iterate over the items in the folder
        for item in os.listdir(folder_path):
            try:
                item_path = os.path.join(folder_path, item)
                # Check if it's a file
                if os.path.isfile(item_path):
                    files.append(item_path)
                # Check if it's a folder
                elif os.path.isdir(item_path):
                    folders.append(item_path)
            except Exception as e:
                continue

        # Process files in the current folder
        for file_path in files:
            try:
                file_name = os.path.basename(file_path)
                extension = os.path.splitext(file_name)[1]
                modification_time = os.path.getmtime(file_path)
                creation_time = os.path.getctime(file_path)
                access_time = os.path.getatime(file_path)
                size = f'{os.stat(file_path).st_size / (1024 * 1024)}'

                # Store file data in a dictionary
                file_info = {
                    'FileName': file_name,
                    'FolderPath': folder_path,
                    'Extension': extension,
                    'CreationTime': creation_time,
                    'ModificationTime': modification_time,
                    'AccessTime': access_time,
                    'Size': size
                }
                file_data.append(file_info)
            except Exception as e:              
                continue

        # Process subfolders recursively
        for folder in folders:
            try:
                process_folder(folder)
            except Exception as e:
                continue

    process_folder(folder_path)
    return file_data

def send_email(subject: str, smtp_user: str, smtp_password: str, smtp_server: str, 
               to_email: str, from_email: str, body_text: Optional[str] = None, 
               attachment_address: Optional[str] = None, 
               pandas_table_df: Optional[pd.DataFrame] = None) -> None:
    """
    Sends an email with optional PDF attachment and optional pandas DataFrame table.
    
    Parameters:
    - subject (str): Subject of the email.
    - smtp_user (str): User email address for SMTP server login.
    - smtp_password (str): Password for SMTP server login.
    - smtp_server (str): Address of the SMTP server.
    - to_email (str): Recipient's email address.
    - from_email (str): Sender's email address.
    - body_text (Optional[str]): Optional body text for the email. Default is None.
    - attachment_address (Optional[str]): File path to a PDF to attach. Default is None.
    - pandas_table_df (Optional[pd.DataFrame]): Optional pandas DataFrame to include as HTML. Default is None.
    
    Sends an email to the specified recipient with the given subject and optional body text.
    If an attachment address is provided, attaches the specified PDF file. If a pandas DataFrame
    is provided, includes it as an HTML table in the email body.
    """
    # we open a server connection in a context manager
    with smtplib.SMTP(smtp_server) as server:
        server.set_debuglevel(1) # in case that we want to debug the process
        server.login(user=smtp_user,password=smtp_password)

        # we create the msg
        msg = MIMEMultipart()
        msg['Subject'] = f'Pedido de compra de Egile para pedido #{pedido}'
        msg['From'] = from_email
        msg['To'] = to_email
        
        # if we want to attach a pdf file
        if attachment_address:                
            # Attach the PDF file 
            with open(attachment_address, "rb") as attachment:
                part = MIMEBase("application", "octet-stream")
                part.set_payload(attachment.read())
                        
            encoders.encode_base64(part)
            part.add_header(
                "Content-Disposition",
                f"attachment; filename= filename.pdf",
            )
            msg.attach(part)
                
        if pandas_table_df and body_text:
            table_html = pandas_table_df.to_html(index = False)

            # we join the text and tables together in a html
            html_content = f'<html><body>{body_text}<br><br>{table_html}</body></html>'

        elif body_text:
            html_content = f'<html><body>{body_text}</body></html>'
        
        elif pandas_table_df:
            # we convert the table to html
            table_html = pandas_table_df.to_html(index = False)

            # we join the text and tables together in a html
            html_content = f'<html><body>{table_html}</body></html>'

        else:
            server.sendmail(from_email, to_email, msg.as_string())

        msg.attach(MIMEText(html_content, 'html'))
        server.sendmail(from_email, to_email, msg.as_string())