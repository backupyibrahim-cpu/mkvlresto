import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuTabs from "@/components/MenuTabs";

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-widest uppercase">Our Offerings</span>
            <h1 className="text-foreground font-serif text-5xl md:text-6xl mt-4 mb-6">
              The Menu
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A carefully curated selection of dishes that showcase the finest 
              seasonal ingredients and culinary craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MenuTabs />
        </div>
      </section>

      {/* Dietary Note */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground text-sm leading-relaxed"
          >
            Please inform your server of any allergies or dietary restrictions. 
            Our kitchen can accommodate most dietary needs with advance notice. 
            Menu items and prices are subject to change based on seasonal availability.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
