import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ theme }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CoachingHub?",
      answer:
        "CoachingHub is an online learning platform that provides access to expert-led courses, mentorship, and resources to help you grow anytime, anywhere.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, you will receive a verified certificate after successfully completing a paid course.",
    },
    {
      question: "Can I access courses on mobile?",
      answer:
        "Absolutely! Our platform is mobile-friendly and works seamlessly on any device.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, UPI, net banking, and popular wallets for your convenience.",
    },
  ];

  return (
    <section
      id="faq"
      className={`relative py-24 transition-colors duration-500 ${theme === "dark"
          ? "bg-slate-950"
          : "bg-linear-to-br from-indigo-50 via-white to-purple-50"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2
            className={`text-4xl md:text-5xl font-extrabold ${theme === "dark" ? "text-white" : "text-gray-800"
              }`}
          >
            Frequently Asked{" "}
            <span
              className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}
            >
              Questions
            </span>
          </h2>

          <p
            className={`mt-3 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Still have questions? Here are some of the most common queries we
            get from learners like you.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-lg border p-6 transition-all duration-300 cursor-pointer ${openIndex === i
                  ? theme === "dark"
                    ? "bg-linear-to-r from-indigo-700 to-purple-700 text-white scale-105"
                    : "bg-linear-to-r from-indigo-600 to-purple-600 text-white scale-105"
                  : theme === "dark"
                    ? "bg-gray-800 text-gray-200 hover:shadow-xl border-gray-700"
                    : "bg-white/70 text-gray-800 hover:shadow-xl"
                }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform ${openIndex === i ? "rotate-180" : ""
                    }`}
                />
              </div>

              {/* Answer */}
              {openIndex === i && (
                <p
                  className={`mt-4 text-sm md:text-base ${theme === "dark" ? "text-gray-300" : ""
                    }`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
