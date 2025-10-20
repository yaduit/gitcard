import { Code, ExternalLink, GitFork, Star, BookMarked, Loader2, AlertCircle, Package } from 'lucide-react';
import React, { useState, useEffect } from 'react';

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
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      console.log('Something went wrong', err);
      setError('Failed to fetch repositories');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-white rounded-2xl shadow-lg p-12 text-center">
        <div className="flex flex-col items-center justify-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
          <p className="text-gray-600 font-medium">Loading repositories...</p>
          <p className="text-gray-400 text-sm mt-1">Fetching top starred projects</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative overflow-hidden border border-red-200 bg-red-50 rounded-2xl shadow-lg p-12 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <p className="text-red-700 font-semibold text-lg">{error}</p>
          <p className="text-red-600 text-sm mt-1">Please try again later</p>
        </div>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-12 text-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mb-4 shadow-lg">
            <Code className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-700 font-semibold text-lg">No public repositories found</p>
          <p className="text-gray-500 text-sm mt-1">This user hasn't created any public repositories yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl max-w-3xl p-3 h-[500px]">
      {/* Gradient header background */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>

      {/* Header section */}
      <div className="relative z-10 p-6 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-md">
              <BookMarked className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-gray-800 font-bold text-xl">Top Repositories</h3>
              <p className="text-gray-500 text-xs mt-0.5">Most starred projects</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-lg border border-indigo-200">
            <Package className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-700 text-sm font-medium">{repos.length} repos</span>
          </div>
        </div>
      </div>

      {/* Repos list */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="space-y-3 p-4">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo-500 to-purple-500 opacity-5 rounded-tl-full"></div>
    </div>
  );
}

function RepoCard({ repo }) {
  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Ruby: '#701516',
    PHP: '#4F5D95',
    'C++': '#f34b7d',
    C: '#555555',
    'C#': '#178600',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Shell: '#89e051',
    Vue: '#41b883',
    React: '#61dafb',
  };

  const languageColor = languageColors[repo.language] || '#8b949e';

  return (
    <div className="group relative overflow-hidden border border-gray-200 rounded-xl bg-white p-5 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1">
     
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

      
      <div className="relative z-10 mb-4">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors group/link"
        >
          <div className="p-1.5 bg-indigo-50 rounded-lg group-hover/link:bg-indigo-100 transition-colors">
            <Code className="w-4 h-4 text-indigo-600" />
          </div>
          <span className="group-hover/link:underline">{repo.name}</span>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover/link:text-indigo-600 transition-colors" />
        </a>
      </div>

      
      <div className="relative z-10 flex items-center flex-wrap gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 rounded-lg border border-yellow-200">
          <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
          <span className="font-semibold text-yellow-900">{repo.stargazers_count}</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 rounded-lg border border-purple-200">
          <GitFork className="w-4 h-4 text-purple-600" />
          <span className="font-semibold text-purple-900">{repo.forks_count}</span>
        </div>

        {repo.language && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
            <span
              className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: languageColor }}
            ></span>
            <span className="font-medium text-gray-700">{repo.language}</span>
          </div>
        )}
      </div>

     
      <div className="relative z-10">
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {repo.description || (
            <span className="italic text-gray-400">No description provided</span>
          )}
        </p>
      </div>
    </div>
  );
}