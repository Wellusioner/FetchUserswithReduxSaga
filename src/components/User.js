import React from 'react'

function User({user}) {
  return (
    <div className="column">
      <div className="user">
        <img src={user.avatar_url} alt={user.login} />
        <div className="user-body">
          #<a className="user-link" href={user.html_url} target="_blank">{user.login}</a>
        </div>
      </div>
    </div>
  )
}

export default User