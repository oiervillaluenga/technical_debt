import logging
import pyodbc as po
import pandas as pd
from logging.handlers import TimedRotatingFileHandler
from sqlalchemy.engine import URL
from sqlalchemy import create_engine

def remove_handlers():
    '''It removes existing handlers in the file'''
    # We remove existing handlers in the logger
    for handler in logging.root.handlers[:]:
        logging.root.removeHandler(handler)
        handler.close()

def create_log(path):
    '''Creates a rotating log
    :param path: The path of the rotating log 
    >>> create_log(path):
        logger
    '''
    logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
                        , handlers=[TimedRotatingFileHandler(path,when = 'd', interval = 1, backupCount= 7)]
                        ,level = logging.DEBUG, datefmt='%Y-%m-%d %H:%M:%S')
    logger = logging.getLogger('Rotating Log')
    return logger

def save_df_to_excel(excel_file_address,df,sheet):
    """save a dataframe to an excel sheet
    :param address: the excel file address to which the results are to be saved
    :param df: the dataframe that contains the data
    :param sheet: the name of the sheet to which to save the data
    """
    
    with pd.ExcelWriter(excel_file_address, engine='xlsxwriter') as writer:
        df.to_excel(writer, sheet_name=sheet, index=False,engine='xlsxwriter')
        writer.sheets[sheet].set_column(0, 0, 27)
        writer.sheets[sheet].set_column(1, len(df.columns), 15)
        writer.sheets[sheet].autofilter(0, 0, len(df), len(df.columns)-1)
    
