import React from 'react'
import { connect } from 'react-redux';

function Loading({ loading }) {
  return (
    loading 
    ? <div className="loader" id="loader-1"></div>
    : 
      ''
  )
}

const mapStateToProps = state => ({
  loading: state.loading
})

export default connect(mapStateToProps, null)(Loading)