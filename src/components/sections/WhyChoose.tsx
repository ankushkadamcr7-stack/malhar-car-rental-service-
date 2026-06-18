import { Clock, ShieldCheck, ThumbsUp, DollarSign, Award, Smile, Map } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      title: "24/7 Availability",
      description: "We are available round the clock for urgent bookings and airport transfers.",
      icon: Clock
    },
    {
      title: "Experienced Drivers",
      description: "Courteous, verified, and highly experienced drivers who know the routes very well.",
      icon: Award
    },
    {
      title: "Clean & Sanitized",
      description: "Spotless vehicles maintained to the highest standards of hygiene and comfort.",
      icon: ShieldCheck
    },
    {
      title: "Affordable Pricing",
      description: "Transparent billing with no hidden charges. Premium service at competitive rates.",
      icon: DollarSign
    },
    {
      title: "Local Expertise",
      description: "We help you discover the hidden gems of Konkan with our local tourism knowledge.",
      icon: Map
    },
    {
      title: "Customer Satisfaction",
      description: "Our top priority is ensuring you have a relaxed and comfortable journey.",
      icon: Smile
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[2px] w-8 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
            <div className="h-[2px] w-8 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            The Malhar Difference
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon || ThumbsUp;
            return (
              <div key={index} className="flex gap-4 p-6">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
