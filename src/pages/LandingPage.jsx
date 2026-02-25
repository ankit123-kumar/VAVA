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

export default function LandingPage({ theme }) {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      {/* <Navbar onLoginClick={() => setShowLogin(true)}/> */}
      <HeroSection theme={theme} />
      <FeaturedCourses theme={theme} />
      <WhyChooseUs theme={theme} />
      <HowItWorks theme={theme} />
      <Testimonials theme={theme} />
      <Instructors theme={theme} />
      <Pricing theme={theme} />
      <FAQ theme={theme} />
      <CTA theme={theme} />
      <Footer theme={theme} />

      {/* Show Login/Signup */}
      {/* {showLogin && <LoginSignupCard onClose={() => setShowLogin(false)} />} */}


    </div>
  );
}
