import { BookOpen, FileCode, Star, GitFork, Calendar } from "lucide-react";

export default function Stats({ userData, repoStats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white w-full rounded-md p-6 overflow-x-hidden">   
      {/* Joined Date */}
      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg">
        <Calendar className="w-6 h-6 text-red-500" />
        <div>
          <p className="text-sm text-gray-600">Joined Date</p>
          <span className="text-lg font-semibold text-gray-800">
            {userData?.created_at
              ? new Date(userData.created_at).toLocaleDateString()
              : "NA"}
          </span>
        </div>
      </div>

      {/* Public Repos */}
      <div className="flex items-center space-x-3  bg-gray-50 rounded-lg">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-sm text-gray-600">Public Repos</p>
          <span className="text-lg font-semibold text-gray-800">
            {userData?.public_repos || "0"}
          </span>
        </div>
      </div>

      {/* Gists */}
      <div className="flex items-center space-x-3  bg-gray-50 rounded-lg">
        <FileCode className="w-6 h-6 text-green-600" />
        <div>
          <p className="text-sm text-gray-600">Gists</p>
          <span className="text-lg font-semibold text-gray-800">
            {userData?.public_gists || "0"}
          </span>
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center space-x-3  bg-gray-50 rounded-lg">
        <Star className="w-6 h-6 text-yellow-500" />
        <div>
          <p className="text-sm text-gray-600">Stars</p>
          <span className="text-lg font-semibold text-gray-800">
            {repoStats?.totalStars || "0"}
          </span>
        </div>
      </div>

      {/* Forks */}
      <div className="flex items-center space-x-3  bg-gray-50 rounded-lg">
        <GitFork className="w-6 h-6 text-purple-600" />
        <div>
          <p className="text-sm text-gray-600">Forks</p>
          <span className="text-lg font-semibold text-gray-800">
            {repoStats?.totalForks || "0"}
          </span>
        </div>
      </div>

      {/* Last Updated */}
      <div className="flex items-center space-x-3  bg-gray-50 rounded-lg">
        <Calendar className="w-6 h-6 text-red-500" />
        <div>
          <p className="text-sm text-gray-600">Last Updated</p>
          <span className="text-lg font-semibold text-gray-800">
            {userData?.updated_at
              ? new Date(userData.updated_at).toLocaleDateString()
              : "NA"}
          </span>
        </div>
      </div>
    </div>
  );
}
 