export default function Leaderboard() {
  const data = [
    { name: "Rahul", score: 95 },
    { name: "Amit", score: 92 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Leaderboard</h2>

      <div className="bg-white rounded-xl shadow">
        {data.map((d, i) => (
          <div key={i} className="flex justify-between p-3 border-b">
            <span className="text-gray-900">{i + 1}. {d.name}</span>
            <span className="text-gray-700">{d.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}