import React from 'react';
import Button from './components/Button'
import Loading from './components/Loading'
import NewsList from './components/NewsList'


function App() {
  return (
    <div className="App container">
      <h1 className="app-title">GitHub Users API</h1>
      <Button />
      <Loading />
      <NewsList />
    </div>
  );
}

export default App;
