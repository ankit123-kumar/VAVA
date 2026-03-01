import { Star } from "lucide-react";

export default function Testimonials({ theme }) {
  const reviews = [
    {
      name: "Aarav Sharma",
      role: "Software Engineer",
      feedback:
        "This platform completely changed the way I learn. The courses are structured, easy to follow, and the mentors are super helpful.",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Verma",
      role: "Data Analyst",
      feedback:
        "I loved the interactive lessons and quizzes. The hands-on approach made it easy to apply what I learned in real projects.",
      rating: 4,
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohit Mehta",
      role: "Student",
      feedback:
        "Affordable, practical, and effective. The certificate helped me land my first internship in data science!",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 ${theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? "text-slate-100" : "text-gray-800"
            }`}
        >
          What Our{" "}
          <span className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}>
            Students Say
          </span>
        </h2>
        <p
          className={`mt-3 max-w-2xl mx-auto ${theme === "dark" ? "text-slate-400" : "text-gray-600"
            }`}
        >
          Hear from learners who transformed their careers with our courses.
        </p>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow ${theme === "dark"
                  ? "bg-slate-900 border border-slate-800 hover:shadow-indigo-500/10"
                  : "bg-gray-50"
                }`}
            >
              {/* User Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              {/* Name + Role */}
              <h3
                className={`text-lg font-semibold ${theme === "dark" ? "text-slate-100" : "text-gray-800"
                  }`}
              >
                {review.name}
              </h3>

              <p className={theme === "dark" ? "text-slate-400 text-sm" : "text-gray-500 text-sm"}>
                {review.role}
              </p>
              {/* Feedback */}
              <p
                className={`mt-4 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-gray-600"
                  }`}
              >
                “{review.feedback}”
              </p>
              {/* Rating */}
              <div className="mt-4 flex justify-center">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star className={`w-5 h-5 ${theme === "dark" ? "text-yellow-300 fill-yellow-300" : "text-yellow-400 fill-yellow-400"}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
