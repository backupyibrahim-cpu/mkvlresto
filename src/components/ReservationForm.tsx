import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, PartyPopper } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Reservation Request Received",
      description: "We'll confirm your reservation via email within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      specialRequests: "",
    });
    setIsSubmitting(false);
  };

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  const occasions = [
    "Birthday", "Anniversary", "Business Dinner", "Date Night", 
    "Celebration", "Special Occasion", "Other"
  ];

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-card p-8 md:p-10 border border-border/50"
    >
      <h3 className="text-foreground font-serif text-2xl md:text-3xl mb-8">
        Make a Reservation
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-input border border-border/50 py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-input border border-border/50 py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-input border border-border/50 py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Party Size */}
        <div className="relative">
          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <select
            name="guests"
            required
            value={formData.guests}
            onChange={handleChange}
            className="w-full bg-input border border-border/50 py-4 pl-12 pr-4 text-foreground appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
          >
            <option value="" disabled>Party Size *</option>
            {guestOptions.map((num) => (
              <option key={num} value={num}>{num} {num === "1" ? "Guest" : "Guests"}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="relative">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="w-full bg-input border border-border/50 py-4 pl-12 pr-4 text-foreground focus:outline-none focus:border-gold transition-colors cursor-pointer"
          />
        </div>

        {/* Time */}
        <div className="relative">
          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <select
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full bg-input border border-border/50 py-4 pl-12 pr-4 text-foreground appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
          >
            <option value="" disabled>Preferred Time *</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        {/* Occasion */}
        <div className="relative md:col-span-2">
          <PartyPopper className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            className="w-full bg-input border border-border/50 py-4 pl-12 pr-4 text-foreground appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
          >
            <option value="">Occasion (Optional)</option>
            {occasions.map((occ) => (
              <option key={occ} value={occ}>{occ}</option>
            ))}
          </select>
        </div>

        {/* Special Requests */}
        <div className="relative md:col-span-2">
          <MessageSquare className="absolute left-4 top-4 text-muted-foreground" size={18} />
          <textarea
            name="specialRequests"
            placeholder="Special Requests or Dietary Requirements"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={4}
            className="w-full bg-input border border-border/50 py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-8 py-4 bg-gold text-background text-sm tracking-widest font-medium hover:bg-gold-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "SUBMITTING..." : "REQUEST RESERVATION"}
      </button>

      <p className="text-muted-foreground text-xs mt-4 text-center">
        * Required fields. We will confirm your reservation within 24 hours.
      </p>
    </motion.form>
  );
};

export default ReservationForm;
