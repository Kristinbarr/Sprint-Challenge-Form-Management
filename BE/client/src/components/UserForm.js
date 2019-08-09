import React from 'react';
import { Form, Field, withFormik } from 'formik'


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
      password: password || '',
    }
  }
})(UserForm)

export default FormikUserForm
