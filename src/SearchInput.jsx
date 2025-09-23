import React from 'react'
import { Search } from 'lucide-react'

export default function SearchInput({value , onInputChange , onSearch}) {
  return (
    <div className='flex items-center gap-2 border border-gray-200 rounded-md px-4 py-2 max-w-md mx-auto'>
      <input type="text" placeholder='Search someone' value={value} onChange={onInputChange} required className='flex-1 outline-none placeholder-gray-400 text-gray-700'/>
      <button onClick={onSearch} type='submit' className='p-2 rounded-md hover:bg-gray-100'>
        <Search className='w-5 h-5 text-gray-500 hover:text-gray-700 transition'/>
      </button>
    </div>
  )
}
