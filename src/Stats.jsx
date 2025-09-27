import { BookOpen, FileCode, Star, GitFork, Calendar } from "lucide-react";



export default function Stats({userData,repoStats}) {


  return (
    <div className='grid grid-cols-2 gap-6 border border-gray-300 shadow-md shadow-gray-500 rounded-lg p-6 mx-auto w-fit max-w-md'>
      <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
        <BookOpen className='w-6 h-6 text-blue-600'/>
        <div>
          <p className='text-sm text-gray-600'>Public Repos</p>
          <span className='text-xl font-semibold text-gray-800'>{userData?.public_repos || "No repos to show"}</span>
        </div>
      </div>
      
      <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
        <FileCode className='w-6 h-6 text-green-600'/>
        <div>
          <p className='text-sm text-gray-600'>Gists</p>
          <span className='text-xl font-semibold text-gray-800'>{userData?.public_gists ||"0"}</span>
        </div>
      </div>
      
      <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
        <Star className='w-6 h-6 text-yellow-500'/>
        <div>
          <p className='text-sm text-gray-600'>Stars</p>
          <span className='text-xl font-semibold text-gray-800'>{repoStats?.totalStars||"0"}</span>
        </div>
      </div>
      
      <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
        <GitFork className='w-6 h-6 text-purple-600'/>
        <div>
          <p className='text-sm text-gray-600'>Forks</p>
          <span className='text-xl font-semibold text-gray-800'>{repoStats?.totalForks||"0"}</span>
        </div>
      </div>
      
      <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg '>
        <Calendar className='w-6 h-6 text-red-500'/>
        <div>
          <p className='text-sm text-gray-600'>Joined Date</p>
          <span className='text-xl font-semibold text-gray-800'>{userData?.created_at 
        ? new Date(userData.created_at).toLocaleDateString() 
        : "NA"}
      </span>
        </div>
      </div>

      <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
        <Calendar className='w-6 h-6 text-red-500'/>
        <div>
          <p className='text-sm text-gray-600'>Last updated</p>
          <span className='text-xl font-semibold text-gray-800'>{userData?.updated_at 
        ? new Date(userData.updated_at).toLocaleDateString() 
        : "NA"}
      </span>
        </div>
      </div>
    </div>
  )
} 