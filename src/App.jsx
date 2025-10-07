import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import SearchInput from './SearchInput'
import Stats from './Stats';
import ContiributionGraph from './ContiributionGraph';
import { Search } from 'lucide-react';
import TopRepos from './TopRepos';
export default function App() {

  const[searchInput ,setSearchInput] = useState('');
  const[profileData , setProfileData] = useState(null);
  const[repoStats, setRepoStats]= useState({totalStars:0 , totalForks: 0})
  const[error , setError] = useState(null);
  const[loading , setLoading] = useState(false);


  const handleSearch = (e) =>{
    const Value = e.target.value;
    setSearchInput(Value);
  }

  const fetchRepoStats = async (username) => {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    if(!res.ok){
      throw new Error(`HTTP error! status:${res.status}`);
    }
    const repos = await res.json();
    if(!Array.isArray(repos)){
      setRepoStats({totalStars: 0, totalForks: 0});
      return;
    }
    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count ||0), 0);
    const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count ||0), 0);
    
    setRepoStats({ totalStars, totalForks });
  } catch (error) {
    console.error('Error fetching repo stats:', error);
    setRepoStats({totalStars: 0, totalForks: 0});
  }
};

  const fetchData = async () =>{
    const cleanInput = searchInput.trim().toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');
    if(cleanInput === '') return;
    setLoading(true);
    setError(null);
    try{
      const res =await fetch(`https://api.github.com/users/${cleanInput}`);
      if(!res.ok){
        setError("user not found");
        setProfileData(null);
        setRepoStats({totalStars: 0, totalForks: 0})
        setLoading(false);
        return;
        
      }
      const data = await res.json();
      setProfileData(data);
      
      setError(null);
      await fetchRepoStats(cleanInput);
    }
    catch(error){
      console.log(error,"something went wrong");
      setError("something went wrong please try again later");
      setProfileData(null);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen mx-auto mt-3 p-3'>
    <div >
      <SearchInput
      value={searchInput}
      onInputChange={handleSearch}
      onSearch={fetchData}
      />
      {loading && <p className='text-black text-sm mt-2'>Loading...</p>}

      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

      {
        !error && !loading && !profileData &&(
          <div className='text-center py-12 capitalize'>
            <div className='mb-4 '>
              <Search size={64} className='text-gray-300 mx-auto'/>
            </div>
            <h3 className='text-xl text-gray-700 font-semibold mb-4'>start your search </h3>
            <p className='text-gray-500 mb-4'>Enter a github us  ername above to view their profile</p>
            

          </div>
        )
      }

      { !error && !loading && profileData&&(
      <>
      <div className='space-y-4'>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <div className='lg:col-span-1'>
       <ProfileCard userData={profileData}/>
      </div>
      <div className='lg:col-span-2 space-y-6'>
      <Stats userData={profileData} repoStats={repoStats}/>
      <ContiributionGraph userData={profileData}/>
      </div>
      <div >
      <TopRepos userData={profileData}/>
      </div>
      </div>

      </div>
      
      </>
      )}
      
    </div>
    </div>
  )
}
  