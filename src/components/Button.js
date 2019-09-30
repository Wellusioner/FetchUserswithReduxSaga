import React from 'react'
import { connect } from 'react-redux';
import {getNews} from '../redux/actions'

function Button({ getNews, fetching }) {
  return (
    !fetching ? <button className="user-button" onClick={ getNews }>Get users</button> : ''
  )
}

const mapDispatchToProps = {
  getNews
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)