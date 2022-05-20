import React from 'react'
import {connect} from 'react-redux'
import {moveClockwise, moveCounterClockwise} from '../state/action-creators'

function Wheel(props) {
  return (
    <div id="wrapper">
      <div id="wheel">
        {
          props.wheelState.map((a,i)=>{
            return(
              <div className={ a ? "cog active" : "cog"} style={{ "--i": i }}>{ a ? a : ''}</div>
            )
          })
        }
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn"  onClick = {props.moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick = {props.moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}


const mapStateToProps = state =>{
  return{
    wheelState : state.wheel
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)
