export default function Profile() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Profile</h2>

      <div className="bg-white shadow rounded-xl p-6 max-w-md">
        <input className="w-full border p-2 mb-3 rounded text-gray-500" placeholder="Name" />
        <input className="w-full border p-2 mb-3 rounded text-gray-500" placeholder="Email" />
        <input className="w-full border p-2 mb-3 rounded text-gray-500" placeholder="Phone" />

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </div>
    </div>
  );
}