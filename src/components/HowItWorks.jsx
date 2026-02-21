import { UserPlus, BookOpen, PlayCircle, Award } from "lucide-react";

export default function HowItWorks() {
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
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          How It <span className="text-indigo-600">Works</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Get started with our platform in just a few simple steps and accelerate your learning journey.
        </p>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
