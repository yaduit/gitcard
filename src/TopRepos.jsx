import {Code, ExternalLink, GitFork, Star } from 'lucide-react';
import React, { useState , useEffect} from 'react'

export default function TopRepos({userData}) {

    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[repos, setRepos] = useState([]);

    useEffect(() => {
    if (userData?.login) {
      fetchTopRepo()
    }
  }, [userData])

  
    const fetchTopRepo = async ()=>{
    setLoading(true);
    setError(null);
    try{
     const response= await fetch(`https://api.github.com/users/${userData.login}/repos?sort=stars&per_page=10&direction=desc`);
     if(!response.ok){
        throw new Error("failed to fetch repositories")
     }
     const data = await response.json();
     setRepos(data);
    }
    catch(err){
        console.log("something went wrong", err)
        setError("failed to fetch repositories")
    }
    finally{
        setLoading(false)
    }
    }

    if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
        <p className="text-gray-600 mt-3">Loading repositories...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    )
  }

  if (repos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Code className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-600">No public repositories found</p>
      </div>
    )
  }

   return(
    <div className='b-white shadow-sm hover:shadow-md transition duration-200 shadow-gray-500 p-4 rounded-md max-h-[400px] space-y-4 overflow-y-auto'>
      {repos.map((repo)=>(
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}



function RepoCard({repo}){
     const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Ruby: '#701516',
    PHP: '#4F5D95',
    'C++': '#f34b7d',
    C: '#555555',
    'C#': '#178600',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Shell: '#89e051',
    Vue: '#41b883',
    React: '#61dafb',
  }

  const languageColor = languageColors[repo.language] || '#8b949e'


    return(
      <div className='border border-gray-200 shadow-sm hover:shadow-md transition duration-200 bg-white p-5 items-center'>

        <div className='flex items-center justify-between mb-3 p-4'>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer' className='text-xl font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2'>
          <Code className='w-5 h-5 flex-shrink-0'/>
          <span>{repo.name}</span>
          <ExternalLink className='w-4 h-4 text-gray-400 hover:text-blue-600 transition-colors flex-shrink-0'/>
          </a>

        </div>


      <div className='flex items-center gap-6 mb-3 text-sm'>

        <div className='flex items-center gap-1.5'>
          <Star className='w-4 h-4 text-yellow-500'/>
          <span className='font-semibold  text-gray-700'>Stars:</span>
          <span className='text-gray-900'>{repo.stargazers_count}</span>

        </div>
        <span className='text-gray-300'>||</span>

        <div className='flex items-center gap-1.5'>
          <GitFork className='w-4 h-4 text-gray-500'/>
          <span className='font-semibold text-gray-700'>Forks:</span>
          <span className='text-gray-900'>{repo.forks_count}</span>

        </div>
       {repo.language && <span className='text-gray-300'>||</span>}
       {repo.language &&(
        <div className='flex items-center gap-1.5'>
          <span className='w-3 h-3 rounded-full'style={{backgroundColor : languageColor}}></span>
          <span className='font-semibold text-gray-700'>Language:</span>
          <span className='text-gray-900'>{repo.language}</span>

        </div>
       )}

       

      </div>

       <div className='mb-3'>
        <p className='text-sm text-gray-700 leading-relaxed '>
          <span className='font-semibold text-gray-800'>Description:</span>
          {repo.description||"No Description Provided"}
       </p>

       </div>
      </div>
    )

}