import React, { useState } from 'react'
import { UserGroupIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import Table from '../../partials/users/Table'
import { users } from '../../data/users'
import { Link } from 'react-router-dom'

export default function List() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter users based on the search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className="flex flex-wrap justify-between gap-4 items-center mb-10">
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            Users
          </h1>
          <UserGroupIcon className="h-10 w-10 text-indigo-500" />
        </div>
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <input
            className="form-input"
            placeholder="Search User"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/users/form" className="primary-btn">
            <PlusCircleIcon className="h-6 w-6" /> Add User
          </Link>
        </div>
      </div>
      <Table data={filteredUsers} />
    </>
  )
}
