import pandas as pd
import psycopg2
from sqlalchemy import create_engine
from datetime import datetime
from modulos import config_inicial as ci
from funciones import consultas_sql as sql
from funciones import funciones_generales as f

'''EXTRACT DATA POSTGRESQL'''
try:
    # We create a connection string
    conn = psycopg2.connect(database=ci.config['database_postgre']\
        , user=ci.config['user_postgre']\
            , password=ci.config['password_postgre']\
                , host=ci.config['server_postgre']\
                    , port=5432)
    cur = conn.cursor()   

except Exception as e:
    response_message = f"""error when creating a connection with {ci.config['database_postgre']}  database and db_conn_alq_postgresql: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)    

try:
    # extract data without parameters
    sql_no_parameters = """SELECT operario_id FROM operario"""
    cur.execute(sql_no_parameters)
    result_noparameters_df = pd.DataFrame(cur.fetchall(), columns = ['operario_id'])

except Exception as e:
    response_message = f"""error when extracting data with no parameters {sql_no_parameters}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try: 
    # extract data with fixed parameters
    operario_id = 1000 
    date_object = datetime.strptime('01-07-2023', '%d-%m-%Y')

    sql_known_parameters = """SELECT operario_id, operario_nombre, operario_ultima_actualizacion FROM operario WHERE operario_id > %s AND operario_ultima_actualizacion > %s"""
    cur.execute(sql_known_parameters,(operario_id,date_object))
    result_fixedparameters_df = pd.DataFrame(cur.fetchall(), columns = ['operario_id','operario_nombre','operario_ult_act'])

except Exception as e:
    response_message = f"""error when extracting data with fixed parameters : {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try: 
    # extract data with contains and fixed parameters
    sql_contains = """SELECT operario_id,operario_nombre FROM operario WHERE operario_nombre ilIKE '%%'||%s||'%%'"""
    cur.execute(sql_contains,('oi',))
    result_contains_df = pd.DataFrame(cur.fetchall(), columns = ['operario_id','operario_nombre'])

except Exception as e:
    response_message = f"""error when extracting data with parameters {sql_known_parameters}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # extract data with one column with a variable number of parameters
    list_of_parameters = ['1406','1400','1250']

    sql_variable_number_of_params = """
    SELECT operario_id, operario_nombre FROM operario where operario_id IN ({})
    """
    formatted_variable_number_of_params = sql_variable_number_of_params.format(','.join(['%s'] * len(list_of_parameters)))
    cur.execute(formatted_variable_number_of_params,list_of_parameters)
    result_variable_number_of_params_df = pd.DataFrame(cur.fetchall(), columns = ['operario_id','operario_nombre'])

except Exception as e:
    response_message = f"""error when extracting data with a variable number of parameters: {e}"""
    ci.logger.debug(response_message)
    # in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

