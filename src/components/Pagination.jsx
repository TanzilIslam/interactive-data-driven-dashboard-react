import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPageButtons = 3 // Maximum number of page buttons to display
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2))
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages)

  const visiblePages = pages.slice(startPage - 1, endPage)

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex space-x-2">
        {currentPage > 1 && (
          <li>
            <button
              className="px-3 py-1 rounded hover:bg-indigo-300"
              onClick={() => onPageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
        )}
        {visiblePages.map((page) => (
          <li key={page}>
            <button
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? 'bg-indigo-500 text-white'
                  : 'hover:bg-indigo-400'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button
              className="px-3 py-1 rounded hover:bg-indigo-300"
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination
