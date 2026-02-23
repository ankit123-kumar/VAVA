export default function Results() {
  const results = [
    { test: "SSC", score: 80, rank: 5 },
    { test: "Reasoning", score: 70, rank: 12 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Results</h2>

      <table className="w-full bg-white shadow rounded-xl">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Test</th>
            <th className="p-3">Score</th>
            <th className="p-3">Rank</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{r.test}</td>
              <td className="p-3">{r.score}</td>
              <td className="p-3">#{r.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}