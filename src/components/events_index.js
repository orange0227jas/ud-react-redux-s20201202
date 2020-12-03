import React, { Component } from "react";
import { connect } from 'react-redux'
import _ from 'lodash'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.id}</td>
      </tr>
    ))
  }

  render () {
    return (
    <>
     <table>
       <thead>
         <tr>
          <th>ID</th>
          <th>title</th>
          <th>Body</th>
         </tr>
       </thead>
      <tbody>
        {this.renderEvents()}
      </tbody>
     </table>
    </>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
// const mapDispatchToProps = dispatch => ({
//   increment:() => dispatch(increment()),
//   decrement:() => dispatch(decrement())
// })
//↑↓同じ意味になる。
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)