export default function Leaderboard() {
  const data = [
    { name: "Rahul", score: 95 },
    { name: "Amit", score: 92 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>

      <div className="bg-white rounded-xl shadow">
        {data.map((d, i) => (
          <div key={i} className="flex justify-between p-3 border-b">
            <span>{i + 1}. {d.name}</span>
            <span>{d.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}