import { useEffect, useRef, useState } from "react";
import { courses } from "../data/courses";

export default function FeaturedCourses() {
  const sliderRef = useRef(null);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => {
      scrollRight();
    }, 3500);

    return () => clearInterval(interval);
  }, [auto]);

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft <= 0) {
      slider.scrollTo({
        left: slider.scrollWidth,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Courses
          </h2>

          {/* Buttons */}
          <div className="flex gap-3">
  {/* Left */}
  <button
    onClick={scrollLeft}
    onMouseEnter={() => setAuto(false)}
    onMouseLeave={() => setAuto(true)}
    className="group relative w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition"></span>

    <svg
      className="relative z-10 w-5 h-5 text-gray-700 group-hover:text-white transition"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Right */}
  <button
    onClick={scrollRight}
    onMouseEnter={() => setAuto(false)}
    onMouseLeave={() => setAuto(true)}
    className="group relative w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition"></span>

    <svg
      className="relative z-10 w-5 h-5 text-gray-700 group-hover:text-white transition"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-[320px] flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Free
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-indigo-600 font-semibold">
                    {course.level}
                  </span>
                </div>

                <button
                  onClick={() =>
                    window.open(course.playlistUrl, "_blank")
                  }
                  className="w-full mt-5 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow hover:from-indigo-700 hover:to-purple-700 transition"
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}