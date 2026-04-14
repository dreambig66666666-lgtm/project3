import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "transformations" | "clinic" | "equipment";

const categories: { key: Category; label: string }[] = [
  { key: "transformations", label: "Smile Transformations" },
  { key: "clinic", label: "Clinic Interior" },
  { key: "equipment", label: "Equipment" },
];

const galleryImages: Record<Category, { before?: string; after?: string; src?: string; alt: string }[]> = {
  transformations: [
    {
      before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop",
      alt: "Smile transformation 1",
    },
    {
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop",
      alt: "Smile transformation 2",
    },
  ],
  clinic: [
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop", alt: "Clinic reception" },
    { src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop", alt: "Treatment room" },
    { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop", alt: "Waiting area" },
  ],
  equipment: [
    { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop", alt: "Digital X-Ray" },
    { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop", alt: "Modern dental equipment" },
  ],
};

function BeforeAfterSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={(e) => {
        if (isDragging) handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
      }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
    >
      <img src={after} alt={`${alt} - after`} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <img src={before} alt={`${alt} - before`} className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${(100 / sliderPosition) * 100}%`, maxWidth: `${(100 / sliderPosition) * 100}%` }} />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-foreground -mr-1" />
          <ChevronRight className="w-4 h-4 text-foreground -ml-1" />
        </div>
      </div>
      <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">Before</div>
      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">After</div>
    </div>
  );
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("transformations");

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Gallery & Results</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            See the Difference We Make
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse our smile transformations, clinic interiors, and state-of-the-art equipment.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant={activeCategory === cat.key ? "default" : "outline"}
              className="rounded-full font-semibold"
              onClick={() => setActiveCategory(cat.key)}
              data-testid={`button-gallery-${cat.key}`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages[activeCategory].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {img.before && img.after ? (
                  <BeforeAfterSlider before={img.before} after={img.after} alt={img.alt} />
                ) : (
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 shadow-sm hover:shadow-md transition-shadow">
                    <img src={img.src!} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
