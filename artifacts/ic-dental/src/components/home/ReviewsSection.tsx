import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent experience at IC Dental! The doctor was very gentle and explained everything clearly. My root canal was completely painless. Highly recommend!",
  },
  {
    name: "Rajesh Patel",
    rating: 5,
    text: "Best dental clinic in Borivali. Very clean and modern equipment. The staff is friendly and professional. Got my teeth whitening done here and results are amazing!",
  },
  {
    name: "Anita Deshmukh",
    rating: 5,
    text: "My kids love coming here! The doctor is so patient with children and makes them feel comfortable. The clinic is spotless and well-maintained. Five stars!",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "Got my dental implants done here and the results are fantastic. The treatment was smooth and the follow-up care was exceptional. Thank you, IC Dental!",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Patient Reviews</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from the thousands of happy patients who trust IC Dental Clinic for their dental care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col gap-4 relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <span className="text-sm font-semibold text-foreground">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="rounded-full font-semibold px-8"
            data-testid="button-view-all-reviews"
          >
            View All Reviews
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
