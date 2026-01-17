import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import dish2Image from "@/assets/dish-2.jpg";
import cocktailImage from "@/assets/cocktail.jpg";
import privateDiningImage from "@/assets/private-dining.jpg";

const experiences = [
  {
    image: dish2Image,
    title: "Curated Tasting Menu",
    description: "A seven-course journey through our chef's seasonal inspirations.",
  },
  {
    image: cocktailImage,
    title: "Craft Cocktails",
    description: "Artisanal drinks crafted by our master mixologists.",
  },
  {
    image: privateDiningImage,
    title: "Private Dining",
    description: "Exclusive spaces for intimate celebrations and gatherings.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">Discover</span>
          <h2 className="text-foreground font-serif text-4xl md:text-5xl mt-4">
            The MKVL Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-foreground font-serif text-2xl mb-3">{exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/menu"
            className="inline-block px-10 py-4 border border-gold text-gold text-sm tracking-widest hover:bg-gold hover:text-background transition-all duration-300"
          >
            EXPLORE OUR MENU
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
