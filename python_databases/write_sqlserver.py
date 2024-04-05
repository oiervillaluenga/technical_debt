import pandas as pd
from modulos import config_inicial as ci
from funciones import consultas_sql as sql
from funciones import funciones_generales as f

'''WRITE TO SQL SERVER: INSERT OR UPDATE'''

try: 
    # connect to sql server with pandas and pyodbc
    sql_server_conn = f.db_conn_po(
        driver = ci.config['driver']
        ,server = ci.config['server_autoq']
        ,database = ci.config['database_autoq']
        ,user = ci.config['user_autoq']
        ,password = ci.config['password_autoq'])
        
    # we create the cursor
    cursor = sql_server_conn.cursor()

except Exception as e:
    response_message = f"""error when creating a connection with {ci.config['server_autoq']} database and pyodbc: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # we insert values based on fixed parameters
    insert_sql = '''INSERT INTO table1 (col1,col2) VALUES (?,?)'''
    
    # We insert the values        
    cursor.execute(sql = insert_sql,params=('a','b'))
    cursor.commit()

except Exception as e:
    response_message = f"""error when inserting data with parameters: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # we carry out an execute many
    cursor.fast_executemany = True

    # we create an example dataframe 
    list_1 = ['a','b','c']
    list_2 = ['0','1','2']
    example_df = pd.DataFrame(zip(list_1,list_2),columns=['col1','col2'])
    
    # we create the query and we insert multiple rows from a dataframe
    insert_sql = '''INSERT INTO table1 (col1,col2) VALUES (?,?)'''
    cursor.executemany(insert_sql,example_df.values.tolist())
    cursor.commit()

except Exception as e:
    response_message = f"""error when inserting data with fast_executemany for {insert_sql}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # insert or update data with an uneven variable number of parameters
    param_result = ['result1']
    params_filter = ['filter1','filter2','filter3']

    sql_update_variable_number_of_params = """
    UPDATE table1
    SET column1 = ?
    WHERE column2 IN ({})
    """

    formatted_query = sql_update_variable_number_of_params.format(','.join(['?'] * len(params_filter)))

    params_list = param_result + params_filter
    params_tuple = tuple(params_list)

    # We update the values        
    cursor.execute(sql = formatted_query,params = params_tuple)
    cursor.commit()

except Exception as e:
    response_message = f"""error when extracting data with a variable number of parameters {formatted_query}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)