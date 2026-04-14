import { motion } from "framer-motion";
import { Sparkles, Sun, CircleDot, Wrench, AlignLeft, SmilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    name: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque, tartar, and stains for a fresher, healthier smile.",
  },
  {
    icon: Sun,
    name: "Teeth Whitening",
    description: "Advanced whitening treatments to brighten your smile by several shades safely and effectively.",
  },
  {
    icon: CircleDot,
    name: "Dental Implants",
    description: "Permanent, natural-looking tooth replacements that restore your confidence and bite strength.",
  },
  {
    icon: Wrench,
    name: "Root Canal",
    description: "Pain-free root canal therapy to save damaged teeth and eliminate infection with precision care.",
  },
  {
    icon: AlignLeft,
    name: "Braces / Aligners",
    description: "Discreet orthodontic solutions including clear aligners for perfectly aligned teeth.",
  },
  {
    icon: SmilePlus,
    name: "Smile Design",
    description: "Complete smile makeovers combining multiple treatments for your dream smile transformation.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine checkups to advanced cosmetic treatments, we offer everything your smile needs under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeInUp}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">{service.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-fit mt-2 rounded-full font-semibold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => scrollTo("contact")}
                data-testid={`button-book-${service.name.toLowerCase().replace(/[\s/]+/g, "-")}`}
              >
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
