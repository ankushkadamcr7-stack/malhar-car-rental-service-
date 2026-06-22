import { useState } from "react";
import { Users, Briefcase, Car as CarIcon, ArrowRight } from "lucide-react";

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState("All");

  const fleet = [
    {
      category: "SUV",
      name: "Toyota Innova",
      image: "https://imgd-ct.aeplcdn.com/664x415/cw/cars/discontinued/toyota/innova-2005-2009.jpg?q=80",
      seats: "6/7 Seater",
      bags: "4 Bags",
      purpose: "Family & Long Tours",
    },
    {
      category: "Hatchback",
      name: "Swift",
      image: "https://mc.bajajfinserv.in/media/catalog/product/v/x/vxiamtpearlarcticwhite_base11.jpg",
      seats: "4 Seater",
      bags: "2 Bags",
      purpose: "Local & Budget Travel",
    },
    {
      category: "Hatchback",
      name: "Maruti Suzuki Wagon R",
      image: "https://ackodrive-prod.ackoassets.com/image/maruti-suzuki/wagon-r/solid-white/images_cdn/small/Transparent.webp",
      seats: "4 Seater",
      bags: "2 Bags",
      purpose: "Local & Budget Travel",
    },
    {
      category: "Hatchback",
      name: "TATA Altroz",
      image: "https://assets.tractorjunction.com/car-junction/images/models/1778654572589-Altroz06.webp?width=800&height=600",
      seats: "4 Seater",
      bags: "2 Bags",
      purpose: "Local & Budget Travel",
    },
    {
      category: "Hatchback",
      name: "TATA Tiago",
      image: "https://ic4.maxabout.us/autos/cars_india//T/2016/4/tata-tiago-pearlescent-white.jpg",
      seats: "4 Seater",
      bags: "2 Bags",
      purpose: "Local & Budget Travel",
    },
    {
      category: "Sedan",
      name: "Maruti Suzuki Dzire",
      image: "https://hyderabadwheels.com/wp-content/uploads/hyderabad-wheels-maruti-suzuki-dzire-sedan-rental-car-v2.png",
      seats: "4 Seater",
      bags: "3 Bags",
      purpose: "Comfort & Outstation",
    },
    {
      category: "Sedan",
      name: "Hyundai Aura",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139133/aura-exterior-right-front-three-quarter-9.png?isig=0&q=80",
      seats: "4 Seater",
      bags: "3 Bags",
      purpose: "Comfort & Outstation",
    },
    {
      category: "Sedan",
      name: "Toyota Etios",
      image: "https://marketplace-cdn.cars24.com/production/14746807747/exterior/2025-10-30/car_replace_bg_a2509b40-64dd-498e-869e-04da61d43817.png?w=600&format=auto&dpr=2",
      seats: "4 Seater",
      bags: "3 Bags",
      purpose: "Comfort & Outstation",
    },
    {
      category: "Sedan",
      name: "Hyundai Xcent",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/26914/xcent-exterior-right-front-three-quarter.jpeg?q=80",
      seats: "4 Seater",
      bags: "3 Bags",
      purpose: "Comfort & Outstation",
    },
    {
      category: "SUV",
      name: "Maruti Suzuki Ertiga",
      image: "https://imgd.aeplcdn.com/664x374/n/c6es93a_1572125.jpg?q=80",
      seats: "6/7 Seater",
      bags: "4 Bags",
      purpose: "Family & Long Tours",
    },
    {
      category: "SUV",
      name: "Toyota Innova Crysta",
      image: "https://marketplace-cdn.cars24.com/production/14493361727/main%20image/2026-02-15/car_replace_bg_45a27140-e2e9-4620-9120-1fbdb57e7de0.png?width=3840&format=auto&quality=75&pad=80%2C0%2C60&trim-color=auto",
      seats: "6/7 Seater",
      bags: "4 Bags",
      purpose: "Premium Travel",
    },
    {
      category: "SUV",
      name: "Chevrolet Tavera",
      image: "https://imgd.aeplcdn.com/664x374/ec/89/7A/9793/img/m/Chevrolet-Tavera-Right-Front-Three-Quarter-49908_ol.jpg?v=201711021421&q=80",
      seats: "9 Seater",
      bags: "5 Bags",
      purpose: "Group Travel",
    },
    {
      category: "SUV",
      name: "TATA Sumo",
      image: "data:image/jpeg;base64,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",
      seats: "7/9 Seater",
      bags: "5 Bags",
      purpose: "Rough Terrain & Outstation",
    },
    {
      category: "Tempo Traveller",
      name: "Tempo Traveller",
      image: "https://www.jcrcab.com/wp-content/uploads/2020/07/Force-Tempo-Traveller-non-ac-1250x917.jpg",
      seats: "17/20 seater",
      bags: "10+ Bags",
      purpose: "Group & Corporate Tours",
    },
    {
      category: "Tempo Traveller",
      name: "Urbania Tempo Traveller",
      image: "https://www.agrataxi.net/backend/products/1818184919-urbania-tempo-agra.webp",
      seats: "17 Seater",
      bags: "10+ Bags",
      purpose: "Premium Group Tours",
    },
  ];

  const categoryOrder = ["Hatchback", "Sedan", "SUV", "Tempo Traveller"];
  const categories = ["All", ...categoryOrder];

  const sortedFleet = [...fleet].sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));
  const filteredFleet = activeCategory === "All" 
    ? sortedFleet 
    : sortedFleet.filter(v => v.category === activeCategory);

  return (
    <section id="fleet" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
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

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((vehicle, index) => (
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
