import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const logoUrl =
  'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'

const inputClass =
  'block w-full font-medium rounded-md border-0 py-1.5 text-indigo-500 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
const errorInputClass = 'ring-red-500 focus:ring-red-500'

const Login = () => {
  const navigate = useNavigate()

  const [formError, setFormError] = useState('')

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: 'admin@gmail.com',
      password: '12345',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted with values:', values)
      setFormError('') // Clear any previous form errors
      navigate('/dashboard')
    },
  })

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logoUrl} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-500">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border px-6 shadow py-8 rounded-lg">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-indigo-500"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`${inputClass} ${
                  formik.touched.email && formik.errors.email
                    ? errorInputClass
                    : ''
                }`}
                placeholder="Enter Your Email Address"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-indigo-500"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`${inputClass} ${
                  formik.touched.password && formik.errors.password
                    ? errorInputClass
                    : ''
                }`}
                placeholder="Enter Your Password"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.password}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" mb-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <a
              className="underline text-sm"
              download="Tanzil's_project_documentation.pdf"
              href="/doc.pdf"
            >
              Project Documentation
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
