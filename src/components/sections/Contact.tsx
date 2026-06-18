import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[2px] w-8 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <div className="h-[2px] w-8 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Booking Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-4 rounded-full text-primary mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+917972556962" className="text-2xl font-bold text-primary hover:text-accent transition-colors block">
                    +91 7972556962
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-4 rounded-full text-primary mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Address</h4>
                  <a href="mailto:malharcarrentalservice@gmail.com" className="text-lg font-bold text-primary hover:text-accent transition-colors break-all">
                    malharcarrentalservice@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-4 rounded-full text-primary mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Office Address</h4>
                  <p className="text-primary font-medium leading-relaxed">
                    Room No. 03, B Wing, Guru Krupa Residency,<br/>
                    Guru Kutir Building, Near Atulit Baladham,<br/>
                    Sahyadri Nagar, Nachane (T.R.P.),<br/>
                    Ratnagiri - 415639, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-4 rounded-full text-primary mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Working Hours</h4>
                  <p className="text-primary font-bold text-lg">
                    24 Hours / 7 Days
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/917972556962" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-1 transition-transform shadow-lg"
              >
                WhatsApp Booking
              </a>
              <a 
                href="https://share.google/w58fggzV75fojtLf7" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                View Google Profile
              </a>
            </div>

          </div>

          <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            {/* Embedded Google Map (Placeholder generic map for Ratnagiri if specific embed isn't provided, using iframe) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.601149258273!2d73.313465116744!3d16.99307768560085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa0500118ebced%3A0xa22b10931215b138!2sRatnagiri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714470000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
