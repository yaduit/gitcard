import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import SearchInput from './SearchInput'

export default function App() {

  const[searchInput ,setSearchInput] = useState('');
  const[profileData , setProfileData] = useState(null);
  const[error , setError] = useState(null);


  const handleSearch = (e) =>{
    const trimmedValue = e.target.value.trim();
    setSearchInput(trimmedValue);
  }

  const fetchData = async () =>{
    if(searchInput === '')return;
    try{
      const res =await fetch(`https://api.github.com/users/${searchInput}`);
      if(!res.ok){
        setError("user not found");
        setProfileData(null);
        
      }
      const data = await res.json();
      setProfileData(data);
      setError(null);
    }
    catch(error){
      console.log(error,"something went wrong");
    }
  }

  return (
    <div className=' flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4'>
      <SearchInput
      value={searchInput}
      onInputChange={handleSearch}
      onSearch={fetchData}
      />
      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

      {profileData && !error && <ProfileCard userData = {profileData}/>}
    </div>
  )
}
