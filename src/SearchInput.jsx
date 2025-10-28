import React from 'react'
import { Search } from 'lucide-react'

export default function SearchInput({ value, onInputChange, onSearch }) {
  return (
    <div className="mx-auto mt-3 max-w-sm border border-gray-300 rounded-full shadow-sm bg-white transition-all hover:shadow-md">
      <div className="flex items-center px-4 py-2">
        <input
          type="text"
          placeholder="Search GitHub user..."
          value={value}
          onChange={onInputChange}
          required
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent h-5"
        />
        <button
          onClick={onSearch}
          type="submit"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
