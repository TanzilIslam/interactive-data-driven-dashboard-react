// src/Form.js
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import Datepicker from '../../components/Datepicker'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showToast } from '../../store/store'
import { useSearchParams } from 'react-router-dom'
import { userForm } from '../../data/users'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  checkbox: Yup.boolean().oneOf([true], 'Checkbox must be checked'),
  radio: Yup.string().required('Please select a radio option'),
  toggle: Yup.boolean().oneOf([true], 'Toggle must be switched on'),
  select: Yup.string().required('Please select an option'),
  textarea: Yup.string().required('Textarea cannot be empty'),
  date: Yup.date().required('Date is required'),
  dateRange: Yup.string().required('Date range is required'),
})

const Form = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const formik = useFormik({
    initialValues: id
      ? { ...userForm }
      : {
          name: '',
          email: '',
          password: '',
          checkbox: false,
          radio: '',
          toggle: false,
          select: '',
          file: null,
          textarea: '',
          date: '',
          dateRange: '',
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(showToast('User Created Successfully'))
      navigation('/users')
    },
  })

  return (
    <div className="max-w-2xl mx-auto  dark:border dark:border-slate-800 p-8 rounded-md shadow-md">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          User Form
        </h1>
        <UserCircleIcon className="h-10 w-10 text-indigo-500 ml-4" />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-2  form-input"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.name}
            </div>
          )}
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2  form-input"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.email}
            </div>
          )}
        </div>
        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full p-2  form-input"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.password}
            </div>
          )}
        </div>
        {/* Checkbox */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.checkbox}
              className="mr-2 form-checkbox"
            />
            I agree to the terms and conditions
          </label>
          {formik.errors.checkbox && formik.touched.checkbox && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.checkbox}
            </div>
          )}
        </div>
        {/* Radio Buttons */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Choose an option:
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="radioOption1"
                name="radio"
                value="option1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.radio === 'option1'}
                className="form-radio"
              />
              <span className="ml-2">Option 1</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                id="radioOption2"
                name="radio"
                value="option2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.radio === 'option2'}
                className="form-radio"
              />
              <span className="ml-2">Option 2</span>
            </label>
          </div>
          {formik.errors.radio && formik.touched.radio && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.radio}
            </div>
          )}
        </div>

        {/* Select Box */}
        <div className="mb-4">
          <label
            htmlFor="select"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Select an option
          </label>
          <select
            id="select"
            name="select"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.select}
            className="w-full p-2  form-select"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {formik.errors.select && formik.touched.select && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.select}
            </div>
          )}
        </div>
        {/* File Upload */}
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Upload a file
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(event) =>
              formik.setFieldValue('file', event.currentTarget.files[0])
            }
            onBlur={formik.handleBlur}
            className="w-full p-2  form-input"
          />
          {formik.errors.file && formik.touched.file && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.file}
            </div>
          )}
        </div>
        {/* Textarea */}
        <div className="mb-4">
          <label
            htmlFor="textarea"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Comments
          </label>
          <textarea
            id="textarea"
            name="textarea"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.textarea}
            rows="4"
            className="w-full p-2  form-textarea"
          ></textarea>
          {formik.errors.textarea && formik.touched.textarea && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.textarea}
            </div>
          )}
        </div>
        {/* Date Input */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Select a date range
          </label>
          <Datepicker
            className="w-full"
            onSelect={(selectedDates) => {
              const formattedDates = selectedDates.map((date) =>
                date.toISOString()
              )
              formik.setFieldValue('dateRange', formattedDates.join(' to '))
            }}
            align="center"
          />

          {formik.errors.dateRange && formik.touched.dateRange && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.dateRange}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Select a date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className="w-full p-2  form-input"
          />
          {formik.errors.date && formik.touched.date && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.date}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center flex-wrap gap-4">
          <Link to="/users" className="danger-btn flex-1">
            Cancel
          </Link>
          <button type="submit" className="primary-btn flex-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
