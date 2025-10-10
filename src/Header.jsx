import React from 'react'
import { Github } from 'lucide-react'

export default function Header() {
  return (
    <div>
        <div className='flex items-center gap-2 m-2'>
        <Github size={60} className='text-gray-600' />
        <span className='font-semibold text-gray-700 text-lg'>GitCard</span>
      </div>
    </div>
  )
}
