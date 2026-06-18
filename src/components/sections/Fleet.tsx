import { Users, Briefcase, Car as CarIcon, ArrowRight } from "lucide-react";

export default function Fleet() {
  const fleet = [
    {
      category: "Hatchback",
      name: "Swift / Indica",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600",
      seats: "4 Seater",
      bags: "2 Bags",
      purpose: "Local & Budget Travel",
    },
    {
      category: "Sedan",
      name: "Dzire / Etios",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=600",
      seats: "4 Seater",
      bags: "3 Bags",
      purpose: "Comfort & Outstation",
    },
    {
      category: "SUV",
      name: "Innova / Ertiga",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
      seats: "6/7 Seater",
      bags: "4 Bags",
      purpose: "Family & Long Tours",
    },
    {
      category: "Luxury MUV",
      name: "Innova Crysta",
      image: "https://images.unsplash.com/photo-1605556209594-c116c476722d?auto=format&fit=crop&q=80&w=600",
      seats: "6/7 Seater",
      bags: "4 Bags",
      purpose: "Premium Travel",
    },
    {
      category: "Tempo Traveller",
      name: "Force Traveller",
      image: "https://images.unsplash.com/photo-1534091931393-27c1cb3cdb9a?auto=format&fit=crop&q=80&w=600",
      seats: "13 to 17 Seater",
      bags: "10+ Bags",
      purpose: "Group & Corporate Tours",
    },
  ];

  return (
    <section id="fleet" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Vehicles</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
              The Premium Fleet
            </h2>
            <p className="text-slate-600 text-lg">
              Explore our well-maintained, fully air-conditioned fleet. From nimble hatchbacks to spacious Tempo Travellers, we have a vehicle for every journey.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {vehicle.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-4">{vehicle.name}</h3>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-slate-600 mb-6 flex-1">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-accent" />
                    <span>{vehicle.seats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-accent" />
                    <span>{vehicle.bags}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <CarIcon size={16} className="text-accent" />
                    <span>{vehicle.purpose}</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/917972556962?text=${encodeURIComponent(`Hi, I'm interested in booking the ${vehicle.name} (${vehicle.category}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-aut flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
                >
                  Book This Vehicle <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
