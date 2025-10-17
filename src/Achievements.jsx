
   export default function Achievements({ userData }) {
  if (!userData) {
    return (
      <div className="flex flex-col justify-center items-center border border-gray-300 bg-gray-50 rounded-xl shadow-sm p-6 w-full h-[250px] text-center">
        <p className="text-gray-400 font-medium text-lg">🏆 Achievements</p>
        <p className="text-gray-300 text-sm mt-2">Search a user to view trophies</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm w-full h-auto text-center overflow-x-auto">
      <h3 className="text-gray-700 font-semibold text-lg mb-3">🏆 Achievements</h3>
      <img
        src={`https://github-profile-trophy.vercel.app/?username=${userData}&theme=flat&no-frame=true&row=2&column=3`}
        alt="GitHub Achievements"
        className="mx-auto"
      />
    </div>
  );
}
