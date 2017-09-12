// Code based on https://codesandbox.io/s/20qpmo0v10
import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import submit from './submit'

const renderError = ({ meta: { touched, error } }) => (touched && error ? <div className="error">{error}</div> : false)
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>

    <input {...input} placeholder={label} type={type} />
    {touched && error && <div className="error">{error}</div>}
  </div>
)

renderError.propTypes = { meta: PropTypes.object }
renderField.propTypes = {
  label: PropTypes.element,
  type: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
}
const ValidableForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component={renderField} type="text" placeholder="First Name" />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component={renderField} type="text" placeholder="Last Name" />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component={renderField} type="email" placeholder="Email" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component={renderField} type="radio" value="male" /> Male
          </label>
          <label>
            <Field name="sex" component={renderField} type="radio" value="female" /> Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component={renderField} type="checkbox" />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      {error && (
        <div className="error">
          <strong>{error}</strong>
        </div>
      )}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}
ValidableForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string
}
export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(ValidableForm)
