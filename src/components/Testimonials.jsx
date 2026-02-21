import { Star } from "lucide-react";

export default function Testimonials() {
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
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          What Our <span className="text-indigo-600">Students Say</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Hear from learners who transformed their careers with our courses.
        </p>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              {/* User Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              {/* Name + Role */}
              <h3 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500">{review.role}</p>
              {/* Feedback */}
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                “{review.feedback}”
              </p>
              {/* Rating */}
              <div className="mt-4 flex justify-center">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
