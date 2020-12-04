import React, { Component } from "react";
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FlootingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { readEvents } from '../actions'
import { Tab } from "material-ui";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableHeaderColumn>{event.id}</TableHeaderColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
             {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render () {
    const style= {
      position: "fixed",
      right: 12,
      bottom:12
    }
    return (
    <>
    <FlootingActionButton style={style} containerElement={<Link to="/events/new" />}>
      <ContentAdd></ContentAdd>

    </FlootingActionButton>
     <Table>
       <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
       >
         <TableRow>
          <TableRowColumn>ID</TableRowColumn>
          <TableHeaderColumn>title</TableHeaderColumn>
          <TableHeaderColumn>Body</TableHeaderColumn>
         </TableRow>
       </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {this.renderEvents()}
      </TableBody>
     </Table>
     <Link to="/events/new">New Event </Link>
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