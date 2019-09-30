import { put, takeLatest, all } from 'redux-saga/effects'

function* fetchNews(){
  const json = yield fetch('https://api.github.com/users')
    .then(res => res.json())
  yield put({ type: 'NEWS_RECEIVED', json })
}

function* actionWatcher(){
  yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga(){
  yield all([
    actionWatcher()
  ])
}