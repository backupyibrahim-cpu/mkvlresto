import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Gourmet Avenue", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["reservations@mkvl.com", "events@mkvl.com"],
  },
];

const hours = [
  { day: "Monday - Thursday", time: "5:00 PM - 10:00 PM" },
  { day: "Friday - Saturday", time: "5:00 PM - 11:00 PM" },
  { day: "Sunday", time: "5:00 PM - 9:00 PM" },
];

const Contact = () => {
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
            <span className="text-gold text-sm tracking-widest uppercase">Get in Touch</span>
            <h1 className="text-foreground font-serif text-5xl md:text-6xl mt-4 mb-6">
              Contact & Reservations
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We look forward to welcoming you. Reserve your table or reach out 
              with any questions about your upcoming visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-foreground font-serif text-3xl mb-8">
                Visit Us
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <info.icon className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h3 className="text-foreground font-medium mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-gold" />
                  <h3 className="text-foreground font-serif text-xl">Hours of Operation</h3>
                </div>
                <div className="space-y-4">
                  {hours.map((item) => (
                    <div key={item.day} className="flex justify-between border-b border-border/30 pb-4">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-dark-lighter border border-border/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold/50 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">Interactive map</p>
                  <p className="text-muted-foreground text-xs mt-1">123 Gourmet Avenue, New York</p>
                </div>
              </div>
            </motion.div>

            {/* Reservation Form */}
            <ReservationForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
