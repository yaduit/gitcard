
export default function ContiributionGraph({userData}) {
  return (
    <div className=" border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-md bg-white w-[700px] h-[200px] p-6">
      <div className="bg-gray-50 rounded-md overflow-x-auto mt-4">
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
