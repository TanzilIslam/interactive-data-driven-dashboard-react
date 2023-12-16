import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './utils/ThemeContext'
import { Provider } from 'react-redux'
import store from './store/store'
import Toast from './components/Toast'

import './css/style.css'
import './charts/ChartjsConfig'

import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toast />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
