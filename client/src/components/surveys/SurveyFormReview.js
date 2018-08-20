import React from 'react'
import {connect} from 'react-redux'
import FIELDS from './formFields'
import {withRouter} from 'react-router-dom'
import * as actions from '../../actions'

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) =>{

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        {
          FIELDS.map(({name, label}) => 
            <div key={name}>
              <label>{label}</label>
              <div>{formValues[name]}</div>
            </div>
          )
        }
      </div>
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
      <button className="green btn-flat right" onClick={() => submitSurvey(formValues,history)}>
        Send Survey
        <i className="material-icons right white-text">email</i> 
      </button>
    </div>
  )
}

function mapStatetoProps({form}){
  return {formValues: form.surveyForm.values}
}

export default connect(mapStatetoProps, actions)(withRouter(SurveyReview));