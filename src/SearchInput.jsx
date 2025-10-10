import React from 'react'
import { Search ,Github} from 'lucide-react'

export default function SearchInput({value, onInputChange, onSearch}) {
  return (
    <div className=' mx-auto  border shadow-md border-gray-500 rounded-md mt-2 max-w-sm'>

      
      <div className='flex items-center p-2 pl-5'>
        <input 
          type="text" 
          placeholder='Search someone' 
          value={value} 
          onChange={onInputChange} 
          required 
          className='flex-1 outline-none placeholder-gray-400 text-gray-700'
        />
        <button 
          onClick={onSearch} 
          type='submit' 
          className='p-2 ml-2 rounded-md hover:bg-gray-100 transition-colors'
        >
          <Search className='w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors'/>
        </button>
        
      </div>
        
    </div>
  )
}

