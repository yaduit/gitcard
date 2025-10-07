
export default function ContiributionGraph({userData}) {
  return (
    <div className=" border border-gray-300 shadow shadow-gray-500 rounded-md bg-white w-full">
      <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
    <img 
      src={`https://ghchart.rshah.org/${userData?.login}`}
      alt={`${userData?.login}'s GitHub contributions`}
      className="w-full min-w-[600px]"
      onError={(e) => {
        e.target.style.display = 'none';
        
      }}
    />
    </div>
    </div>
    
  )
}
