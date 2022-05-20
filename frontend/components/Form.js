import React from 'react'
import { connect } from 'react-redux'
import {postQuiz, inputChange} from '../state/action-creators'

export function Form(props) {
  const onChange = evt => {
    const {id, value} = evt.target
    //console.log(id, value)
    props.inputChange({id, value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    //console.log(props.formValues)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value = {props.formValues.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value = {props.formValues.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value = {props.formValues.newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={ 
        props.formValues.newTrueAnswer.trim().length > 0 && props.formValues.newQuestion.trim().length > 0 && props.formValues.newFalseAnswer.trim().length > 0? false: true
        } onClick = {()=>props.postQuiz(props.formValues)}>Submit new quiz</button>
    </form>
  )
}

/*
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
*/

const mapStateToProps = state =>{
  return({
    formValues:state.form
  })
}

export default connect(mapStateToProps, {postQuiz, inputChange})(Form)
