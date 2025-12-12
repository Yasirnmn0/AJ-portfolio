// app/page.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "@/components/Services";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Define the main background color as a custom class or theme color in tailwind.config.js
// For now, we'll use bg-gray-900 which is close to the dark theme.
const darkBg = "bg-[#1A1A1A] text-gray-300";
const accentColor = "bg-[#1CD7A8] hover:bg-opacity-80"; // The green/teal color

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Header/Hero Section - Full Screen Image Background */}
        <section id="home">
          <Hero />
        </section>

        {/* About & Services Section */}
        <section id="about">
          <div>
            <About />
          </div>
        </section>
        <section id="services">
          <div>
            <Services />
          </div>
        </section>

        {/* Resume/Summary Section */}
        <section id="resume">
          <div>
            <Resume accentColor={accentColor} />
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <div>
            <Portfolio />
          </div>
        </section>

        <section id="testimonials">
          <div>
            <Testimonials />
          </div>
        </section>
        <section id="contact ">
          <div>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
