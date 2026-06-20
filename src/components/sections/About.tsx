import { ShieldCheck, Map, Users, ThumbsUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative">
            <img 
              src="https://tripandtales.com/wp-content/uploads/2025/08/Ratnadurg-Fort%E2%80%8B.jpg" 
              alt="Ratnagiri" 
              className="rounded-2xl shadow-xl w-full h-80 md:h-[500px] object-cover"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:inline-flex flex-col items-center justify-center">
              <span className="text-4xl font-serif font-bold text-primary">10+</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Years Exp</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-12 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Know Us</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight">
              Your Trusted Travel Partner in<span className="block text-accent">Ratnagiri</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Malhar Car Rental Service is a premium travel partner offering trusted taxi services, self-drive cars, replacement drivers, airport transfers, sightseeing tours, and outstation travel across Maharashtra and India.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              Our mission is to provide safe, comfortable, punctual, and affordable transportation solutions for tourists, families, business travelers, and local customers.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 rounded-lg text-primary shrink-0 h-fit">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Safe & Secure</h4>
                  <p className="text-sm text-slate-500">Verified drivers & sanitized vehicles.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 rounded-lg text-primary shrink-0 h-fit">
                  <Map size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">All India Roots</h4>
                  <p className="text-sm text-slate-500">Local expertise & outstation ready.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
