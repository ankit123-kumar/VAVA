export default function CTA({ theme }) {
  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Ready to Start Your <span className="text-yellow-300">Learning Journey?</span>
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          Join thousands of learners worldwide and upgrade your skills today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-gray-100">
            Get Started Free
          </button>
          <button className="px-8 py-4 border-2 border-white font-semibold rounded-xl hover:bg-white hover:text-indigo-700 transition">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}
