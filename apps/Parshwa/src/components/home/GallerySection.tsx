import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "transformations" | "clinic" | "equipment";

const categories: { key: Category; label: string }[] = [
  { key: "transformations", label: "Smile Transformations" },
  { key: "clinic", label: "Clinic Interior" },
  { key: "equipment", label: "Equipment" },
];

const galleryImages: Record<
  Category,
  { before?: string; after?: string; src?: string; alt: string }[]
> = {
  transformations: [
    {
      before: "/gallery/1.jpg",
      after: "/gallery/2.jpg",
      alt: "Smile Transformation 1",
    },
    {
      before: "/gallery/3.jpg",
      after: "/gallery/4.jpg",
      alt: "Smile Transformation 2",
    },
    {
      before: "/gallery/5.jpg",
      after: "/gallery/6.jpg",
      alt: "Smile Transformation 3",
    },
    {
      before: "/gallery/7.jpg",
      after: "/gallery/8.jpg",
      alt: "Smile Transformation 4",
    },
  ],
  clinic: [
    { src: "/gallery/clinic.png", alt: "Clinic Reception" },
    { src: "/gallery/eqp.png", alt: "Treatment Room" },
    { src: "/gallery/eqp1.png", alt: "Treatment Room 2" },
    { src: "/gallery/clinic.png", alt: "Clinic Reception 2" },
  ],
  equipment: [
    { src: "/gallery/full.png", alt: "Modern Equipment" },
    { src: "/gallery/full.png", alt: "Modern Equipment 2" },
  ],
};

function TransformationCard({
  before,
  after,
  alt,
  onUserInteract,
}: {
  before: string;
  after: string;
  alt: string;
  onUserInteract?: () => void;
})

{
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-video w-full overflow-hidden rounded-xl">
        <img
  src={before}
  alt={`${alt} before`}
  onClick={() => onUserInteract?.()}
  className="w-full h-full object-cover"
/>
          <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-1 text-xs text-white">
            Before
          </span>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl">
        <img
  src={before}
  alt={`${alt} before`}
  onClick={() => onUserInteract?.()}
  className="w-full h-full object-cover"
/>
          <span className="absolute right-2 top-2 rounded bg-primary px-2 py-1 text-xs text-primary-foreground">
            After
          </span>
        </div>
      </div>

      <p className="mt-4 text-center font-semibold text-gray-800">{alt}</p>
    </div>
  );
}

function SingleImageCard({
  src,
  alt,
  onUserInteract,
}: {
  src: string;
  alt: string;
  onUserInteract?: () => void;
}) {
  return (
    <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-4 shadow-sm">
      <div className="aspect-video w-full overflow-hidden rounded-xl">
      <img
  src={src}
  alt={alt}
  onClick={() => onUserInteract?.()}
  className="h-full w-full object-cover cursor-pointer"
/>
      </div>

      <p className="mt-4 text-center font-semibold text-gray-800">{alt}</p>
    </div>
  );
}

