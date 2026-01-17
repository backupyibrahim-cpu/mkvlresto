import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-gold font-serif text-3xl font-semibold tracking-wider">
              MKVL
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              An exceptional culinary journey awaits in the heart of the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/private-events" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                  Private Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>123 Gourmet Avenue</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">+1 (555) 123-4567</li>
              <li>reservations@mkvl.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-4">Hours</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Monday - Thursday</li>
              <li className="text-foreground">5:00 PM - 10:00 PM</li>
              <li className="pt-2">Friday - Saturday</li>
              <li className="text-foreground">5:00 PM - 11:00 PM</li>
              <li className="pt-2">Sunday</li>
              <li className="text-foreground">5:00 PM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MKVL Restaurant. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
