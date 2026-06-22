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
            <a 
              href={`https://wa.me/917972556962?text=${encodeURIComponent(`Hi Malhar Car Rental, I would like to learn more about the ${dest} package.`)}`}
              target="_blank"
              rel="noreferrer"
              key={idx} 
              className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-4 flex items-center gap-4 transition-colors group cursor-pointer"
            >
              <div className="bg-accent/20 p-2 rounded-lg text-accent shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors">
                <MapPin size={20} />
              </div>
              <span className="font-medium text-slate-100 flex-1">{dest}</span>
              <span className="text-xs font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity">Book</span>
            </a>
          ))}
          <a 
            href={`https://wa.me/917972556962?text=${encodeURIComponent(`Hi Malhar Car Rental, I would like to learn more about the All India Pick And Drop Service From Ratnagiri.`)}`}
            target="_blank"
            rel="noreferrer"
            className="bg-accent hover:bg-accent/90 text-primary rounded-xl p-4 flex items-center gap-4 transition-colors group cursor-pointer"
          >
            <div className="bg-primary/10 p-2 rounded-lg text-primary shrink-0 transition-colors">
              <MapPin size={20} />
            </div>
            <span className="font-bold flex-1 text-sm leading-tight">All India Pick And Drop Service From Ratnagiri</span>
            <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Book</span>
          </a>
        </div>
      </div>
    </section>
  );
}
