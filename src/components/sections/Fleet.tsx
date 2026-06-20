import { Users, Briefcase, Car as CarIcon, ArrowRight } from "lucide-react";

export default function Fleet() {
  const fleet = [
    {
      category: "Hatchback",
      name: "Swift / Indica",
      image: "https://mc.bajajfinserv.in/media/catalog/product/v/x/vxiamtpearlarcticwhite_base11.jpg",
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
      image: "https://www.wheelsbingo.com/images/web-img/cars/car_images/toyota-innova-crysta-front-left-side-exterior.webp",
      seats: "6/7 Seater",
      bags: "4 Bags",
      purpose: "Premium Travel",
    },
    {
      category: "Tempo Traveller",
      name: "Force Traveller",
      image: "data:image/jpeg;base64,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",
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
