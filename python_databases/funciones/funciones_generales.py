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

def db_conn_alq_sqlserver(driver,server,database,user,password):
    """Generate a database connection engine sqlalchemy
    :param driver: driver to be used
    :param server: server to be connected to
    :param database: database to be connected to
    :param user: user to use for connection
    :param password: password to use for connection

    engine
    """
    # We create a connection string with the DRIVER, SERVER, DATABASE, UID AND PWD settings
    connection_string = f"DRIVER={driver};\
        SERVER={server};\
            DATABASE={database};\
                UID={user};\
                    PWD={password}"

    # We set the connection URL and the engine
    connection_url = URL.create("mssql+pyodbc", query={"odbc_connect": connection_string})
    engine = create_engine(connection_url)
    return engine

def db_conn_alq_postgresql(server,database,user,password):
    """Generate a database connection engine sqlalchemy
    :param server: server to be connected to
    :param database: database to be connected to
    :param user: user to use for connection
    :param password: password to use for connection
    engine
    """
    # We create a connection string with the DRIVER, SERVER, DATABASE, UID AND PWD settings
    connection_string = f"postgresql:///{user}:{password}@{server}/{database}?port=5432"
    engine = create_engine(connection_string)
    return engine

def db_conn_po(driver,server,database,user,password):
    """Generate a database connection with pyodbc
    :param driver: driver to be used
    :param server: server to be connected to
    :param database: database to be connected to
    :param user: user to use for connection
    :param password: password to use for connection

    >>> db_conn_po(DRIVER_PRUEBAS,
                    SERVIDOR_PRUEBAS,
                    DATABASE_PRUEBAS,
                    USUARIO_PRUEBAS,
                    PASSWORD_PRUEBAS)
    connection
    """
    # We create a connection string with the DRIVER, SERVER, DATABASE, UID AND PWD settings
    conn = po.connect(f'Driver={driver};'
                  f'Server={server};'
                  f'Database={database};'
                  f'UID={user};'
                  f'PWD={password};')
    return conn

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
    
