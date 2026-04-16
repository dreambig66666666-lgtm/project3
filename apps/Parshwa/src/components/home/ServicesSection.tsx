import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// images from src/assets
import bracesImg from "@/assets/braces.jpeg";
import denturesImg from "@/assets/dentures.jpeg";
import extractionImg from "@/assets/extraction.jpeg";
import implantsImg from "@/assets/implants.jpeg";
import rootCanalImg from "@/assets/rootcanal.jpeg";
import whiteningImg from "@/assets/whiting.jpeg";

const services = [
  {
    name: "Braces",
    image: bracesImg,
    desc: "Straighten crooked teeth with reliable orthodontic treatment.\nImprove your bite, smile, and long-term dental health.",
  },
  {
    name: "Dentures",
    image: denturesImg,
    desc: "Restore missing teeth with comfortable full or partial dentures.\nA practical solution for better chewing and confidence.",
  },
  {
    name: "Extraction",
    image: extractionImg,
    desc: "Safe and painless tooth removal when a tooth cannot be saved.\nDone with care to reduce discomfort and recovery time.",
  },
  {
    name: "Implants",
    image: implantsImg,
    desc: "Permanent replacement for missing teeth with natural-looking results.\nStrong, stable, and built to last for years.",
  },
  {
    name: "Root Canal",
    image: rootCanalImg,
    desc: "Treat infected teeth and save them from extraction.\nPain relief with precise, comfortable endodontic care.",
  },
  {
    name: "Whitening",
    image: whiteningImg,
    desc: "Brighten your smile with safe professional whitening.\nFast, effective treatment for a cleaner, fresher look.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-4xl font-bold uppercase tracking-[0.1em] text-slate-1200">
            Our Services
          </span>
          
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            
              className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_1px_10px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
            >
              <div className="overflow-hidden rounded-[24px] bg-slate-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>

              <div className="px-2 pb-2 pt-5 text-center">
              <h3
  onClick={() => scrollTo("contact")}
  className="text-lg font-semibold text-slate-900 cursor-pointer hover:text-primary transition"
>
  {service.name}
</h3>

                <p
                  className="mt-2 text-sm leading-6 text-slate-600"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        
        <div className="mt-10 text-center">
          <Button
            onClick={() => scrollTo("contact")}
            className="rounded-full px-6"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}