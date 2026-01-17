import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ReservationCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/30 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-sm tracking-widest uppercase">Join Us</span>
          <h2 className="text-foreground font-serif text-4xl md:text-5xl mt-4 mb-6">
            Reserve Your Table
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Whether it's an intimate dinner for two or a celebration with loved ones, 
            we look forward to welcoming you to an unforgettable dining experience.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gold text-background text-sm tracking-widest font-medium hover:bg-gold-hover transition-all duration-300"
          >
            MAKE A RESERVATION
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationCTA;
