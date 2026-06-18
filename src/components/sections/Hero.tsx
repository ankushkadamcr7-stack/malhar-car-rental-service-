import { Car, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-primary/70 md:bg-gradient-to-r md:from-primary/90 md:via-primary/70 md:to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent text-sm font-semibold tracking-wide border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              24/7 Premium Service
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Reliable Car Rental & <br/><span className="text-accent">Taxi Service</span> in Ratnagiri
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              Comfortable Rides, Professional Drivers & Affordable Rates Across Maharashtra and India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://wa.me/917972556962" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all hover:scale-105"
              >
                Book on WhatsApp
              </a>
              <a 
                href="tel:+917972556962"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border hover:bg-white/20 border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all"
              >
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 text-sm text-slate-200 font-medium">
              <div className="flex items-center gap-2">
                <div className="text-accent">✓</div> Professional Drivers
              </div>
              <div className="flex items-center gap-2">
                <div className="text-accent">✓</div> Clean Vehicles
              </div>
              <div className="flex items-center gap-2">
                <div className="text-accent">✓</div> Local Tourism Experts
              </div>
              <div className="flex items-center gap-2">
                <div className="text-accent">✓</div> All India Pickup & Drop
              </div>
            </div>
          </div>

          {/* Quick Booking Form Card */}
          <div className="hidden lg:block bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold mb-6 text-white text-center">Get Instant Quote</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const pickup = formData.get("pickup");
              const drop = formData.get("drop");
              const message = `Hello, I'm looking for a ride from ${pickup} to ${drop}.`;
              window.open(`https://wa.me/917972556962?text=${encodeURIComponent(message)}`, '_blank');
            }}>
              <div className="space-y-1">
                <label className="text-xs text-slate-300 ml-1">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required name="pickup" type="text" placeholder="Ratnagiri" className="w-full bg-white/90 text-slate-900 placeholder:text-slate-500 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300 ml-1">Drop Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required name="drop" type="text" placeholder="Mumbai / Goa / Pune" className="w-full bg-white/90 text-slate-900 placeholder:text-slate-500 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300 ml-1">Vehicle Type</label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select className="w-full bg-white/90 text-slate-900 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-accent appearance-none">
                    <option>Hatchback (Indica/Swift)</option>
                    <option>Sedan (Dzire/Etios)</option>
                    <option>SUV (Innova/Ertiga)</option>
                    <option>Tempo Traveller</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-accent text-primary font-bold rounded-xl py-4 mt-2 flex items-center justify-center gap-2 hover:bg-white transition-colors">
                Request Quote <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
