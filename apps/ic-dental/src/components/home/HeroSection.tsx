import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";

export default function HeroSection() {
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

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-28 overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-3/4 h-[80%] bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-[50%] bg-gradient-to-tr from-secondary to-transparent rounded-tr-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Content */}
        <div className="flex flex-col gap-6 lg:max-w-2xl pt-14 lg:pt-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary w-fit border border-secondary-border mt-2"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">
              Trusted Dental Clinic in Borivali West
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl/tight font-display font-bold text-foreground"
          >
            Advanced Dental Care for{" "}
            <span className="text-primary relative inline-block">
              Confident Smile
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Features */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed flex flex-wrap gap-x-4 gap-y-2 items-center"
          >
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-primary" /> Pain-free treatments
            </span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-primary" /> Experienced Dentist
            </span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" /> Book Today
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base font-semibold group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              onClick={() => scrollTo("contact")}
            >
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base font-semibold border-2 hover:bg-secondary/50 transition-colors"
              onClick={() => scrollTo("services")}
            >
              View Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-border/50"
          >
            <div>
              <span className="text-3xl font-bold">10+</span>
              <span className="text-sm text-muted-foreground">Years Exp.</span>
            </div>
            <div>
              <span className="text-3xl font-bold">5k+</span>
              <span className="text-sm text-muted-foreground">Happy Smiles</span>
            </div>
            <div>
              <span className="text-3xl font-bold">4.9</span>
              <span className="text-sm flex items-center gap-1 text-muted-foreground">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Rating
              </span>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-muted/30 border-8 border-background z-10">
            <img
              src="/gallery/img.png"
              alt="Modern Dental Clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}