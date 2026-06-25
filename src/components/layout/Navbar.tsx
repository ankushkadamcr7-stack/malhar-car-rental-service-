import { Phone, Menu, X, Car } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Fleet", href: "/#fleet" },
    { name: "Packages", href: "/#packages" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-primary/95 backdrop-blur-md text-white shadow-lg py-2" : "bg-transparent text-white py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="w-24 h-16 md:w-36 md:h-24 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <img src="/malharcarrental.jpg.png" alt="Malhar Car Rental Logo" className="w-full h-full object-contain scale-[2.2] md:scale-[2.5]" />
            </div>
            <div className="flex flex-col drop-shadow-md justify-center -ml-2 md:-ml-4">
              <span className="font-serif font-bold text-3xl md:text-4xl tracking-wide leading-none text-white uppercase">
                Malhar
              </span>
              <span className="text-[11px] md:text-sm tracking-[0.15em] font-bold text-[#eab308] uppercase mt-1 md:mt-1.5">
                Car Rental Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="tel:+917972556962"
              className="flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-full font-semibold hover:bg-white transition-colors"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-accent p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-4 text-base font-medium text-white hover:bg-slate-800 hover:text-accent border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="tel:+917972556962"
                className="flex items-center justify-center gap-2 w-full bg-accent text-primary px-5 py-3 rounded-xl font-bold"
              >
                <Phone size={20} />
                <span>+91 7972556962</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
