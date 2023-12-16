import React, { useState } from 'react'
import Pagination from '../../components/Pagination'
import DeleteUserModal from './DeleteUserModal'

import { showToast } from '../../store/store'

import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  ArrowsUpDownIcon,
} from '@heroicons/react/24/solid'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Table({ data }) {
  const dispatch = useDispatch()
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // State for sorting
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')

  // state for deleting
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  // Calculate current users to display
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentUsers = data.slice(startIndex, endIndex)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  // Handle column sorting
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection((prevDirection) =>
        prevDirection === 'asc' ? 'desc' : 'asc'
      )
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  // Get sort indicator icon
  const getSortIndicator = () => {
    return <ArrowsUpDownIcon className="h-4 w-4 ml-1 text-indigo-500" />
  }

  // Sort the data based on the selected column and direction

  const sortedData = currentUsers.slice().sort((a, b) => {
    if (sortColumn) {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]

      // Check if the values are strings and perform string comparison
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      } else {
        // If the values are not strings, compare them directly
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
      }
    }

    return 0
  })

  const openDeleteModal = (user) => {
    setSelectedUser(user)
    setIsDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setSelectedUser(null)
    setIsDeleteModalOpen(false)
  }
  const handleDeleteUser = () => {
    dispatch(showToast('User Successfully Deleted'))
    closeDeleteModal()
  }

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Total: {data?.length} Users
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                {/* Name column */}
                <th
                  className="p-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center">
                    <div className="font-semibold text-left">Name</div>
                    {getSortIndicator('name')}
                  </div>
                </th>
                {/* Email column */}
                <th className="p-2 whitespace-nowrap cursor-pointer">
                  <div className="flex items-center">
                    <div className="font-semibold text-left">Email</div>
                  </div>
                </th>
                {/* Spent column */}
                <th
                  className="p-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort('spent')}
                >
                  <div className="flex items-center">
                    <div className="font-semibold text-left">Spent</div>
                    {getSortIndicator('spent')}
                  </div>
                </th>
                {/* Country column */}
                <th className="p-2 whitespace-nowrap cursor-pointer">
                  <div className="flex items-center">
                    <div className="font-semibold text-center">Country</div>
                  </div>
                </th>
                {/* Action column */}
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {sortedData.map((user, index) => (
                <tr key={index}>
                  {/* Name */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src={user.image}
                          width="40"
                          height="40"
                          alt={user.name}
                        />
                      </div>
                      <div className="font-medium text-slate-800 dark:text-slate-100">
                        {user.name}
                      </div>
                    </div>
                  </td>
                  {/* Email */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{user.email}</div>
                  </td>
                  {/* Spent */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">
                      {user.spent}
                    </div>
                  </td>
                  {/* Country */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg text-center">{user.location}</div>
                  </td>
                  {/* Action */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="cursor-pointer flex gap-3 items-center justify-center">
                      <Link to={`/users/detail/${user?.id}`}>
                        <EyeIcon className="h-6 w-6 text-indigo-500 hover:text-indigo-700" />
                      </Link>
                      <Link to={`/users/form?id=${user.id}`}>
                        <PencilSquareIcon className="h-6 w-6 text- text-green-600 hover:text-green-700" />
                      </Link>
                      <TrashIcon
                        className="h-6 w-6 text-red-600 hover:text-red-700"
                        onClick={() => openDeleteModal(user)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="border-b mt-10 border-slate-300"></div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={handleDeleteUser}
        userName={selectedUser?.name || ''}
      />
    </div>
  )
}

export default Table
