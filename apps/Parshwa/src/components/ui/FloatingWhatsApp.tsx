import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  const phoneNumber = "+9108329064978";
  const message = "Hi, I want to book an appointment";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-white text-[#25D366] px-4 py-2 rounded-full font-medium text-sm shadow-lg shadow-black/5 opacity-0 scale-90 translate-x-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 origin-right pointer-events-none hidden sm:block">
        Need help? Chat with us
      </div>
      <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 relative">
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
        <SiWhatsapp className="w-7 h-7 fill-current" />
      </div>
    </a>
  );
}
