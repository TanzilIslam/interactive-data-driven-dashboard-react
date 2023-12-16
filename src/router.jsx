import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './layout/Default'
import Error from './pages/Error'
import DashboardLayout from './layout/Dashboard'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UsersList from './pages/users/List'
import UserForm from './pages/users/Form'
import UserDetail from './pages/users/Detail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            element: <UsersList />,
          },
          {
            path: 'form',
            element: <UserForm />,
          },
          {
            path: 'detail/:userId',
            element: <UserDetail />,
          },
        ],
      },
    ],
  },
])
