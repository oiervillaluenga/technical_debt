import yaml
import funciones.funciones_generales as fc

# We set up the yaml configuration file
# yaml file located in the same folder as the main python file
yaml_file = 'config.yaml'
with open(yaml_file,"r") as f:
    config = yaml.load(f,Loader = yaml.FullLoader)

# We remove existing handlers in the logger
try:
    fc.remove_handlers()
# In case that creating the log fails we catch it
except Exception as e:
    print('Fallo al quitar los handlers existentes en el programa')
    print(e)

try:
    logger = fc.create_log(config['logging_path'])
except Exception as e:
    print('Fallo al configurar el log del programa')
    print(e) 
