import React, { PureComponent} from 'react'
import { connect } from 'react-redux';
import { singleUser } from '../redux/actions'

class Search extends PureComponent{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const username = this.username.value
    if(username.trim() !== ''){
      this.props.singleUser(username)
      this.username.value = ''
    }else{
      alert('Enter a username')
      this.username.focus()
      return false
    }
  }

  render(){
      const { isFetched } = this.props
      return (
        isFetched ? <div className="search-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter a github username" 
            ref={ref => this.username = ref}
          />
          <button>Search</button>
        </form>
      </div> : ''
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetched: state.isFetched
  }
}

const mapDispatchToProps = {
  singleUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)