import { BookOpen, UserCheck, Award } from "lucide-react";

export default function WhyChooseUs({ theme }) {
  const steps = [
    {
      icon: <BookOpen size={36} />,
      title: "Choose Course",
      desc: "Pick the course you love and start your learning journey today."
    },
    {
      icon: <UserCheck size={36} />,
      title: "Learn Anywhere",
      desc: "Access your courses 24/7 from any device, anytime."
    },
    {
      icon: <Award size={36} />,
      title: "Get Certified",
      desc: "Earn verified certificates upon course completion."
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 ${theme === "dark" ? "bg-slate-950" : "bg-gray-50"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 ${theme === "dark" ? "text-slate-100" : "text-gray-800"
            }`}
        >
          Why Choose CoachingHub?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ${theme === "dark"
                ? "bg-slate-900 border border-slate-800"
                : "bg-white"
                }`}
            >
              <div
                className={`mb-6 ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-600">
                {step.title}
              </h3>
              <p
                className={`text-center ${theme === "dark" ? "text-slate-400" : "text-gray-600"
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
