import {
  Code,
  ExternalLink,
  GitFork,
  Star,
  BookMarked,
  Loader2,
  AlertCircle,
  Package,
} from "lucide-react";
import React, { useState, useEffect } from "react";

export default function TopRepos({ userData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (userData?.login) {
      fetchTopRepo();
    }
  }, [userData]);

  const fetchTopRepo = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${userData.login}/repos?sort=stars&per_page=10&direction=desc`
      );
      if (!response.ok) throw new Error("Failed to fetch repositories");
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError("Failed to fetch repositories");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="border border-gray-200 bg-white rounded-xl shadow p-8 text-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-2 mx-auto" />
        <p className="text-gray-700 text-sm font-medium">
          Loading repositories...
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Fetching top starred projects
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border border-red-200 bg-red-50 rounded-xl shadow p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
          <AlertCircle className="w-6 h-6 text-red-600" />
        </div>
        <p className="text-red-700 font-semibold text-base">{error}</p>
        <p className="text-red-600 text-xs mt-1">Please try again later</p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mb-3 shadow">
          <Code className="w-6 h-6 text-white" />
        </div>
        <p className="text-gray-700 font-semibold text-base">
          No public repositories found
        </p>
        <p className="text-gray-500 text-xs mt-1">
          This user hasn’t created any public repositories yet
        </p>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 max-w-2xl p-3">
      {/* Header */}
      <div className="flex items-center justify-between px-3 pb-2 border-b border-gray-100 mb-3">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md shadow">
            <BookMarked className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-base">Top Repositories</h3>
            <p className="text-gray-500 text-xs mt-0.5">Most starred projects</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 bg-indigo-50 rounded-md border border-indigo-200">
          <Package className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-indigo-700 text-xs font-medium">
            {repos.length} repos
          </span>
        </div>
      </div>

      {/* Repo list */}
      <div className="max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100  p-4">
        <div className="space-y-2.5">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RepoCard({ repo }) {
  const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Ruby: "#701516",
    PHP: "#4F5D95",
    "C++": "#f34b7d",
    C: "#555555",
    "C#": "#178600",
    Go: "#00ADD8",
    Rust: "#dea584",
    Swift: "#ffac45",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
    Shell: "#89e051",
    Vue: "#41b883",
    React: "#61dafb",
  };

  const languageColor = languageColors[repo.language] || "#8b949e";

  return (
    <div className="group border border-gray-200 rounded-lg bg-white p-5 transition-all duration-200 hover:shadow-md hover:border-indigo-300 ">
      {/* Repo name */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors mb-4"
      >
        <Code className="w-3.5 h-3.5 text-indigo-600" />
        <span className="truncate max-w-[180px] group-hover:underline">
          {repo.name}
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-600" />
      </a>

      {/* Stats */}
      <div className="flex items-center justify-center flex-wrap gap-12 text-xs mb-2">
        <div className="flex items-center gap-1 px-2 py-0.5 bg-yellow-50 rounded border border-yellow-200">
          <Star className="w-3.5 h-3.5 text-yellow-600 fill-yellow-600" />
          <span className="font-semibold text-yellow-900">
            {repo.stargazers_count}
          </span>
        </div>

        <div className="flex items-center gap-1 px-2 py-0.5 bg-purple-50 rounded border border-purple-200">
          <GitFork className="w-3.5 h-3.5 text-purple-600" />
          <span className="font-semibold text-purple-900">{repo.forks_count}</span>
        </div>

        {repo.language && (
          <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-50 rounded border border-gray-200">
            <span
              className="w-2.5 h-2.5 rounded-full border border-white shadow-sm"
              style={{ backgroundColor: languageColor }}
            ></span>
            <span className="text-gray-700 font-medium">{repo.language}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
        {repo.description || (
          <span className="italic text-gray-400">No description provided</span>
        )}
      </p>
    </div>
  );
}
