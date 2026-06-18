import { MapPin } from "lucide-react";

export default function Packages() {
  const destinations = [
    "Ratnagiri Local Sightseeing",
    "Ratnagiri to Mumbai",
    "Ratnagiri to Pune",
    "Ratnagiri to Goa",
    "Ratnagiri to Malvan",
    "Ratnagiri to Kolhapur",
    "Ratnagiri to Mahabaleshwar",
    "Ratnagiri to Guhagar",
    "Ratnagiri to Dapoli",
    "Ratnagiri to Shrivardhan",
    "Ratnagiri to Alibag"
  ];

  return (
    <section id="packages" className="py-20 md:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[2px] w-8 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Destinations</span>
            <div className="h-[2px] w-8 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Popular Tour Packages
          </h2>
          <p className="text-slate-300 text-lg">
            Discover the beauty of the Konkan coast and beyond with our customized tour packages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-4 flex items-center gap-4 transition-colors">
              <div className="bg-accent/20 p-2 rounded-lg text-accent shrink-0">
                <MapPin size={20} />
              </div>
              <span className="font-medium text-slate-100">{dest}</span>
            </div>
          ))}
          <div className="bg-accent text-primary rounded-xl p-4 flex items-center justify-center font-bold">
            All India Pickup & Drop Available
          </div>
        </div>
      </div>
    </section>
  );
}
