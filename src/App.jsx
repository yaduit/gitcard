import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import SearchInput from './SearchInput'
import Stats from './Stats'
import ContiributionGraph from './ContiributionGraph'
import { Search, Github } from 'lucide-react'
import TopRepos from './TopRepos'
import Logo from './Logo'
import Achievements from './Achievements'
import SkeletonLoading from './SkeletonLoading'


export default function App() {
  const [searchInput, setSearchInput] = useState('')
  const [profileData, setProfileData] = useState(null)
  const [repoStats, setRepoStats] = useState({ totalStars: 0, totalForks: 0 })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => setSearchInput(e.target.value)

  const fetchRepoStats = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`)
      if (!res.ok) throw new Error(`HTTP error! status:${res.status}`)
      const repos = await res.json()

      if (!Array.isArray(repos)) {
        setRepoStats({ totalStars: 0, totalForks: 0 })
        return
      }

      const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
      const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0)

      setRepoStats({ totalStars, totalForks })
    } catch (error) {
      console.error('Error fetching repo stats:', error)
      setRepoStats({ totalStars: 0, totalForks: 0 })
    }
  }

  const fetchData = async () => {
    const cleanInput = searchInput.trim().toLowerCase().replace(/[^a-zA-Z0-9-]/g, '')
    if (cleanInput === '') return
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`https://api.github.com/users/${cleanInput}`)
      if (!res.ok) {
        setError('User not found')
        setProfileData(null)
        setRepoStats({ totalStars: 0, totalForks: 0 })
        setLoading(false)
        return
      }

      const data = await res.json()
      setProfileData(data)
      setError(null)
      await fetchRepoStats(cleanInput)
    } catch (error) {
      console.error(error, 'something went wrong')
      setError('Something went wrong. Please try again later.')
      setProfileData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-2 mt-2">
      {/* Header Section */}
      <div className="flex flex-row justify-between gap-4 ">
        <Logo />

        <SearchInput
          value={searchInput}
          onInputChange={handleSearch}
          onSearch={fetchData}
        />
  
  <a
  href="https://github.com/login"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 border border-gray-300 text-gray-700 px-3 py-[1px] rounded-lg text-sm hover:bg-gray-100 transition mr-2"
>
  <Github className="w-4 h-4" />
  <span>Login</span>
</a>




      
       
      </div>

      {/* Loading & Error States */}
      {loading && (
        
          <SkeletonLoading/>
       
       
      )}

      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}

      {/* Empty State */}
      {!error && !loading && !profileData && (
      <div className="border border-gray-200 bg-white rounded-xl shadow-lg lg:w-7xl lg:h-[800px] mx-auto mt-3 ">
        <div className='text-center'>
          <Search size={140} className="text-gray-300 mx-auto mb-5 mt-40" />
          <h3 className="text-2xl font-semibold text-gray-600 mt-5 mb-2">
            Start Your Search
          </h3>
          <p className="text-gray-500 text-lg mt-5">
            Enter a GitHub username above to view their profile.
          </p>

        </div>
        
        </div>
      )}

      {/* Profile Section */}
      {!error && !loading && profileData && (
       <div className="border border-gray-200 bg-white rounded-xl shadow-lg p-4 sm:p-6 
                grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4 
                w-full max-w-6xl mx-auto">
  <div className="flex flex-col gap-6">
    <ProfileCard userData={profileData} />
    <TopRepos userData={profileData} />
  </div>

  <div className="flex flex-col gap-6">
    <Stats userData={profileData} repoStats={repoStats} />
    <ContiributionGraph userData={profileData} />
    <Achievements userData={profileData.login} />
  </div>
</div>

      )}
    </div>
  )
}
