import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import SearchInput from './SearchInput'
import Stats from './Stats';

export default function App() {

  const[searchInput ,setSearchInput] = useState('');
  const[profileData , setProfileData] = useState(null);
  const[error , setError] = useState(null);
  const[loading , setLoading] = useState(false);


  const handleSearch = (e) =>{
    const trimmedValue = e.target.value
    setSearchInput(trimmedValue);
  }

  const fetchData = async () =>{
    if(searchInput === '')return;
    setLoading(true);
    setError(null);
    try{
      const res =await fetch(`https://api.github.com/users/${searchInput}`);
      if(!res.ok){
        setError("user not found");
        setProfileData(null);
        setLoading(false);
        return;
        
      }
      const data = await res.json();
      setProfileData(data);
      setError(null);
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
    <div className=' flex flex-col items-center min-h-screen p-4 justify-center '>
      <SearchInput
      value={searchInput}
      onInputChange={handleSearch}
      onSearch={fetchData}
      />
      {loading && <p className='text-black text-sm mt-2'>Loading...</p>}

      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
      { !error && !loading &&<ProfileCard userData={profileData}/>}
      { !error&& !loading&&<Stats userData={profileData}/>}
      
    </div>
  )
}
