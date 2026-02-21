import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹0",
      period: "/month",
      features: [
        "Access to 5 free courses",
        "Community support",
        "Limited resources",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹999",
      period: "/month",
      features: [
        "Unlimited courses",
        "Priority email support",
        "Certificates included",
        "Downloadable resources",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "₹4999",
      period: "/month",
      features: [
        "All Pro features",
        "Dedicated mentor",
        "1-on-1 live sessions",
        "Team dashboard",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Flexible <span className="text-indigo-600">Pricing</span> for Everyone
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Start for free, upgrade anytime. No hidden charges.
        </p>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl backdrop-blur-xl border shadow-2xl p-10 transition transform hover:-translate-y-3 ${
                plan.highlight
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white scale-105"
                  : "bg-white/70 border-gray-200"
              }`}
            >
              {/* Ribbon */}
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  Best Value
                </span>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold">{plan.name}</h3>

              {/* Price */}
              <p className="mt-6 text-5xl font-extrabold tracking-tight">
                {plan.price}
                <span className="text-lg font-medium">{plan.period}</span>
              </p>

              {/* Divider */}
              <div
                className={`my-6 h-[2px] ${
                  plan.highlight ? "bg-white/40" : "bg-gray-200"
                }`}
              ></div>

              {/* Features */}
              <ul className="space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-base">
                    <CheckCircle2
                      size={22}
                      className={`${
                        plan.highlight ? "text-yellow-300" : "text-indigo-600"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-10 w-full py-3 rounded-xl font-semibold transition shadow-lg ${
                  plan.highlight
                    ? "bg-white text-indigo-700 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.highlight ? "Get Started" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
