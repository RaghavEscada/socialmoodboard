"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase, Search, DollarSign, TrendingUp, CheckCircle
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Deal Sourcing",
    description: "We discover overlooked digital businesses through proprietary tech, networks, and niche platforms.",
    icon: Search,
    points: [
      "AI bots scan 150+ platforms.",
      "We leverage personal founder networks.",
      "Inbound applications via our site.",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Evaluation & Diligence",
    description: "We assess business health, financials, and growth potential using AI-driven workflows and expert insight.",
    icon: Briefcase,
    points: [
      "Revenue quality & churn analysis.",
      "Tech & product audit.",
      "Founder interviews & data-room evaluation.",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Acquisition",
    description: "We negotiate and acquire high-potential SaaS, MarTech, and niche online businesses at fair, founder-friendly terms.",
    icon: DollarSign,
    points: [
      "Transparent deal terms.",
      "Minimal disruption to sellers.",
      "Flexible payout structures.",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Operate & Scale",
    description: "We step in post-acquisition to optimize pricing, improve retention, and unlock scale through strategic execution.",
    icon: TrendingUp,
    points: [
      "Automated onboarding & handover.",
      "Dedicated ops & growth pods.",
      "Focus on retention, CRO & strategic hires.",
    ],
  },
];

export default function HorizontalScrollProcess() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Adjusted to make sure horizontal scrolling completes within the available space
  const x = useTransform(scrollYProgress, [0, 0.7], ["0%", `-${(processSteps.length - 1) * 25}%`]);
  
  // Adjusted to make the final transition happen earlier
  const y = useTransform(scrollYProgress, [0.7, 1], ["0vh", "0vh"]);
  
  // Adjusted opacity transition to match the y transition
  const carouselOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-start text-white">
        <motion.div
          style={{ x, y, opacity: carouselOpacity }}
          className="flex flex-nowrap h-screen pt-20 pb-0"
        >
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="w-screen h-full px-7 flex items-center justify-center relative"
              >
                {/* Vertical bullet connector */}
                <div className="absolute left-16 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                  <div className="h-72 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                  <div className="h-14 w-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-xl border-2 border-white/20 z-10 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>

                {/* Content card - Much bigger */}
                <div className="max-w-6xl w-full h-4/5 bg-gradient-to-br from-white/15 via-white/10 to-transparent p-16 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20 hover:border-indigo-300/30 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-8 mb-10">
                      <div className="h-24 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="h-12 w-12" />
                      </div>
                      <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-200 text-2xl mb-12 leading-relaxed max-w-4xl">{step.description}</p>
                  </div>
                  
                  <div className="flex-grow flex items-center">
                    <ul className="space-y-8 text-gray-200 w-full">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-6">
                          <div className="bg-indigo-500/20 p-3 rounded-xl">
                            <CheckCircle className="h-10 w-10 text-indigo-400 flex-shrink-0" />
                          </div>
                          <span className="text-2xl pt-2">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
  style={{ opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]) }}
  className="absolute inset-0 flex items-center justify-center text-white pointer-events-none"
>
  <div className="text-center animate-bounce space-y-3">
    <div className="text-2xl md:text-3xl font-semibold text-blue-400">This is Ours. Let’s Dive In</div>
    <svg className="w-8 h-8 mx-auto text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</motion.div>

        {/* Title - Enhanced */}
        <div className="absolute top-8 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-blue-500">
            Our Process
          </h1>

          
      
        </div>
      </div>
    </section>
  );
}