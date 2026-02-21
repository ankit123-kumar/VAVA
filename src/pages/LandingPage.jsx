import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Instructors from "../components/Instructors";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import LoginSignupCard from "./LoginSignupCard";

export default function LandingPage() {
   const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      {/* <Navbar onLoginClick={() => setShowLogin(true)}/> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
          <HowItWorks />
          <Testimonials />
          <Instructors />
          <Pricing />
          <FAQ />
          <CTA />
      <Footer />

            {/* Show Login/Signup */}
      {/* {showLogin && <LoginSignupCard onClose={() => setShowLogin(false)} />} */}

  
    </div>
  );
}
