import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Services", id: "services" },
    { name: "Gallery & Results", id: "gallery" },
    { name: "Contact & Book", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => scrollTo("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollTo("home");
            }
          }}
        >
          <img
            src="/logo.png"
            alt="IC Dental logo"
            className="h-20 w-20 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-[40px] font-display font-bold text-lg leading-none text-foreground ">IC Dental</span>
            <span className="text-2xl font-medium text-primary tracking-wider uppercase ">Clinic</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button 
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="text-md font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 ml-2 pl-6 border-l border-border">
            
            <Button 
              onClick={() => scrollTo("contact")}
              className="font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Book Appointment
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl p-4 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button 
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left p-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 p-3 bg-secondary/30 rounded-xl mt-2 border border-border/50">
            
            <Button 
              onClick={() => scrollTo("contact")}
              className="w-full font-semibold rounded-lg"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
