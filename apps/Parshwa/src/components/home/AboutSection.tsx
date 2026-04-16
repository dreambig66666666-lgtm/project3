import { motion } from "framer-motion";
import { Award, Users, Cpu, GraduationCap } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const highlights = [
  { icon: Award, label: "10+ Years Experience", value: "10+" },
  { icon: Users, label: "5000+ Happy Patients", value: "5000+" },
  { icon: Cpu, label: "Modern Equipment", value: "Latest" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} custom={0} className="flex flex-col gap-4">
              <span className="text-primary font-bold text-3xl tracking-wider uppercase">About Our Clinic</span>
              <h2 className="text-3xl md:text-2xl font-display font-bold text-foreground leading-tight">
                Your Smile Deserves the Best Care
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Parshwa  Dental Clinic provides modern, painless dental treatments using advanced technology and personalized care. Our experienced team ensures every visit is comfortable, efficient, and tailored to your unique dental needs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} custom={1} className="grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl font-display font-bold text-foreground">{item.value}</span>
                  <span className="text-xs text-muted-foreground font-medium mt-1">{item.label.split(" ").slice(1).join(" ")}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-muted/30 shadow-xl">
              <img
                src="/gallery/doctor.png"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="flex gap-6 p-6 rounded-2xl bg-background border border-border/50 shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-display font-bold text-foreground">DR. Drishti</h3>
                <p className="text-sm text-primary font-semibold">BDS (Dental Surgeon)</p>
                <p className="text-sm text-muted-foreground">
                  10+ years experience in smile correction and implants. Dedicated to providing comfortable and transformative dental care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
