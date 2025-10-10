
export default function ContiributionGraph({userData}) {
  return (
    <div className=" border border-gray-300 shadow-sm hover:shadow-md transition duration-200 shadow-gray-500 rounded-md bg-white w-[700px] h-auto">
      <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
    <img 
      src={`https://ghchart.rshah.org/${userData?.login}`}
      alt={`${userData?.login}'s GitHub contributions`}
      className="min-w-[600px]"
      onError={(e) => {
        e.target.style.display = 'none';
        
      }}
    />
    </div>
    </div>
    
  )
}
