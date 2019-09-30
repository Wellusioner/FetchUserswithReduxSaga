import React from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions'

function Button({ getUsers, fetching }) {
  return (
    !fetching ? <button className="user-button" onClick={ getUsers }>Get users</button> : ''
  )
}

const mapDispatchToProps = {
  getUsers
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)