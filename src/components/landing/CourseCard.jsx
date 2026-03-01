export function CourseCard({ course }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-4xl mx-auto">
      {/* Image Section */}
      <div className="md:w-1/2 w-full h-64 md:h-auto overflow-hidden">
        <img
          src={course.image || "https://via.placeholder.com/400x250"}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-4">{course.description}</p>

          {/* Instructor and badges */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">{course.instructor}</span>
            <div className="flex space-x-2">
              {course.level && <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">{course.level}</span>}
              {course.duration && <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{course.duration}</span>}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-auto">
          <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
            Start
          </button>
          <button className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
