import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Wine, Music, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import privateDiningImage from "@/assets/private-dining.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Users,
    title: "Intimate Gatherings",
    description: "Perfect for groups of 8-20 guests in our exclusive private rooms.",
  },
  {
    icon: Wine,
    title: "Curated Wine Pairings",
    description: "Our sommelier will craft the perfect wine selection for your event.",
  },
  {
    icon: Music,
    title: "Custom Ambiance",
    description: "Personalized music, lighting, and décor to match your occasion.",
  },
  {
    icon: Utensils,
    title: "Bespoke Menus",
    description: "Work with our chef to create a unique tasting experience.",
  },
];

const PrivateEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${privateDiningImage})` }}
        >
          <div className="absolute inset-0 bg-background/75" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-widest uppercase">Exclusive Experiences</span>
            <h1 className="text-foreground font-serif text-5xl md:text-6xl mt-4 mb-6">
              Private Events
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create unforgettable moments in our intimate private dining spaces, 
              perfect for celebrations, corporate events, and special occasions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground font-serif text-4xl md:text-5xl mb-4">
              Tailored to Perfection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every detail is carefully considered to ensure your event exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 border border-border/30 hover:border-gold/50 transition-colors duration-300"
              >
                <feature.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-foreground font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-foreground font-serif text-4xl mb-6">
                Our Private Spaces
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="pb-6 border-b border-border/30">
                  <h3 className="text-foreground font-serif text-xl mb-2">The Library</h3>
                  <p>An intimate room for 8-12 guests, featuring floor-to-ceiling bookshelves and a private bar.</p>
                </div>
                <div className="pb-6 border-b border-border/30">
                  <h3 className="text-foreground font-serif text-xl mb-2">The Wine Cellar</h3>
                  <p>Surrounded by our prized collection, this space accommodates up to 16 guests.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-serif text-xl mb-2">The Grand Salon</h3>
                  <p>Our largest private space, perfect for celebrations of up to 40 guests.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={heroBg}
                alt="Private dining space"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-foreground font-serif text-4xl md:text-5xl mb-6">
              Plan Your Event
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Our events team is ready to help you create an extraordinary experience. 
              Contact us to discuss your vision and requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-gold text-background text-sm tracking-widest font-medium hover:bg-gold-hover transition-all duration-300"
            >
              INQUIRE NOW
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivateEvents;
