// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as actions from './action-types'

/*
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'
*/


const initialWheelState = ['B','','','','','']
function wheel(state = initialWheelState, action) {
  let place = state.indexOf('B')
  let newWheel = ['','','','','','']
  switch(action.type){
    case actions.MOVE_CLOCKWISE:
      if(place + 1 > 5){
        return ['B','','','','','']
      }else{
        newWheel[place+1] = 'B'
        return newWheel
      }
    case actions.MOVE_COUNTERCLOCKWISE:
      if(place === 0){
        return ['','','','','','B']
      }else{
        newWheel[place-1] = 'B'
        return newWheel
      }
    default:
      return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case actions.SET_QUIZ_INTO_STATE: 
      return action.payload;
    default:
      return state;
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case actions.SET_SELECTED_ANSWER:
      return action.payload;
    default:
      return state
  }
  
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
