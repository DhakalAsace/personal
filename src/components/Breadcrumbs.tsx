import React from 'react'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbsProps {
  crumbs: { name: string; path: string }[]
  setCurrentPage: (page: string) => void
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs, setCurrentPage }) => {
  return (
    <nav className="bg-gray-800 py-2 px-4 sticky top-0 z-10">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <button
            onClick={() => setCurrentPage('home')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </button>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            {index === crumbs.length - 1 ? (
              <span className="text-[#00b22d]">{crumb.name}</span>
            ) : (
              <button
                onClick={() => setCurrentPage(crumb.path)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {crumb.name}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs