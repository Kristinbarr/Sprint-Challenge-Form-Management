import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const UserForm = ({ errors, touched, status }) => {
  return (
    <Form>
      <div>
        <Field type='text' name='username' placeholder='Name' />
      </div>
      <div>
        <Field type='password' name='password' placeholder='Password' />
      </div>
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
  })
})(UserForm)

export default FormikUserForm
