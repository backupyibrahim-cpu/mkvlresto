import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Experience from "@/components/Experience";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Heritage />
      <Experience />
      <ReservationCTA />
      <Footer />
    </div>
  );
};

export default Index;
