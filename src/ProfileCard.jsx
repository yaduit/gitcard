import React from 'react'
import { MapPin , Building2, Github,  Linkedin, Instagram, Twitter } from 'lucide-react'

export default function ProfileCard({userData}) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4 m-auto mt-6 cursor-pointer rounded-md w-fit shadow-md shadow-gray-500'>
        <div>
            <img className='rounded-full w-48 shadow-md border-2 object-cover border-white mt-2' src={userData.avatar_url} alt="profile" />
        </div>
        
        <div className='text-center gap-2'>
            <h3 className='text-2xl font-bold text-gray-900'>{userData.login}</h3>
            <p className='text-sm text-gray-500 mt-1'>{userData.name}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
 
  <div className="flex items-center gap-2 text-gray-700 text-sm">
    <Building2 className="w-4 h-4 text-gray-600" />
    <span>
      <span className="font-semibold">Company:</span> {userData.company || "not mentioned"}
    </span>
  </div>


  <div className="flex items-center gap-2 text-gray-700 text-sm">
    <MapPin className="w-4 h-4 text-gray-600" />
    <span>
      <span className="font-semibold">Location:</span> {userData.location || "not provided"}
    </span>
  </div>
</div>


        <div className='flex gap-4 mt-3 font-semibold '>
            <span >followers: {userData.followers}</span>
            <span>following: {userData.following}</span>
        </div>
        <p className='max-w-md text-center mt-2 text-sm text-gray-600 leading-relaxed'>{userData.bio || "not much information"}.</p>

        <div className='flex items-center gap-4 mt-4'>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className='w-5 h-5 text-gray-700 hover:text-gray-900 transition'/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className='w-5 h-5 text-blue-600 hover:text-blue-800 transition'/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className='w-5 h-5 text-pink-500 hover:text-pink-700 transition '/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className='w-5 h-5 text-sky-500 hover:text-sky-700 transition'/>
            </a>
        </div>

    </div>
  )
}