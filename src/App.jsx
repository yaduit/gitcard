import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import SearchInput from './SearchInput'
import Stats from './Stats'
import ContiributionGraph from './ContiributionGraph'
import { Search, Github } from 'lucide-react'
import TopRepos from './TopRepos'
import Logo from './Logo'
import Achievements from './Achievements'

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
    <div className="min-h-screen bg-gray-50 p-5">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
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
          className="flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-300 shadow-sm rounded-md hover:bg-gray-100 transition"
        >
          <Github className="w-5 h-5 text-gray-700" />
          <span className="font-medium text-gray-700">Login</span>
        </a>
      </div>

      {/* Loading & Error States */}
      {loading && (
        <p className="text-gray-700 text-sm mt-2 text-center">Loading...</p>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}

      {/* Empty State */}
      {!error && !loading && !profileData && (
        <div className="text-center py-16">
          <Search size={64} className="text-gray-300 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Start Your Search
          </h3>
          <p className="text-gray-500 text-sm">
            Enter a GitHub username above to view their profile.
          </p>
        </div>
      )}

      {/* Profile Section */}
      {!error && !loading && profileData && (
        <div className="border border-gray-200 bg-white rounded-xl shadow-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
          <div className="flex flex-col gap-6 ml-3">
            <ProfileCard userData={profileData} />
            <TopRepos userData={profileData} />
          </div>

          <div className="flex flex-col gap-6 ">
            <Stats userData={profileData} repoStats={repoStats} />
            <ContiributionGraph userData={profileData} />
            <Achievements userData={profileData.login} />
          </div>
        </div>
      )}
    </div>
  )
}
