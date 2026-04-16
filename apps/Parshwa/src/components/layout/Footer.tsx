import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

export default function Footer() {
  const scrollTo = (id: string) => {
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

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Services", id: "services" },
    { name: "Gallery & Results", id: "gallery" },
    { name: "Contact & Book", id: "contact" },
  ];

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center overflow-hidden">
  <img 
    src="/logo.png" 
    alt="Logo" 
    className="w-full h-full object-cover"
  />
</div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-white">Parshwa  Dental Clinic</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              Providing modern, painless dental treatments using advanced technology and personalized care in Kandivali West, Mumbai.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-6">
            <h3 className="font-display font-semibold text-lg text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="font-display font-semibold text-lg text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4 text-sm text-background/70">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Shop No 2, Shri yamuna chs, opp. Boraspada Road, Kandivali, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+9108329064978" className="hover:text-primary transition-colors">
                  +91 08329064978
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>Mon-Sat: 10AM - 2PM, 5:30PM - 10PM</span>
                  <span>Sunday: By Appointment</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Parshwa  Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
