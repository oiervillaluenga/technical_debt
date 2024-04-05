import polars as pl
import pandas as pd 

try: 
    # create polars dataframe from lists
    list1= ['Jon','Aitor','Unai']
    list2 = [77.4,85.1,69.8]
    list3 = [182,179,175]
    # we construct a dictionary with the lists 
    data1 = {'name':list1,'weight':list2,'height':list3}
    # we use teh dictionary to construct the pl
    constructed1_pl = pl.DataFrame(data1, schema={"name": pl.Utf8, "weight": pl.Float64, "height": pl.Int64})
    
    # we repeat
    list4= ['Jon','Aitor','Unai','Asier','Héctor']
    list5 = [17,26,51,47,23]
    list6 = ['M','M','M','M','M']    
    data2 = {'name':list4,'age':list5,'gender':list6}  
    constructed2_pl = pl.DataFrame(data2, schema={"name": pl.Utf8, "age": pl.Int64, "gender": pl.Utf8})

except Exception as e:
    response_message = f"""error when constructing a polars dataframe: {e}"""
    #ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)

try:
    # create polars dataframe from pandas dataframe 
    polars_pl = pl.from_pandas(pandas_pd,
                # we define the schema of the imported pd                               
                schema_overrides = {"col1":pl.Utf8,
                        "col2":pl.Datetime,
                        "col3":pl.Datetime,
                        "col4": pl.Utf8}).lazy()
except Exception as e:
    response_message = f"""error when constructing a polars dataframe from pandas: {e}"""
    #ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)    

try: 
    joined_pl = constructed1_pl.join(
        constructed2_pl,
        how = 'inner',
        left_on = ['name'],
        right_on = ['name'],
        suffix = '_right'
        ).with_columns(
            # case when example to determine if it is a male
            pl.when(pl.col("gender").str.contains("(?i)M"))
            .then(True)
            .otherwise(False)
            .alias("is_Male"),
            pl.when(pl.col("age") < 30)
            .then(pl.lit('young'))
            .when(pl.col("age") < 50)
            .then(pl.lit('middle'))
            .otherwise(pl.lit('old'))
            .alias('age_group')
        ).with_columns(
            pl.col('age').min().over('age_group').alias('min_age_group'),
            pl.col('age').max().over('age_group').alias('max_age_group')
        ).filter(
            # if we want to filter the youngest people in each age group
            pl.col("age") == pl.col("min_age_group") 
        )
    

except Exception as e:
    response_message = f"""error when transforming: {e}"""
    #ci.logger.debug(response_message)
    #in case that we are working with flask 
    # return render_template('response.html',response_message = response_message)




