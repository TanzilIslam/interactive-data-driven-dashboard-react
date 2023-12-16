import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  RocketLaunchIcon,
  UserGroupIcon,
  FireIcon,
} from '@heroicons/react/24/solid'
import SidebarLinkGroup from './SidebarLinkGroup'

const links = [
  { title: 'Dashboard', pathname: '/dashboard', icon: RocketLaunchIcon },
  { title: 'Users', pathname: '/users', icon: UserGroupIcon },
]

const SidebarLink = ({ to, icon: Icon, title, pathname, onClick }) => {
  const isActive = pathname.startsWith(to)

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        isActive && 'bg-slate-900'
      }`}
    >
      <NavLink
        end
        to={to}
        className={`block text-slate-200 truncate transition duration-150 ${
          isActive ? 'hover:text-slate-200' : 'hover:text-white'
        }`}
        onClick={onClick}
      >
        <div className="flex items-center">
          <Icon
            className={`w-6 h-6 fill-current ${
              isActive ? 'text-indigo-500' : ''
            }`}
          />
          <span
            className={`text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${
              isActive ? 'text-indigo-500' : ''
            }`}
          >
            {title}
          </span>
        </div>
      </NavLink>
    </li>
  )
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation()
  const { pathname } = location

  const trigger = useRef(null)
  const sidebar = useRef(null)

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded)
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded')
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/dashboard" className="block">
            <FireIcon className="h-10 w-10 text-indigo-500" />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          <ul className="mt-3">
            {links.map((link, index) => (
              <SidebarLink
                key={index}
                to={link.pathname}
                icon={link.icon}
                title={link.title}
                pathname={pathname}
                onClick={() => {
                  if (sidebarExpanded) {
                    setSidebarOpen(false)
                  }
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
