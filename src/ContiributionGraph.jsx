
import { Activity, TrendingUp, Calendar } from 'lucide-react';

export default function ContributionGraph({ userData }) {
  if (!userData) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md p-8 w-full max-w-[700px] h-[280px] flex flex-col justify-center items-center">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 rounded-full opacity-20 blur-2xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4 shadow-lg">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-gray-700 font-bold text-xl mb-2">Contribution Graph</h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Search for a GitHub user to view their contribution activity
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-lg w-full max-w-[700px] transition-all duration-300 hover:shadow-xl">
      
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-10"></div>
      
     
      <div className="relative z-10 p-6 pb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-md">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-gray-800 font-bold text-xl">Contribution Graph</h3>
              <p className="text-gray-500 text-xs mt-0.5">Activity over the past year</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200">
            <Calendar className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">365 days</span>
          </div>
        </div>
      </div>

     
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100 shadow-inner">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <img
              src={`https://ghchart.rshah.org/${userData.login}`}
              alt={`${userData.login}'s GitHub contributions`}
              className="min-w-[600px] w-full"
              loading="lazy"
              onError={(e) => {
                e.target.parentElement.innerHTML = `
                  <div class="flex flex-col items-center justify-center py-8 text-center">
                    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500 text-sm">Unable to load contribution graph</p>
                  </div>
                `;
              }}
            />
          </div>
        </div>
        
        
        <div className="flex items-center justify-between mt-4 px-2">
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
              <span>Less</span>
            </div>
            <div className="flex items-center gap-1 ml-2">
              <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
              <span>More</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">@{userData.login}</span>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-500 to-emerald-500 opacity-5 rounded-tl-full"></div>
    </div>
  );
}