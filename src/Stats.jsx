import { BookOpen, FileCode, Star, GitFork, Calendar, BarChart3, TrendingUp } from "lucide-react";

export default function Stats({ userData, repoStats }) {
  if (!userData) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow w-full h-[180px] flex flex-col justify-center items-center">
        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-14 h-14 bg-purple-100 rounded-full opacity-20 blur-xl"></div>

        <div className="relative z-10 text-center pb-2">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-2 shadow">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-gray-700 font-semibold text-sm mb-2">GitHub Statistics</h3>
          <p className="text-gray-500 text-[11px] max-w-[180px]">
            Search for a GitHub user to view stats
          </p>
        </div>
      </div>
    );
  }

  const stats = [
    { icon: Calendar, label: "Joined", value: userData?.created_at ? new Date(userData.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "N/A", color: "from-red-500 to-pink-500", bg: "bg-red-50", iconC: "text-red-600", border: "border-red-200" },
    { icon: BookOpen, label: "Repos", value: userData?.public_repos || "0", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50", iconC: "text-blue-600", border: "border-blue-200" },
    { icon: FileCode, label: "Gists", value: userData?.public_gists || "0", color: "from-green-500 to-emerald-500", bg: "bg-green-50", iconC: "text-green-600", border: "border-green-200" },
    { icon: Star, label: "Stars", value: repoStats?.totalStars || "0", color: "from-yellow-500 to-orange-500", bg: "bg-yellow-50", iconC: "text-yellow-600", border: "border-yellow-200" },
    { icon: GitFork, label: "Forks", value: repoStats?.totalForks || "0", color: "from-purple-500 to-indigo-500", bg: "bg-purple-50", iconC: "text-purple-600", border: "border-purple-200" },
    { icon: TrendingUp, label: "Updated", value: userData?.updated_at ? new Date(userData.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "N/A", color: "from-teal-500 to-cyan-500", bg: "bg-teal-50", iconC: "text-teal-600", border: "border-teal-200" },
  ];

  return (
    <div className="relative overflow-hidden border border-gray-200 rounded-xl bg-white shadow w-full max-w-md transition-all duration-300 hover:shadow-md p-5">
      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10"></div>

      <div className="relative z-10 px-2 mb-2 pb-2 flex items-center gap-2">
        <div className="inline-flex items-center justify-center w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md shadow-sm ">
          <BarChart3 className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <h3 className="text-gray-800 font-semibold text-sm "> Stats</h3>
          <p className="text-gray-500 text-[11px] ">Profile Overview</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden ${s.bg} border ${s.border} rounded-lg p-2 transition-all duration-300 hover:shadow-sm hover:scale-[1.02]`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <div className="relative z-10 flex items-center gap-1.5">
              <div className={`flex-shrink-0 w-7 h-7 bg-white rounded-md flex items-center justify-center`}>
                <s.icon className={`w-4 h-4 ${s.iconC}`} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-gray-600 font-medium">{s.label}</span>
                <span className="text-sm font-semibold text-gray-800">{s.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
