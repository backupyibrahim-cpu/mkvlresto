import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-gold font-serif text-8xl md:text-9xl mb-4">404</h1>
        <h2 className="text-foreground font-serif text-3xl md:text-4xl mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off. 
          Let us guide you back to our table.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3.5 bg-gold text-background text-sm tracking-widest font-medium hover:bg-gold-hover transition-all duration-300"
        >
          RETURN HOME
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
