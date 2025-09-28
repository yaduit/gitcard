import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import SearchInput from './SearchInput'
import Stats from './Stats';
import ContiributionGraph from './ContiributionGraph';

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
    <div className=' flex flex-col items-center min-h-screen p-4  '>
      <SearchInput
      value={searchInput}
      onInputChange={handleSearch}
      onSearch={fetchData}
      />
      {loading && <p className='text-black text-sm mt-2'>Loading...</p>}

      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

      { !error && !loading && profileData&&(
      <>
      <ProfileCard userData={profileData}/>
      <Stats userData={profileData} repoStats={repoStats}/>
      <ContiributionGraph userData={profileData}/>
      </>
      )}
      
    </div>
  )
}
