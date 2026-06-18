import { CarFront, Key, Plane, Briefcase, Map as MapIcon, UserCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Taxi Service",
      description: "Reliable local and outstation taxi services. Clean, comfortable cabs for all trips.",
      icon: CarFront,
    },
    {
      title: "Car Rental Service",
      description: "Daily, weekly, and custom rental packages to suit your travel itinerary.",
      icon: MapIcon,
    },
    {
      title: "Self Drive Cars",
      description: "Experience the freedom to travel at your own pace with our self-drive options.",
      icon: Key,
    },
    {
      title: "Replacement Driver",
      description: "Hire professional, experienced drivers for your personal vehicle on a daily basis.",
      icon: UserCircle,
    },
    {
      title: "Airport Pickup & Drop",
      description: "Timely transfers to Mumbai, Pune, Goa, and Kolhapur Airports.",
      icon: Plane,
    },
    {
      title: "Corporate Travel",
      description: "Professional, punctual transportation solutions for business executives and teams.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[2px] w-8 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">What We Offer</span>
            <div className="h-[2px] w-8 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            Premium Mobility Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            Whether for local sightseeing, business transfers, or cross-state journeys, our services are structured to deliver comfort unconditionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
