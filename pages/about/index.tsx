"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

import { Ready } from "@/components";
import { cn } from "@/lib/utils";

export default function About() {

    useEffect(() => {
      // If you still want to manually initialize Locomotive Scroll
      // (though using LocomotiveScrollProvider is recommended)
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
         
        });
        // Optionally, you can destroy the instance when the component unmounts
        return () => {
          locomotiveScroll.destroy();
        };
      })();
    }, []);
  return (
    <>
      {/* Fullscreen Iframe */}
      <section className="w-full h-screen flex flex-col">
        <div className="relative w-full h-full">
          <iframe
            src="/about.html"
            title="Works Page"
            className="w-full h-full border-none"
          />
        </div>
      </section>

      {/* Ready Component */}
     

      {/* Horizontal Stats Section with Custom Background */}
      <section className="py-10 bg-[#494949] text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex size-10 items-center justify-center rounded-lg border-2 border-white/20 bg-white/10">
            <Zap aria-hidden="true" className="size-6 text-purple-400" />
          </div>
          <h1 className="mx-auto max-w-md text-center text-2xl font-semibold md:text-4xl">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Dua Lipa
            </span>{" "}
            is the best singer in the world
          </h1>
          <p className="mt-3 text-center text-sm text-gray-200 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, hic
            explicabo.
          </p>
        </div>

        {/* Horizontal Layout */}
        <div className="mx-auto mt-10 pt-12 pb-12 flex max-w-4xl flex-wrap justify-center gap-10 md:mt-14">
          {[
            { percentage: 100, description: "Vocals" },
            { percentage: 90, description: "Dancing" },
            { percentage: 95, description: "Performing" },
            { percentage: 100, description: "Beauty" },
          ].map((stat, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="h-28 w-0.5 bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
              <div>
                <div className="text-3xl font-bold text-white">
                  <NumberTicker value={stat.percentage} />%
                </div>
                <div className="mt-1 text-white/80 md:mt-2">
                  {stat.description}
                </div>
                <div className="group mt-2 flex cursor-pointer items-center gap-2 text-sm text-white/60 md:mt-3 hover:text-white">
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </section>
      <section className="padding-y">
      <Testimonial />
    </section>
      <div>
        <Ready />
      </div>
    
    </>
  );
}

// NumberTicker Component
const NumberTicker = ({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.round(latest)
        );
      }
    });
  }, [springValue]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums tracking-wider text-white",
        className
      )}
      ref={ref}
    />
  );
};

const Testimonial = () => {
    return (
      <div className="relative flex h-auto w-full flex-col items-center font-['Gilda_Display'] justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
        <div className="mx-auto max-w-4xl p-4 text-center sm:py-14">
          <h1 className="mb-4 text-7xl font-['Gilda_Display'] text-white dark:text-white md:text-5xl">
            Empowering
            <br />
            <span className="bg-red-700 bg-clip-text text-transparent italic">
            Individuals & Businesses
            </span>
          </h1>
          <p className="text-3xl p-7 text-white italic dark:text-white md:text-xl">
          "Ordinary doesn't live here. We craft the extraordinary, one bold idea at a time."
          </p>
        </div>
  
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.email} {...review} />
          ))}
        </Marquee> 
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.email} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]">
          {thirdRow.map((review) => (
            <ReviewCard key={review.email} {...review} />
          ))}
        </Marquee>
  
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-black"></div>
      </div>
    );
  };
  
  const ReviewCard = ({ img, name, email, description }: any) => {
    return (
      <figure
        className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt={name}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-white/60 dark:text-white/40">{email}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-white">{description}</blockquote> 
      </figure>
    );
  };
  
  const testimonials = [
    {
      name: "John Doe",
      email: "johndoe23@gmail.com",
      description:
        "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
      name: "Alex Johnson",
      email: "alexjohnson@gmail.com",
      description: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@gmail.com",
      description: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
      name: "Michael Brown",
      email: "michaelbrown@gmail.com",
      description: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
      name: "Sarah Miller",
      email: "sarahmiller@gmail.com",
      description: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
      name: "Laura White",
      description: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt-is-wearing-yellow-shirt_911060-133057.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
  ];
  
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 3));
  const secondRow = testimonials.slice(
    Math.ceil(testimonials.length / 3),
    2 * Math.ceil(testimonials.length / 3),
  );
  const thirdRow = testimonials.slice(2 * Math.ceil(testimonials.length / 3));
   
  interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    [key: string]: any;
  }
   
  function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
  }: MarqueeProps) {
    return (
      <div
        {...props}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className,
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              })}
            >
              {children}
            </div>
          ))}
      </div>
    );
  };