function CompactCarousel({
  slides,
  activeIndex,
  setActiveIndex,
  onUserInteract,
}: {
  slides: { src: string; alt: string }[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  onUserInteract?: () => void;
}) {
  const hasMultiple = slides.length > 1;

  const goPrev = () => {
    onUserInteract?.();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    onUserInteract?.();
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative">
      {hasMultiple && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          {slides[activeIndex] && (
  <SingleImageCard
     src={slides[activeIndex].src}
    alt={slides[activeIndex].alt}
    onUserInteract={onUserInteract}
  />
)}
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                onUserInteract?.();
                setActiveIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-emerald-600" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("transformations");

  const [transformIndex, setTransformIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const sectionRef = useRef<HTMLElement | null>(null);
  const transformCarouselRef = useRef<HTMLDivElement | null>(null);
  const transformSlideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollEndTimer = useRef<number | null>(null);
  const autoResumeTimer = useRef<number | null>(null);

  const transformationSlides = galleryImages.transformations;

  const mediaSlides =
    activeCategory === "clinic"
      ? galleryImages.clinic.map((item) => ({
          src: item.src!,
          alt: item.alt,
        }))
        
      : activeCategory === "equipment"
      ? galleryImages.equipment.map((item) => ({
          src: item.src!,
          alt: item.alt,
        }))
      : [];
      const safeMediaIndex =
      mediaSlides.length > 0 ? mediaIndex % mediaSlides.length : 0;
  const stopAutoPlayTemporarily = () => {
    setAutoPlay(false);

    if (autoResumeTimer.current) {
      window.clearTimeout(autoResumeTimer.current);
    }

    autoResumeTimer.current = window.setTimeout(() => {
      setAutoPlay(true);
    }, 10000);
  };

  const scrollToTransformSlide = (index: number) => {
    const container = transformCarouselRef.current;
    const slide = transformSlideRefs.current[index];
    if (!container || !slide) return;

    container.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });

    setTransformIndex(index);
  };

  const goToTransformPrev = () => {
    stopAutoPlayTemporarily();
    setTransformIndex((prev) => {
      const next =
        (prev - 1 + transformationSlides.length) % transformationSlides.length;
      requestAnimationFrame(() => scrollToTransformSlide(next));
      return next;
    });
  };

  const goToTransformNext = () => {
    stopAutoPlayTemporarily();
    setTransformIndex((prev) => {
      const next = (prev + 1) % transformationSlides.length;
      requestAnimationFrame(() => scrollToTransformSlide(next));
      return next;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeCategory !== "transformations") return;
    if (!isInView) return;

    const interval = window.setInterval(() => {
      setTransformIndex((prev) => {
        const next = (prev + 1) % transformationSlides.length;
        requestAnimationFrame(() => scrollToTransformSlide(next));
        return next;
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, [activeCategory, isInView, transformationSlides.length]);

  useEffect(() => {
    if (activeCategory === "transformations") {
      setTransformIndex(0);
      requestAnimationFrame(() => scrollToTransformSlide(0));
    } else {
      setMediaIndex(0);
    }
  }, [activeCategory]);

  useEffect(() => {
    if (!autoPlay) return;
    if (!isInView) return;

    const order: Category[] = ["transformations", "clinic", "equipment"];

    const interval = window.setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = order.indexOf(prev);
        const nextIndex = (currentIndex + 1) % order.length;
        return order[nextIndex];
      });
    }, 8000);

    return () => window.clearInterval(interval);
  }, [autoPlay, isInView]);

  useEffect(() => {
    if (activeCategory === "transformations") return;
    if (!isInView) return;
    if (mediaSlides.length <= 1) return;

    const interval = window.setInterval(() => {
      setMediaIndex((prev) => (prev + 1) % mediaSlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [activeCategory, isInView, mediaSlides.length]);

  useEffect(() => {
    if (scrollEndTimer.current) {
      window.clearTimeout(scrollEndTimer.current);
    }

    if (autoResumeTimer.current) {
      window.clearTimeout(autoResumeTimer.current);
    }

    return () => {
      if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
      if (autoResumeTimer.current) window.clearTimeout(autoResumeTimer.current);
    };
  }, []);

  const handleTransformScroll = () => {
    if (scrollEndTimer.current) {
      window.clearTimeout(scrollEndTimer.current);
    }

    scrollEndTimer.current = window.setTimeout(() => {
      const container = transformCarouselRef.current;
      if (!container) return;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      transformSlideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const distance = Math.abs(slide.offsetLeft - container.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setTransformIndex(closestIndex);
    }, 80);
  };

  return (
    <section ref={sectionRef} id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-6xl font-bold text-black-900">Gallery & Results</h2>
          <p className="mt-2 text-gray-600">
            See the difference we create with our treatments
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant={activeCategory === cat.key ? "default" : "outline"}
              className="rounded-full"
              onClick={() => {
                setActiveCategory(cat.key);
                stopAutoPlayTemporarily();
              }}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {activeCategory === "transformations" ? (
          <div className="relative">
            <button
              onClick={goToTransformPrev}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
              aria-label="Previous transformation"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={goToTransformNext}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
              aria-label="Next transformation"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={transformCarouselRef}
              onScroll={handleTransformScroll}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
            >
              {transformationSlides.map((img, i) => (
                <motion.div
                  key={i}
                  ref={(el) => {
                    transformSlideRefs.current[i] = el;
                  }}
                  className="w-full flex-shrink-0 snap-start md:w-[calc((100%-1rem)/2)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                >
                  <TransformationCard
  before={img.before!}
  after={img.after!}
  alt={img.alt}
  onUserInteract={stopAutoPlayTemporarily}
/>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {transformationSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    stopAutoPlayTemporarily();
                    scrollToTransformSlide(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === transformIndex ? "w-6 bg-emerald-600" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          
          <CompactCarousel
            slides={mediaSlides}
            activeIndex={safeMediaIndex}
            setActiveIndex={setMediaIndex}
            onUserInteract={stopAutoPlayTemporarily}
          />
          
        )}
        
      </div>
    </section>
  );
}