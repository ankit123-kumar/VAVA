export default function Instructors() {
  const instructors = [
    {
      name: "Dr. Neha Kapoor",
      role: "Data Science Mentor",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "PhD in Computer Science with 8+ years of teaching data science and AI.",
    },
    {
      name: "Arjun Patel",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      bio: "Ex-Google engineer, now teaching MERN stack and cloud technologies.",
    },
    {
      name: "Sanya Mehra",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Creative designer with 6+ years in product design and user research.",
    },
    {
      name: "Rohan Sharma",
      role: "Cybersecurity Expert",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "Certified Ethical Hacker with hands-on industry experience.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="instructors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Meet Our <span className="text-indigo-600">Instructors</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Learn from experienced mentors who bring real-world expertise into
          every lesson.
        </p>

        {/* Instructors Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6"
            >
              {/* Instructor Image */}
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-indigo-100"
              />
              {/* Name + Role */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {instructor.name}
              </h3>
              <p className="text-sm text-indigo-600 font-medium">
                {instructor.role}
              </p>
              {/* Bio */}
              <p className="mt-3 text-gray-600 text-sm">{instructor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
