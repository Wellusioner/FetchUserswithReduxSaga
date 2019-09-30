import { put, takeLatest, all } from 'redux-saga/effects'

function* fetchNews(){
  const json = yield fetch('https://api.github.com/users')
    .then(res => res.json())
  yield put({ type: 'USERS_RECEIVED', json })
}

function* actionWatcher(){
  yield takeLatest('GET_USERS', fetchNews)
}

function* fetchSingle({ login }){
    const username = login ? `/${login}` : ''
    const json = yield fetch(`https://api.github.com/users${username}`)
      .then(res => res.json())
    yield put({ type: 'USERS_RECEIVED', json: [json] })
}

function* actionWatcher2(){
  yield takeLatest('SINGLE_USER', fetchSingle)
}

export default function* rootSaga(){
  yield all([
    actionWatcher(),
    actionWatcher2()
  ])
}