import React from 'react'
import { Github } from 'lucide-react'

export default function Logo() {
  return (
    
        <div className='flex items-center gap-1 m-2 p-1 shadow-md rounded-lg w-fit cursor-pointer'>
        <div className=' rounded-full p-1 '>
             <Github size={20} className='text-gray-600' />
        </div>       
        <span className=' text-gray-700 text-sm text-center p-1'>GitCard</span>
      </div>
   
  )
}
