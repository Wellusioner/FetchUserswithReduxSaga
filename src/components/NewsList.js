import React from 'react'
import { connect } from 'react-redux';
import User from './User'

function NewsList({ users }) {
  
  return (
    <div className="users-group">
      { users && users.map( user => <User key={user.id} user={ user } /> ) }
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.news
})


export default  connect(mapStateToProps, null)(NewsList)