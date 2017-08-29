import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Leaderboard = function({ users }) {
  return (
    <div>
      <h1>Featured Players</h1>
      <ul>
        {users.map(user => (
          <li key={user.username}>
            <a href={`/user/${user.username}/`}>{user.username}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
Leaderboard.propTypes = { users: PropTypes.array }
ReactDOM.render(
  React.createElement(Leaderboard, window.props), // gets the props that are passed in the template
  window.react_mount // a reference to the #react div that we render to
)
