import { UserPlus, BookOpen, PlayCircle, Award } from "lucide-react";

export default function HowItWorks({ theme }) {
  const steps = [
    {
      icon: <UserPlus className="w-10 h-10 text-indigo-600" />,
      title: "Sign Up",
      desc: "Create your free account in just a few clicks and join the community.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
      title: "Browse Courses",
      desc: "Explore 500+ expert-led courses across multiple categories.",
    },
    {
      icon: <PlayCircle className="w-10 h-10 text-indigo-600" />,
      title: "Start Learning",
      desc: "Access interactive lessons, quizzes, and real-time mentorship.",
    },
    {
      icon: <Award className="w-10 h-10 text-indigo-600" />,
      title: "Get Certified",
      desc: "Earn a shareable certificate to boost your career and skills.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className={`py-20 ${theme === "dark" ? "bg-slate-950" : "bg-gray-50"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2
          className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? "text-slate-100" : "text-gray-800"
            }`}
        >
          How It{" "}
          <span className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}>
            Works
          </span>
        </h2>
        <p
          className={`mt-3 max-w-2xl mx-auto ${theme === "dark" ? "text-slate-400" : "text-gray-600"
            }`}
        >
          Get started with our platform in just a few simple steps and accelerate your learning journey.
        </p>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow ${theme === "dark"
                  ? "bg-slate-900 border border-slate-800 hover:shadow-indigo-500/10"
                  : "bg-white"
                }`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${theme === "dark" ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-100 text-indigo-600"
                  }`}
              >
                {step.icon}
              </div>
              <h3
                className={`text-lg font-semibold ${theme === "dark" ? "text-slate-100" : "text-gray-800"
                  }`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-gray-600"
                  }`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
