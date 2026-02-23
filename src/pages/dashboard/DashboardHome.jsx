export default function DashboardHome({ upcomingTests, recentResults }) {
  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { label: "Tests Attempted", value: 24 },
          { label: "Average Score", value: "72%" },
          { label: "Best Rank", value: 3 },
          { label: "Accuracy", value: "81%" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500">{stat.label}</p>
            <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Upcoming */}
      <h3 className="text-xl font-semibold mb-3">Upcoming Tests</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {upcomingTests.map((test) => (
          <div key={test.id} className="bg-white p-4 rounded-xl shadow flex justify-between">
            <div>
              <h4 className="font-semibold">{test.name}</h4>
              <p className="text-gray-500 text-sm">{test.date}</p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
              Start
            </button>
          </div>
        ))}
      </div>

      {/* Results */}
      <h3 className="text-xl font-semibold mb-3">Recent Results</h3>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Test</th>
              <th className="p-3">Score</th>
              <th className="p-3">Rank</th>
            </tr>
          </thead>
          <tbody>
            {recentResults.map((res) => (
              <tr key={res.id} className="border-t">
                <td className="p-3">{res.test}</td>
                <td className="p-3">{res.score}</td>
                <td className="p-3">#{res.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}