import React, { Component } from "react";
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'

//import { postEvent } from '../actions'

class EventsNew extends Component {
  render () {
    return (
    <>
         <div>
             <p>eventNew</p>
        </div>
    </>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   increment:() => dispatch(increment()),
//   decrement:() => dispatch(decrement())
// })
//↑↓同じ意味になる。
//const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew)