import React from 'react'
import {
  MapPin,
  Building2,
  Github,
  Mail,
  Twitter,
  Globe,
  User,
  Users,
  UserCircle,
} from 'lucide-react'
import profileImage from './assets/noProfile_vector.jpg'

export default function ProfileCard({ userData }) {
  if (!userData) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow p-5 w-full h-[200px] flex flex-col justify-center items-center">
        <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-3 shadow-md">
            <UserCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-700 font-semibold text-base mb-1">User Profile</h3>
          <p className="text-gray-500 text-xs max-w-xs">
            Search for a GitHub user to view their profile info
          </p>
        </div>
      </div>
    )
  }

  const socials = {
    github: userData?.html_url,
    twitter: userData?.twitter_username
      ? `https://twitter.com/${userData.twitter_username}`
      : null,
    email: userData?.email ? `mailto:${userData.email}` : null,
    portfolio: userData?.blog,
  }

  return (
    <div className="relative flex flex-col ml-2 md:flex-row items-center md:items-start justify-start gap-4 mt-2 rounded-xl w-full border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 bg-white p-6 max-w-[650px] mx-auto overflow-hidden">

      
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>
      <div className="absolute top-3 left-4 flex items-center gap-2 z-10">
        <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-sm">
          <UserCircle className="w-3.5 h-3.5 text-white" />
        </div>
        <h3 className="text-gray-700 font-semibold text-sm tracking-wide">Profile</h3>
      </div>

      {/* Avatar */}
      <div className="flex-shrink-0 mt-8 md:mt-6">
        <img
          className="rounded-full w-28 h-28 shadow border object-cover border-gray-100"
          src={userData?.avatar_url || profileImage}
          alt="profile"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col items-center md:items-start gap-3 md:text-left mt-2 md:mt-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900">{userData?.name || userData?.login}</h3>
          <p className="text-sm text-gray-500 mt-0.5">@{userData?.login}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 text-xs">
          <p className="flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-gray-700" />
            <span className="text-gray-600">Company:</span>
            <span className="font-semibold">{userData.company || "NA"}</span>
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gray-700" />
            <span className="text-gray-600">Location:</span>
            <span className="font-semibold break-words">{userData.location || "NA"}</span>
          </p>
        </div>

        <div className="flex gap-3">
          <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-0.5 rounded-md text-xs">
            <User className="w-3.5 h-3.5 text-gray-600" />
            <span className="font-semibold">Following:</span>
            <span className="font-bold">{userData.following}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-0.5 rounded-md text-xs">
            <Users className="w-3.5 h-3.5 text-gray-600" />
            <span className="font-semibold">Followers:</span>
            <span className="font-bold">{userData.followers}</span>
          </div>
        </div>

        {userData?.bio && (
          <p className="max-w-sm text-center md:text-left text-xs text-gray-600 leading-relaxed break-words line-clamp-2">
            {userData?.bio}
          </p>
        )}

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-1">
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 text-gray-600 hover:text-gray-900 transition" />
            </a>
          )}
          {socials.email && (
            <a href={socials.email} target="_blank" rel="noopener noreferrer">
              <Mail className="w-4 h-4 text-gray-500 hover:text-gray-800 transition" />
            </a>
          )}
          {socials.portfolio && (
            <a
              href={
                socials.portfolio.startsWith('http')
                  ? socials.portfolio
                  : `https://${socials.portfolio}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="w-4 h-4 text-sky-500 hover:text-sky-700 transition" />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4 text-sky-500 hover:text-sky-700 transition" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
