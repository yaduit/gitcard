import React from 'react'
import { Github } from 'lucide-react'

export default function Header() {
  return (
    <div>
        <div className='flex items-center gap-1 m-2 '>
        <div className=' rounded-full p-2 '>
             <Github size={30} className='text-gray-600' />
        </div>       
        <span className=' text-gray-700 text-lg'>GitCard</span>
      </div>
    </div>
  )
}
