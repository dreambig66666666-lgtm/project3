import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <button
          type="button"
          className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0 min-w-0"
          onClick={() => scrollTo("home")}
          aria-label="Go to home"
        >
          <img
            src="/logo.png"
            alt="Parshwa  Dental logo"
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain shrink-0"
          />
          <div className="flex flex-col leading-none whitespace-nowrap min-w-0">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              Parshwa  Dental
            </span>
            <span className="text-left text-xs sm:text-sm font-medium text-primary tracking-wider uppercase text-foreground">
              Clinic
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
          <ul className="flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="rounded-md px-1 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 ml-2 pl-6 border-l border-border">
            <Button
              onClick={() => scrollTo("contact")}
              className="h-10 px-5 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
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
          aria-expanded={isMobileMenuOpen}
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
              className="w-full h-10 font-semibold rounded-lg text-sm"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}