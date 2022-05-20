// ❗ You don't need to add extra action creators to achieve MVP

/*
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'
*/

import * as actionTypes from './action-types'
import axios from 'axios'

export function moveClockwise() {
  return{ type: actionTypes.MOVE_CLOCKWISE}
}

export function moveCounterClockwise() { 
  return{ type: actionTypes.MOVE_COUNTERCLOCKWISE}
}

export function selectAnswer(payload) {
  return{ type: actionTypes.SET_SELECTED_ANSWER, payload: payload}
 }

export function setMessage() { }

export function setQuiz(payload) {
  return{type:actionTypes.SET_QUIZ_INTO_STATE, payload:payload}
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res=>{
        console.log(res.data)
        dispatch(setQuiz(res.data))
      })
      .catch(err=>{
        console.log('oops')
      })
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
