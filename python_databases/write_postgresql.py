import pandas as pd
import psycopg2
from psycopg2.extras import execute_values
from modulos import config_inicial as ci
from funciones import funciones_generales as f

'''WRITE DATA TO POSTGRESQL'''
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
    # insert values based on fixed parameters 
    insert_sql = '''INSERT INTO operario (operario_id, operario_nombre) VALUES (%s,%s)'''
    parameters = ['9991','John Smith']
    cur.execute(insert_sql,parameters)
    conn.commit()

except Exception as e:
    response_message = f"""error when inserting data with parameters: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # insert or update data with an uneven variable number of parameters
    param_result = ['Juan Pedro']
    params_filter = [9991,1406]

    sql_update_variable_number_of_params = """
    UPDATE operario
    SET operario_nombre = %s
    WHERE operario_id IN ({})
    """

    formatted_query = sql_update_variable_number_of_params.format(','.join(['%s'] * len(params_filter)))

    params_list = param_result + params_filter

    # We update the values        
    cur.execute(formatted_query,params_list)
    conn.commit()

except Exception as e:
    response_message = f"""error when extracting data with a variable number of parameters {formatted_query}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # we will use an execute_values to insert multiple rows at a given time 
    # we create a dataframe with the values
    values_id = ['9992','9993']
    values_names = ['Charles Xavier','Erik Lehnsherr']

    values_df = pd.DataFrame(zip(values_id,values_names),columns=['id','name'])
    
    sql_insert = """
    INSERT INTO operario (operario_id, operario_nombre)
    VALUES (%s,%s)"""

    data_values = values_df.values.tolist()
    cur.executemany(sql_insert,data_values)
    conn.commit() 

except Exception as e:
    response_message = f"""error when inserting data with execute_values: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)


