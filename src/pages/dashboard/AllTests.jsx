import { useNavigate } from "react-router-dom";

const tests = [
  { id: 1, name: "SSC Mock 1", questions: 100, duration: 60 },
  { id: 2, name: "Banking Prelims", questions: 80, duration: 45 },
];

export default function AllTests() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Tests</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tests.map((t) => (
          <div key={t.id} className="bg-white shadow rounded-xl p-4">
            <h3 className="font-bold text-gray-900">{t.name}</h3>
            <p className="text-gray-600">{t.questions} Questions</p>
            <p className="text-gray-600">{t.duration} Minutes</p>

            <button
              onClick={() => navigate(`/test/${t.id}`)}
              className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}