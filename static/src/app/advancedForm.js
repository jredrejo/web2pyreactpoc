import React from 'react'
import ReactDOM from 'react-dom'
import SimpleForm from './SimpleForm'
import { Provider } from 'react-redux'
import store from './store'
import showResults from './showResultsSimpleForm'
class PageForm extends React.Component {
  submit(values) {
    console.log(values)
  }

  render() {
    // return <SimpleForm onSubmit={this.submit} />
    return <SimpleForm onSubmit={showResults} />
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <PageForm />
    </div>
  </Provider>,
  window.react_mount
)
