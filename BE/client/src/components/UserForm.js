import React from 'react'
import axios from 'axios'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const UserForm = ({ errors, touched, status }) => {
  return (
    <Form>
      <div>
        <Field type='text' name='username' placeholder='Name' />
        {touched.username && errors.username && (
          <p className='error'>{errors.username}</p>
        )}
      </div>
      <div>
        <Field type='password' name='password' placeholder='Password' />
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}
      </div>
      <button>SUBMIT</button>
    </Form>
  )
}

const FormikUserForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4)
      .required(),
    password: Yup.string()
      .min(8)
      .required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios.post('http://localhost:5000/api/register', values)
    .then((res) => {
      setStatus(res.data)
      resetForm()
    })
  }
})(UserForm)

export default FormikUserForm
