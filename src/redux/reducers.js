const reducer = (state={}, action) => {
  switch(action.type){
    case 'GET_USERS':
    
      return { ...state, loading: true, fetching: true }
    case 'SINGLE_USER':
      return { ...state, loading: true, fetching: true }
    case 'USERS_RECEIVED':
      return { ...state, news: action.json, loading: false, isFetched: true }
    case 'HANDLE_ERROR':
      return { ...state, error: action.error }
    default:
      return state
  }
}

export default reducer