// src/pages/AboutPage.jsx
import { GraduationCap, Users, Target, BookOpen } from "lucide-react";

export default function AboutPage() {
  const mentors = [
    {
      name: "Ankit Sharma",
      role: "Founder & Lead Instructor",
      image: "/mentor1.jpg",
    },
    {
      name: "Priya Verma",
      role: "UI/UX Mentor",
      image: "/mentor2.jpg",
    },
    {
      name: "Rahul Singh",
      role: "Backend Specialist",
      image: "/mentor3.jpg",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Mentors",
      icon: <GraduationCap className="h-10 w-10 text-indigo-600" />,
      desc: "Learn directly from industry leaders and experienced educators.",
    },
    {
      title: "Community Learning",
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      desc: "Join a vibrant community of learners, share knowledge, and collaborate.",
    },
    {
      title: "Practical Courses",
      icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
      desc: "Hands-on learning with real-world projects and case studies.",
    },
    {
      title: "Career Growth",
      icon: <Target className="h-10 w-10 text-indigo-600" />,
      desc: "Gain skills that employers value and accelerate your career journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About VAVA</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
            Empowering students and professionals with world-class learning experiences in technology, design, and beyond.
          </p>
          <a
            href="/courses"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:shadow-lg transition"
          >
            Explore Courses
          </a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-500 opacity-40 -z-10 rounded-b-[50%]"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8 text-indigo-600" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-gray-600">
            At <span className="font-semibold">VAVA</span>, our mission is to make quality education accessible and affordable for everyone. We foster a community where knowledge empowers individuals to achieve their career goals.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <p className="text-gray-600">
            Our vision is to become the most trusted online learning hub, delivering personalized, industry-relevant courses designed by experts to shape the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-indigo-600">VAVA?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition p-6 flex flex-col items-center text-center gap-3"
              >
                {item.icon}
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Mentors */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our <span className="text-indigo-600">Mentors</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 text-center"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-600">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{mentor.name}</h3>
              <p className="text-gray-600">{mentor.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Join thousands of learners on VAVA and take your career to the next level with expert-led courses.
        </p>
        <a
          href="/courses"
          className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:shadow-lg transition"
        >
          Browse Courses
        </a>
      </section>
    </div>
  );
}
