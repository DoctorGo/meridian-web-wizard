import { Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

const Index = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {location.pathname === "/about" ? (
        <About />
      ) : (
        <main>
          <Hero />
          <Services />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Index;
