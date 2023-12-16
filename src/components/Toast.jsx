import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideToast } from '../store/store'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Toast = () => {
  const dispatch = useDispatch()
  const { showToast, message } = useSelector((state) => state.toast)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(hideToast())
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [showToast])

  return (
    <div
      className={`fixed bottom-0 right-0 m-4 px-4 py-2 bg-green-500 text-white font-bold rounded shadow ${
        showToast ? 'block' : 'hidden'
      }`}
    >
      <div className="flex items-center gap-2">
        <CheckCircleIcon className="h-6 w-g" />
        {message}
      </div>
    </div>
  )
}

export default Toast
