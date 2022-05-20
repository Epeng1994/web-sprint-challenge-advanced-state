import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchQuiz, selectAnswer} from '../state/action-creators'

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
              
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick ={()=>props.fetchQuiz()}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


const mapStateToProps = state =>{
  return({
    quizState: state.quiz,
    answerState: state.selectedAnswer
  })
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer})(Quiz)