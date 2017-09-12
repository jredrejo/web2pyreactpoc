import React from 'react'
import ReactDOM from 'react-dom'
import ValidableForm from './ValidableForm'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <ValidableForm />
    </div>
  </Provider>,
  window.react_mount
)
