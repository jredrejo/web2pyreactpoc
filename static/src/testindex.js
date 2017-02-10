import React from 'react'
import ReactDOM from 'react-dom'

const Leaderboard = ({users}) =>
    <div>
        <h1>Featured Players</h1>

        {users.map(user =>
            <a href={`/user/${user.username}/`}>
                {user.username}
            </a>)}
    </div>


ReactDOM.render(
    React.createElement(Leaderboard, window.props),    // gets the props that are passed in the template
    window.react_mount,                                // a reference to the #react div that we render to
)