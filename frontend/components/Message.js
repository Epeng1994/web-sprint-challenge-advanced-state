import React from 'react'
import {connect} from 'react-redux'


function Message(props) {
  return <div id="message">{props.msg}</div>
}

const mapStateToProps = state=>{
  return({
    msg: state.infoMessage
  })
}

export default connect(mapStateToProps, {})(Message)