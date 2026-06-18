import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Deshmukh",
      role: "Tourist",
      content: "Excellent service! We booked an Innova for local sightseeing and Malvan trip. The driver was very polite, punctual, and knew all the good restaurants. The car was spotless.",
    },
    {
      name: "Sneha Patil",
      role: "Business Traveler",
      content: "I regularly use Malhar Car Rental for my Ratnagiri to Mumbai airport drops. They are incredibly reliable. Even for early morning flights, the driver is always there before time.",
    },
    {
      name: "Amit Joshi",
      role: "Family Trip",
      content: "Highly recommend their Tempo Traveller. We had a family function and needed transportation for 15 people. Comfortable journey, safe driving, and very reasonable pricing.",
    },
    {
      name: "Pooja Kadam",
      role: "Local Customer",
      content: "Booked a self-drive Swift for 3 days. The process was super smooth, no hidden charges, and the vehicle condition was like new. Will definitely use again.",
    },
    {
      name: "Vikram Singh",
      role: "Tourist",
      content: "We hired a taxi from Ratnagiri to Mahabaleshwar. The scenic route was beautiful, and the driver drove very safely on the ghats. Truly a premium experience.",
    },
    {
      name: "Neha Sharma",
      role: "Corporate Client",
      content: "Professionalism at its best. They provided sedan cabs for our company guests for a week. Everyone praised the punctuality and cleanliness. Thank you Sanket!",
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[2px] w-8 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <div className="h-[2px] w-8 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="font-serif text-6xl text-slate-100 absolute top-4 left-6 leading-none">"</div>
              <div className="flex gap-1 mb-4 relative z-10 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-6 italic relative z-10 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">See More Reviews on Google</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We take pride in our 5-star rating on Google Business Profile. Read what hundreds of satisfied customers have to say about our service.
          </p>
          <a 
            href="https://share.google/w58fggzV75fojtLf7" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors"
          >
            <Star className="text-accent" fill="currentColor" />
            View Our Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
