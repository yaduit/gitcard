
import { Activity, TrendingUp, Calendar } from 'lucide-react';

export default function ContributionGraph({ userData }) {
  if (!userData) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md p-6 w-full max-w-[600px] h-[240px] flex flex-col justify-center items-center">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-emerald-100 rounded-full opacity-20 blur-xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-3 shadow-md">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-700 font-semibold text-lg mb-1">Contribution Graph</h3>
          <p className="text-gray-500 text-xs max-w-xs mx-auto">
            Search for a GitHub user to view their contribution activity
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-md w-full max-w-[600px] transition-all duration-300 hover:shadow-lg">
      
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-10"></div>
      
      <div className="relative z-10 p-5 pb-2">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-sm">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-base">Contribution Graph</h3>
              <p className="text-gray-500 text-[11px] mt-0.5">Past year activity</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-md border border-green-200">
            <Calendar className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700 text-[11px] font-medium">365 days</span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 shadow-inner">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <img
              src={`https://ghchart.rshah.org/${userData.login}`}
              alt={`${userData.login}'s GitHub contributions`}
              className="min-w-[500px] w-full"
              loading="lazy"
              onError={(e) => {
                e.target.parentElement.innerHTML = `
                  <div class="flex flex-col items-center justify-center py-6 text-center">
                    <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500 text-xs">Unable to load contribution graph</p>
                  </div>
                `;
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 px-1">
          <div className="flex items-center gap-2 text-gray-500 text-[11px]">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 bg-gray-200 rounded-sm"></div>
              <span>Less</span>
            </div>
            <div className="flex items-center gap-1 ml-2">
              <div className="w-2.5 h-2.5 bg-green-600 rounded-sm"></div>
              <span>More</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-[11px]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>@{userData.login}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-green-500 to-emerald-500 opacity-5 rounded-tl-full"></div>
    </div>
  );
}
