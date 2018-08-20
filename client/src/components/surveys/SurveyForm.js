import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'
import FIELDS from './formFields'

class SurveyForm extends Component {
  renderFields(){
    return(
      <div>
        {FIELDS.map(field => 
          <Field key={field.name} label={field.label} type="text" name={field.name} component={SurveyField} />
        )}
      </div>
    )
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()} 
          <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link> 
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>

    )
  }
}

function validate(values){
  const errors = {}
  FIELDS.forEach(field =>{
    if(!values[field.name])
      errors[field.name] = `You must provide ${field.name}`
      
  })
  if(values.recipients){
    errors.recipients = validateEmails(values.recipients || '');
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);