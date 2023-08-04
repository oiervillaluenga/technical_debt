import pandas as pd
from flask import Blueprint, render_template, request, session
from modulos import config_inicial as ci
from funciones import funciones_generales as f

example_bp = Blueprint('example_bp'
,__name__,template_folder = 'templates'
)

@example_bp.route('/dropdown',methods=['POST','GET'])
def dropdown():
    try:
        # we create a list to be used as a checklist
        dropdown_list = ['option1','option2','option3']
        # re-directing to another place in the 
        return render_template('blueprint_template/dropdown.html', opciones = dropdown_list)
    except Exception as e:
        response_message = f'error when rendering the dropdown {e}'
        ci.logger.debug(response_message)
        return render_template('response.html',response_message = response_message)

@example_bp.route('/dropdown_response',methods=['POST','GET'])
def dropdown_response():
    try: 
        opcion_seleccionada = request.form['seleccion']
        print('ok')
    except Exception as e:
        response_message = f'error when obtaining the selected option {e}'
        ci.logger.debug(response_message)
        return render_template('response.html',response_message = response_message)

@example_bp.route('/checked_checklist',methods=['POST','GET'])
def checked_checklist():
    try: 
        # we create a list to be used as a checklist
        checklist_input = ['option1','option2','option3','option4','option5']
        # we create another list to define the checked options
        checked_checklist_input = ['option2','option3']
        # we render the template
        return render_template('blueprint_template/checked_checklist.html', checklist = checklist_input, checked_checklist = checked_checklist_input)
    
    except Exception as e:
        response_message = f'error when rendering checked_checklist {e}'
        ci.logger.debug(response_message)
        return render_template('response.html',response_message = response_message)    

@example_bp.route('/checked_checklist_response',methods=['POST','GET'])
def checked_checklist_response():
    try:
        selected_options = request.form.getlist('options[]')
        print('ok')
        # re-direction example here 
        message = 'Redirigiendo a checked_checklist...'
        url = 'example_bp.checked_checklist'
        return render_template('blueprint_template/redireccion.html',message = message, url = url) 
    except Exception as e:
        response_message = f'error when obtaining the selected options from the checklist {e}'
        ci.logger.debug(response_message)
        return render_template('response.html',response_message = response_message)

@example_bp.route('/form',methods=['POST','GET'])
def form():
    try:
        # we create a list to be used as a checklist
        checklist_input = ['option1','option2','option3','option4','option5']
        # we create another list to define the checked options
        checked_checklist_input = ['option2','option3']
        # re-directing to another place in the 
        return render_template('blueprint_template/form.html', checklist = checklist_input, checked_checklist = checked_checklist_input)
    except Exception as e:
        response_message = f'error when rendering the dropdown {e}'
        ci.logger.debug(response_message)
        return render_template('response.html',response_message = response_message)

@example_bp.route('/form_response',methods=['POST','GET'])
def form_response():
    try:
        selected_options = request.form.getlist('options[]')
        form1_text = request.form['form1']
        form2_text = request.form['form2']
        print('ok')
        # re-direction example here 
        message = 'Redirigiendo a checked_checklist...'
        url = 'example_bp.checked_checklist'
        return render_template('blueprint_template/redireccion.html',message = message, url = url) 
    except Exception as e:
        response_message = f'error when obtaining the selected options from the checklist {e}'
        ci.logger.debug(response_message)
        return render_template('response.html',response_message = response_message)
