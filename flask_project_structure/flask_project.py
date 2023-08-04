from flask import Flask, render_template, session, request
from modulos import config_inicial as ci
from blueprint_template.blueprint_template import example_bp


app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'

# Register the blueprint routes
app.register_blueprint(example_bp,url_prefix = '')


@app.route('/')
def welcome():
    ci.logger.debug('app executed')
    try:
        response_message = f'Welcome to the flask template'
        return render_template('response.html',response_message = response_message)

    except Exception as e:
        response_message = f'error when loading  Welcome screen: {e}'
        return render_template('response.html',response_message = response_message)

if __name__ == '__main__':
    try:
        app.secret_key = ci.config['key']
        #app.run(host = 'menitsisteplant', port = 5003) 
        app.run(host = 'localhost')       
    except Exception as e:
        print(e)