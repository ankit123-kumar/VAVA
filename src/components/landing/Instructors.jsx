import { motion } from "framer-motion";
export default function Instructors({ theme }) {
  const instructors = [
    {
      name: "Mr. Vimal Gupta",
      role: "Mathematics Expert",
      image: "/profile/vimalSirProfile3.jpeg",
      bio: "PhD in Mathematics with 15+ years of teaching Mathematics.",
      exp: "15+ Years",
    },
    {
      name: "Sabnam Ma'am",
      role: "Chemistry Expert",
      image: "/profile/sabnam.jpeg",
      bio: "Msc in Chemistry with 10+ years of teaching experience.",
      exp: "10+ Years",
    },
    {
      name: "Divyansh Sir",
      role: "Mathematics Expert",
      image: "/profile/abc.jpeg",
      bio: "Btech with 10+ years in teaching.",
      exp: "10+ Years",
    },
    {
      name: "K P Sir",
      role: "Physics Expert",
      image: "/profile/kpSir.jpeg",
      bio: "Msc B.ed with hands-on 15 year of experience.",
      exp: "15+ Years",
    },
    {
      name: "Mr. Vishal Sharma",
      role: "Biology Expert",
      image: "/profile/vishalSharma.jpeg",
      bio: "B.ed with hands-on 15 year of experience.",
      exp: "15+ Years",
    },
  ];

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        theme === "dark"
          ? "bg-slate-950"
          : "bg-gradient-to-b from-white to-indigo-50"
      }`}
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-extrabold ${
            theme === "dark" ? "text-slate-100" : "text-gray-800"
          }`}
        >
          Meet Our{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Expert Instructors
          </span>
        </h2>

        <p
          className={`mt-4 max-w-2xl mx-auto ${
            theme === "dark" ? "text-slate-300" : "text-gray-600"
          }`}
        >
          Learn from industry experts with years of real-world experience.
        </p>

     <div className="mt-16 overflow-hidden w-full py-6"> {/* 👈 padding added */}
  <motion.div
    className="flex gap-8 w-max"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      ease: "linear",
      duration: 40, // 👈 slower (premium feel)
      repeat: Infinity,
    }}
  >
    {[...instructors, ...instructors].map((ins, i) => (
      <div
        key={i}
        className="min-w-[260px] group relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition duration-300"
      >
        {/* Card */}
        <div
          className={`rounded-2xl p-6 backdrop-blur-xl transition-transform duration-300 group-hover:scale-105 ${
            theme === "dark"
              ? "bg-slate-900/80 border border-white/20"
              : "bg-white"
          }`}
        >
          {/* Image */}
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur opacity-30"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
              <img
                src={ins.image}
                alt={ins.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Info */}
          <h3
            className={`mt-4 text-md font-semibold ${
              theme === "dark" ? "text-slate-100" : "text-gray-800"
            }`}
          >
            {ins.name}
          </h3>

          <p className="text-indigo-500 text-sm">{ins.role}</p>

          <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">
            {ins.exp}
          </span>

          <p
            className={`mt-2 text-xs ${
              theme === "dark" ? "text-slate-300" : "text-gray-600"
            }`}
          >
            {ins.bio}
          </p>
        </div>
      </div>
    ))}
  </motion.div>
</div>
      </div>
    </section>
  );
}
