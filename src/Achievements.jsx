import { Trophy, Star } from 'lucide-react';

export default function Achievements({ userData }) {
  if (!userData) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md p-6 w-full h-[240px] flex flex-col justify-center items-center">
       
        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-3 shadow-md">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-700 font-bold text-lg mb-1">Achievements</h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Search for a GitHub user to view their achievements
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-lg w-full max-w-xl transition-all duration-300 hover:shadow-xl">
      
    
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-10"></div>
      
    
      <div className="relative z-10 p-5 pb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-sm">
              <Trophy className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-gray-800 font-bold text-lg">Achievements</h3>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>
        <p className="text-gray-500 text-xs ml-10">Trophy collection for {userData}</p>
      </div>

     
      <div className="px-5 pb-5">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100">
          <div className="overflow-hidden">
            <img
              src={`https://github-profile-trophy.vercel.app/?username=${userData}&theme=flat&no-frame=true&row=2&column=3`}
              alt="GitHub Achievements"
              className="mx-auto w-[90%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-yellow-400 to-orange-500 opacity-5 rounded-tl-full"></div>
    </div>
  );
}
