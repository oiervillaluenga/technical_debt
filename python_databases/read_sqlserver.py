import pandas as pd
from modulos import config_inicial as ci
from funciones import funciones_generales as f

try: 
    # connect to sql server with pandas and sql alchemy
    sql_server_conn = f.db_conn_alq_sqlserver(
        driver = ci.config['driver']
        ,server = ci.config['server']
        ,database = ci.config['database']
        ,user = ci.config['user']
        ,password = ci.config['password'])
except Exception as e:
    response_message = f"""error when creating a connection with {ci.config['server_autoq']}  database and sqlalchemy: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try: 
    # extract data without parameters
    sql_no_parameters = """SELECT col1, col2, col3 FROM table1"""
    noparameters_sqlserver_df = pd.read_sql(sql = sql_no_parameters, con = sql_server_conn, dtype_backend = 'pyarrow')

except Exception as e:
    response_message = f"""error when extracting data with no parameters {sql_no_parameters}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try: 
    # extract data with a set of given parameters
    params = [('param1', 'param2', 'param3')] 
    sql_known_parameters = """SELECT col1, col2, col3 FROM table1 WHERE col1 = ? AND col2 = ? AND col3 = ?"""
    fixedparameters_sqlserver_df = pd.read_sql(sql = sql_known_parameters, con = sql_server_conn, params = params, dtype_backend = 'pyarrow')

except Exception as e:
    response_message = f"""error when extracting data with parameters {sql_known_parameters}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # extract data with one column with a variable number of parameters
    list_of_parameters = ['param1','param2','param3']
    params = tuple(item for item in list_of_parameters) # we construct the tuple from a list 
    parameters_df = pd.DataFrame(list_of_parameters,columns='parameters')
    params = parameters_df.values.tolist()

    sql_variable_number_of_params = """
    SELECT 
    col1
    ,col2
    ,col3 
    FROM table1 
    WHERE col1 IN ({})
    """

    formatted_query = sql_variable_number_of_params.format(','.join(['?'] * len(params)))
    variablenumberparameters_sqlserver_df = pd.read_sql(sql = formatted_query, con = sql_server_conn, params = params, dtype_backend = 'pyarrow') 

except Exception as e:
    response_message = f"""error when extracting data with a variable number of parameters {formatted_query}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # extract data with multiple columns with the same number of parameters
    list_of_parameters1 = ['param1','param2','param3']
    list_of_parameters2 = ['param_a','param_b','param_c']

    query = '''SELECT col1 FROM table1 where col2 IN ({}) and col3 IN ({})'''.format(','.join(['?'] * len(list_of_parameters1)), ','.join(['?'] * len(list_of_parameters1)))

    params_list = list_of_parameters1 + list_of_parameters2
    params_tuple = tuple(params_list)

    resulting_df = pd.read_sql_query(sql = query, con = sql_server_conn, params= params_tuple, dtype_backend = 'pyarrow')

except Exception as e:
    response_message = f"""error when extracting data with a variable number of parameters {formatted_query}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # extract data with multiple columns with a variable number of parameters
    list_of_parameters1 = ['param1','param2','param3']
    list_of_parameters2 = ['param_a','param_b','param_c','param_d']

    query = '''SELECT col1 FROM table1 where col2 IN ({}) and col3 IN ({})'''.format(','.join(['?'] * len(list_of_parameters1)), ','.join(['?'] * len(list_of_parameters2)))

    params_list = list_of_parameters1 + list_of_parameters2
    params_tuple = tuple(params_list)

    resulting_df = pd.read_sql_query(sql = query, con = sql_server_conn, params= params_tuple, dtype_backend = 'pyarrow')

except Exception as e:
    response_message = f"""error when extracting data with a variable number of parameters {formatted_query}: {e}"""
    ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

