import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchQuiz, selectAnswer, postAnswer, setMessage} from '../state/action-creators'

function Quiz(props) {

  useEffect(()=>{
    props.fetchQuiz()
  },[])

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quizState ? (
          <>
            <h2>{props.quizState.question}</h2>

            <div id={props.quizState.quiz_id}>
              {
                props.quizState.answers.map(a=>{
                  return(
                    <div className={props.answerState === a.answer_id ? "answer selected" : "answer"} onClick = {()=>{props.selectAnswer(a.answer_id);props.setMessage(null)}}>
                      {a.text}
                      <button>
                        {props.answerState === a.answer_id ? "SELECTED" : "select"}
                      </button>
                    </div>
                  )})
              }
            </div>
            <button id="submitAnswerBtn" disabled = {props.answerState ? false : true} onClick = {()=>props.postAnswer(props.quizState.quiz_id, props.answerState)}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


const mapStateToProps = state =>{
  return({
    quizState: state.quiz,
    answerState: state.selectedAnswer //id of answer
  })
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer, postAnswer, setMessage})(Quiz)