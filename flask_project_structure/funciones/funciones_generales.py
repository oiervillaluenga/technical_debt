import logging
import os
import pyodbc as po
import pandas as pd
from logging.handlers import TimedRotatingFileHandler
from sqlalchemy.engine import URL
from sqlalchemy import create_engine

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