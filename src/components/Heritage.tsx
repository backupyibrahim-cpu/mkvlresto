import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import chefImage from "@/assets/chef.jpg";
import dish1Image from "@/assets/dish-1.jpg";

const Heritage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="text-foreground font-serif text-4xl md:text-5xl mt-4 mb-6">
              Our Heritage
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2015, MKVL represents the pinnacle of fine dining excellence. 
                Our kitchen, led by award-winning Chef Marcus Laurent, brings together 
                traditional techniques with modern innovation.
              </p>
              <p>
                Every ingredient is carefully sourced from local farms and international 
                purveyors who share our commitment to quality. We believe that exceptional 
                dining is not just about the food—it's about creating memories.
              </p>
              <p>
                Our space was designed to transport guests to a world of refined elegance, 
                where attention to detail extends from the plate to every corner of the room.
              </p>
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={chefImage}
                  alt="Chef at work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 mt-12">
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish1Image}
                  alt="Signature dish"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
