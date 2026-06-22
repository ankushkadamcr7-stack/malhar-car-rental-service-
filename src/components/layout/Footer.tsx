import { MapPin, Phone, Mail, Car } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-flex mb-2">
              <div className="w-24 h-12 md:w-32 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                <img src="/malharcarrentallogo.png.jpeg" alt="Malhar Car Rental Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-serif font-bold text-xl leading-none">MALHAR</span>
                <span className="text-[10px] tracking-widest text-accent font-semibold uppercase">Car Rental Service</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed pr-4">
              Premium car rental and taxi service in Ratnagiri. Offering reliable local and outstation travel solutions 24/7 across Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/#about" className="hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link to="/#packages" className="hover:text-accent transition-colors text-sm">Tour Packages</Link></li>
              <li><Link to="/#fleet" className="hover:text-accent transition-colors text-sm">Vehicle Fleet</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors text-sm">Terms & Conditions</Link></li>
              <li><a href="https://share.google/w58fggzV75fojtLf7" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors text-sm">Google Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-sm">Local Taxi Service</li>
              <li className="text-sm">Outstation Cabs</li>
              <li className="text-sm">Self Drive Cars</li>
              <li className="text-sm">Airport Pickup & Drop</li>
              <li className="text-sm">Corporate Travel</li>
              <li className="text-sm">Konkan Sightseeing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-sm">Room No. 03, B Wing, Guru Krupa Residency, Guru Kutir Building, Near Atulit Baladham, Sahyadri Nagar, Nachane (T.R.P.), Ratnagiri - 415639, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:+917972556962" className="text-sm hover:text-white transition-colors">+91 7972556962</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:malharcarrentalservice@gmail.com" className="text-sm hover:text-white transition-colors">malharcarrentalservice@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Malhar Car Rental Service. All Rights Reserved.
          </p>
          <div className="text-sm text-center md:text-right">
            Sanket Bhikaji Tulsankar, Owner
          </div>
        </div>
      </div>
    </footer>
  );
}
