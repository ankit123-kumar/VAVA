export default function CTA({ theme }) {
  return (
    <section
      className={`relative py-20 text-center transition-all duration-500 ${theme === "dark"
          ? "bg-slate-950"
          : "bg-linear-to-r from-indigo-600 to-purple-600 text-white"
        }`}
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Ready to Start Your{" "}
          <span
            className={
              theme === "dark" ? "text-indigo-400" : "text-yellow-300"
            }
          >
            Learning Journey?
          </span>
        </h2>

        <p
          className={`mt-4 text-lg ${theme === "dark" ? "text-gray-300" : "text-indigo-100"
            }`}
        >
          Join thousands of learners worldwide and upgrade your skills today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary Button */}
          <button
            className={`px-8 py-4 font-semibold rounded-xl shadow transition ${theme === "dark"
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "bg-white text-indigo-700 hover:bg-gray-100"
              }`}
          >
            Get Started Free
          </button>

          {/* Secondary Button */}
          <button
            className={`px-8 py-4 border-2 font-semibold rounded-xl transition ${theme === "dark"
                ? "border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-indigo-700"
              }`}
          >
            Explore Courses
          </button>

        </div>
      </div>
    </section>
  );
}
