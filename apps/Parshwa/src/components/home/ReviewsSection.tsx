import { ArrowRight, Star } from "lucide-react";
import GoogleLogo from "@/assets/google.svg";

const reviews = [
  {
    name: "Rakesh Pushilkar",
    time: "2 weeks ago",
    initial: "R",
    color: "bg-blue-500",
    text: "Best Dentist in KandivaliI am currently doing my Invisalign treatment with DR. Drishti at DR. Drishti who is a Certified Invisalign Provider, and I am so happy with the results. The aligners are comfortable and the process has been very smooth.",
  },
  {
    name: "Jahnvi Trivedi",
    time: "1 day ago",
    initial: "J",
    color: "bg-red-500",
    text: "I have visited here for my tooth filing and DR. Drishti did take good care, did suggest all the possible options and did the treatment very well. Thanks to his skills, would highly recommend him to anyone.",
  },
  {
    name: "Pintu Sk",
    time: "2 months ago",
    initial: "P",
    color: "bg-green-500",
    text: "The Dentist DR. Drishti extremely warm, friendly and easy to work with. helped me get set up to remove the wisdom teeth which were causing severe pain. will definitely be coming back for my dental care.",
  },
  {
    name: "Ajay Pandey",
    time: "a month ago",
    initial: "A",
    color: "bg-purple-500",
    text: "Happy with Minimum visit painless, bloodless and suturless single unit dental implant treatment done from DR. Drishti and again I am saying that satisfied with overall result. Highly recommend DR. Drishti, Dahisar.",
  },
  {
    name: "Anita Dheevaar",
    time: "2 months ago",
    initial: "A",
    color: "bg-orange-500",
    text: "I came from naigaon(East) to do my tooth removal dental treatment from DR. Drishti... DR. Drishti, Kandivaliprovided me with best dental care experience I have had till now. Professional, courteous, friendly and extremely helpful.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: {
    name: string;
    time: string;
    initial: string;
    color: string;
    text: string;
  };
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white ${review.color}`}
        >
          {review.initial}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-900">
            {review.name}
          </h3>
          <p className="text-xs text-slate-500">{review.time}</p>
        </div>
      </div>

      <div className="mt-4">
        <Stars />
      </div>

      <p
        className="mt-3 text-sm leading-6 text-slate-600"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {review.text}
      </p>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-[#f5fafb] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2">
            <img src={GoogleLogo} alt="Google" className="h-6 w-6 object-contain" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Google Reviews
            </h2>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars />
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-slate-900">5.0</span>
              <span className="text-sm text-slate-500">rating</span>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            See what our patients say about us
          </p>
        </div>

        {/* TOP ROW */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {reviews.slice(3).map((review) => (
            <div key={review.name} className="w-full md:w-[31%]">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        {/* BUTTONS */}
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <a
    href="https://www.google.com/maps/place/DR.+Drishti's+Parshwa+Dental+Clinic/@19.2118952,72.8445532,17z/data=!4m8!3m7!1s0x3be7b75728e33b75:0xd1fedbec93e15290!8m2!3d19.2119225!4d72.8443922!9m1!1b1!16s%2Fg%2F11ms9fnxw0?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-md border border-slate-400 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
  >
    See all reviews on Google
    <ArrowRight className="h-4 w-4" />
  </a>

  <a
    href="https://www.google.com/search?q=DR.+Drishti%27s+Parshwa+Dental+Clinic&rlz=1C1FHFK_enIN1184IN1184&oq=DR.+Drishti%27s+Parshwa+Dental+Clinic&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzczNGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3be7b75728e33b75:0xd1fedbec93e15290,3,,,,"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-amber-300"
  >
    Rate Us ⭐
  </a>
</div>
      </div>
    </section>
  );
}