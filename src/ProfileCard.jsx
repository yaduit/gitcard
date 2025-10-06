import React from 'react'
import { MapPin,Building2,Github,Mail,Twitter,Globe,User,Users } from 'lucide-react'
import profileImage from './assets/noProfile_vector.jpg'

export default function ProfileCard({userData}) {

  const socials = {
    github : userData?.html_url,
    twitter: userData?.twitter_username ?  `https://twitter.com/${userData.twitter_username}`:null,
    email : userData?.email ? `mailto:${userData.email}`: null,
    portfolio: userData?.blog,
  }
  return (
    <div className='flex flex-col items-center justify-center gap-2  mt-3 cursor-pointer rounded-xl w-full max-w-lg shadow-md hover:shadow-lg transition b-white shadow-gray-500 p-3'>
        <div>
            <img className='rounded-full w-48 shadow-md border-2 object-cover border-white mt-2' src={userData?.avatar_url || profileImage } alt="profile" />
        </div> 
        
        <div className='text-center gap-2'>
            <h3 className='text-2xl font-bold text-gray-900'>{userData?.login}</h3>
            <p className='text-base text-gray-500 mt-1'>{userData?.name}</p>
        </div>

      <div className='flex gap-4 mt-3'>
         <p className='flex items-center gap-3 '>
            <Building2 className='w-4 h-4 text-gray-800 flex-1'/>
            <span className='text-gray-600'>Company: </span>
            <span className='font-semibold text-sm'>{userData.company ||"NA"}</span>
          </p>
          <p className='flex items-center gap-3'>
            <MapPin className='w-4 h-4 text-gray-800 flex-1'/>
            <span className='text-gray-600'>Location: </span>
            <span className='font-semibold text-sm break-words'>{userData.location|| "NA"}</span>
          </p>
          


      </div>


      <div className="flex gap-6 mt-4">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
          <User className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-semibold">Following:</span>
          <span className="font-bold">{userData.following}</span>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
          <Users className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-semibold">Followers:</span>
          <span className="font-bold">{userData.followers}</span>
        </div>
      </div>

        <p className='max-w-md text-center mt-2 text-sm text-gray-600 leading-relaxed break-words line-clamp-3 '>{userData?.bio || "not available"}.</p>

        <div className='flex items-center gap-6 mt-4'>
          {socials.github && (
             <a href={socials.github} target="_blank" rel="noopener noreferrer">
                <Github className='w-5 h-5 text-gray-600 hover:text-gray-900 transition'/>
            </a>
          )}
           {socials.email && (
            <a href={socials.email} target="_blank" rel="noopener noreferrer">
                <Mail className='w-5 h-5 text-gray-500 hover:text-gray-800 transition'/>
            </a>
           )}
            {socials.blog && (
               <a href={socials.blog} target="_blank" rel="noopener noreferrer">
                <Globe className='w-5 h-5 text-sky-500 hover:text-sky-700 transition '/>
            </a>
            )}
           
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className='w-5 h-5 text-sky-500 hover:text-sky-700 transition'/>
            </a>
            )}
        </div>
            

    </div>
  )
} 