import React from 'react'
import { MapPin, Building2, Github, Mail, Twitter, Globe, User, Users, UserCircle } from 'lucide-react'
import profileImage from './assets/noProfile_vector.jpg'

export default function ProfileCard({ userData }) {

  if (!userData) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md p-8 w-full h-[280px] flex flex-col justify-center items-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <UserCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-gray-700 font-bold text-xl mb-2">User Profile</h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Search for a GitHub user to view their profile information
          </p>
        </div>
      </div>
    );
  }

  const socials = {
    github: userData?.html_url,
    twitter: userData?.twitter_username ? `https://twitter.com/${userData.twitter_username}` : null,
    email: userData?.email ? `mailto:${userData.email}` : null,
    portfolio: userData?.blog,
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start gap-6 mt-1 rounded-2xl w-full border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white p-6 relative max-w-fit">
      
      
      <h3 className="absolute top-3 text-gray-700 font-semibold text-lg ">Profile Card</h3>

      {/* Avatar */}
      <div className="flex-shrink-0 mt-8 lg:mt-6">
        <img
          className="rounded-full w-48 h-48 shadow-md border-2 object-cover border-white"
          src={userData?.avatar_url || profileImage}
          alt="profile"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col items-center lg:items-start gap-4 lg:text-left mt-4 lg:mt-8">
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-900">{userData?.name || userData?.login}</h3>
          <p className="text-base text-gray-500 mt-1">{userData?.login}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 text-sm">
          <p className="flex items-center gap-3">
            <Building2 className="w-4 h-4 text-gray-800" />
            <span className="text-gray-600">Company:</span>
            <span className="font-semibold text-sm">{userData.company || "NA"}</span>
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray-800" />
            <span className="text-gray-600">Location:</span>
            <span className="font-semibold text-sm break-words">{userData.location || "NA"}</span>
          </p>
        </div>

        <div className="flex gap-6">
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

        {userData?.bio && (
          <p className="max-w-md text-center lg:text-left text-sm text-gray-600 leading-relaxed break-words line-clamp-3">
            {userData?.bio || "Bio not available"}.
          </p>
        )}

        <div className="flex items-center gap-6">
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 transition" />
            </a>
          )}
          {socials.email && (
            <a href={socials.email} target="_blank" rel="noopener noreferrer">
              <Mail className="w-5 h-5 text-gray-500 hover:text-gray-800 transition" />
            </a>
          )}
          {socials.portfolio && (
            <a
              href={socials.portfolio.startsWith('http') ? socials.portfolio : `https://${socials.portfolio}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <Globe className="w-5 h-5 text-sky-500 hover:text-sky-700 transition" />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-sky-500 hover:text-sky-700 transition" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
