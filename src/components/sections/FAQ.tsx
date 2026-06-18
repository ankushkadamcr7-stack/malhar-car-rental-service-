import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you provide airport pickup and drop services?",
      answer: "Yes, we provide 24/7 dedicated airport pickup and drop services from Ratnagiri to Mumbai (CSMIA), Pune, Goa (Dabolim/Mopa), and Kolhapur airports."
    },
    {
      question: "Is self-drive car rental available?",
      answer: "Yes, we offer well-maintained self-drive cars for customers who prefer to drive themselves. You will need to provide a valid driving license and ID proof for booking."
    },
    {
      question: "Do you provide outstation trips?",
      answer: "Absolutely. We offer outstation cab services across Maharashtra and all over India, ideal for family vacations, pilgrimages, and business trips."
    },
    {
      question: "What types of vehicles are available in your fleet?",
      answer: "Our fleet includes Hatchbacks (Swift, Indica), Sedans (Dzire, Etios), SUVs (Innova, Ertiga), premium MUVs (Innova Crysta), and high-capacity Tempo Travellers for larger groups."
    },
    {
      question: "How can I book a taxi?",
      answer: "Booking is very easy. You can call us directly at +91 7972556962, send us a message on WhatsApp, or send an email to malharcarrentalservice@gmail.com with your travel details."
    },
    {
      question: "Do you operate 24/7?",
      answer: "Yes, Malhar Car Rental Service operates 24 hours a day, 7 days a week to ensure you always have access to reliable transportation."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300">
            Have questions before you book? Here are some of the most common inquiries.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center text-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={cn("text-accent shrink-0 transition-transform duration-300", openIndex === index ? "rotate-180" : "")} 
                />
              </button>
              
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out text-slate-300",
                  openIndex === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="leading-relaxed border-t border-white/10 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
