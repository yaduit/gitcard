import { BookOpen, FileCode, Star, GitFork, Calendar, BarChart3, TrendingUp } from "lucide-react";

export default function Stats({ userData, repoStats }) {
  if (!userData) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md p-8 w-full h-[280px] flex flex-col justify-center items-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-gray-700 font-bold text-xl mb-2">GitHub Statistics</h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Search for a GitHub user to view their profile statistics
          </p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      icon: Calendar,
      label: "Joined Date",
      value: userData?.created_at
        ? new Date(userData.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : "N/A",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200"
    },
    {
      icon: BookOpen,
      label: "Public Repos",
      value: userData?.public_repos || "0",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: FileCode,
      label: "Gists",
      value: userData?.public_gists || "0",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: Star,
      label: "Total Stars",
      value: repoStats?.totalStars || "0",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200"
    },
    {
      icon: GitFork,
      label: "Total Forks",
      value: repoStats?.totalForks || "0",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: TrendingUp,
      label: "Last Updated",
      value: userData?.updated_at
        ? new Date(userData.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : "N/A",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200"
    }
  ];

  return (
    <div className="relative overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-lg w-full transition-all duration-300 hover:shadow-xl max-w-2xl p-5">
     
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10"></div>
      
      
      <div className="relative z-10 p-6 pb-4">
        <div className="flex items-center gap-3 mb-1">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-xl">GitHub Statistics</h3>
            <p className="text-gray-500 text-xs mt-0.5">Overview of profile metrics</p>
          </div>
        </div>
      </div>

     
      <div className="px-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${stat.bgColor} border ${stat.borderColor} rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer`}
            >
            
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 flex items-center gap-3">
                <div className={`flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-0.5">
                    {stat.label}
                  </p>
                  <p className="text-xl font-bold text-gray-800 truncate">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500 to-purple-500 opacity-5 rounded-tl-full"></div>
    </div>
  );
}