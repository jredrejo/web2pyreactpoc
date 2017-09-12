import axios from 'axios'
import { SubmissionError } from 'redux-form'

function submit(values) {
  let securityValues = {
    _formname: window.props.formname,
    _formkey: window.props.formkey
  }
  values = Object.assign(values, securityValues)
  return axios
    .post(`${window.location.href}.json`, values)
    .then(function(response) {
      if (response.data.props) window.props.formkey = response.data.props.formkey
      if (Object.keys(response.data.errors).length > 0) return Promise.reject(new SubmissionError(response.data.errors))
      else window.alert('Form accepted')
    })
    .catch(function(error) {
      if (error instanceof Error) {
        return new Promise((resolve, reject) => {
          const totalErrors = Object.assign({ _error: error.message }, error.errors)
          reject(new SubmissionError(totalErrors))
        })
      } else {
        console.log(error.data)
      }
    })
}

export default submit
