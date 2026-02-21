// src/pages/ContactPage.jsx
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            We’d love to hear from you! Reach out to us for any queries, support, or collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center gap-4">
          <MapPin className="h-8 w-8 text-indigo-600" />
          <h3 className="text-lg font-semibold">Our Location</h3>
          <p className="text-gray-600 text-sm">
            123 VAVA Street, Knowledge City, India
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center gap-4">
          <Phone className="h-8 w-8 text-indigo-600" />
          <h3 className="text-lg font-semibold">Call Us</h3>
          <p className="text-gray-600 text-sm">
            +91 98765 43210
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center gap-4">
          <Mail className="h-8 w-8 text-indigo-600" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600 text-sm">
            support@vava.com
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none h-32 resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-6">Find Us Here</h2>
    <div className="w-full h-64 rounded-xl shadow-inner overflow-hidden">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9022797155784!2d90.39122421543256!3d23.750866294628655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894c55f40ff%3A0x6f6b3c12345abcd!2sYour%20Location!5e0!3m2!1sen!2sin!4v1695112597744!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

    </div>
  );
}
