
export default function ContiributionGraph({userData}) {
  return (
    <div>
    <div className="mt-6">
    <h3 className="text-lg font-semibold mb-3">Contribution Graph</h3>
    <img 
      src={`https://ghchart.rshah.org/${userData?.login}`}
      alt={`${userData?.login}'s GitHub contributions`}
      className="w-full rounded-lg shadow-md"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
    </div>
    </div>
    
  )
}
