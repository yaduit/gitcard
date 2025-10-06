
export default function ContiributionGraph({userData}) {
  return (
    <div className=" border border-gray-300 shadow shadow-gray-500 rounded-md w-fit">
    <img 
      src={`https://ghchart.rshah.org//${userData?.login}`}
      alt={`${userData?.login}'s GitHub contributions`}
      className="w-full p-5 font-semibold"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
    </div>
    
  )
}
