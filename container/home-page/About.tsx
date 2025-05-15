"use client";
import { Instagram, Linkedin, MessageCircle, ChevronRight } from "lucide-react";
import { Lens1 } from "@/data/data";
import { Lens2 } from "@/data/data";
import { Lens3 } from "@/data/data";
import { Lens4 } from "@/data/data";



const socialLinks = [
  { id: 1, title: "Instagram", href: "https://www.instagram.com/thesocialmoodboard/", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/+1234567890?text=Dear%20Social%20Moodboard%20Team%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20services%20and%20how%20you%20can%20help%20with%20my%20social%20media%20strategy.%20Could%20you%20please%20provide%20more%20details%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C", icon: <MessageCircle size={20} /> },
];

const services = [
  {
    id: 1,
    title: "Social Media Suite",
    description: "Comprehensive management and content creation for all your social platforms. We craft engaging narratives that connect with your audience through carefully curated visuals and purposeful messaging.",
    color: "#ff2d20", // Red-600 color
    src: "/sms.png",
  },
  {
    id: 2,
    title: "Visual Identity",
    description: "Crafting distinctive brand aesthetics that resonate with your target audience. Our design philosophy embraces elegance, intention, and the subtle art of visual storytelling that captivates and endures.",
    color: "#ff2d20", // Red-600 color
    src: "/vid.png",
  },
  {
    id: 3,
    title: "Optimization Hub",
    description: "Data-driven strategies to maximize engagement and conversion rates. We leverage analytical insights to refine your digital presence, ensuring your content performs optimally across all touchpoints.",
    color: "#ff2d20", // Red-600 color
    src: "/opt.png",
  },
  {
    id: 4,
    title: "Website Development",
    description: "Forward-thinking approaches to position your brand for long-term success. We develop comprehensive roadmaps that align with your business objectives while maintaining flexibility for emerging trends.",
    color: "#ff2d20", // Red-600 color
    src: "/web.png",
  },
  {
    id: 5,
    title: "Digital Strategy & Beyond",
    description: "Forward-thinking approaches to position your brand for long-term success. We develop comprehensive roadmaps that align with your business objectives while maintaining flexibility for emerging trends.",
    color: "#ff2d20", // Red-600 color
    src: "/ds.png",
  }
  
];


// LogoCloud component defined separately


export default function About() {
  return (
    <section className="w-full bg-[#494949] py-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
      {/* Refined background elements with reduced opacity */}


      {/* Header Section - Added more vertical spacing */}
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-40">
        <div className="mb-12">
          <span className="px-6 py-2 bg-[#494949] tracking-tight font-bold rounded-full text-lg text-white opacity-100 border border-gray-800 uppercase">
            Elevate Your Digital Presence
          </span>
        </div>

        <h1 className="font-['Gilda_Display'] text-6xl sm:text-6xl md:text-7xl font-normal mb-12 tracking-tight leading-tight text-white opacity-100">
          Welcome to <span className="text-red-600 italic">The Social Moodboard</span>
        </h1>

        <p className="text-white opacity-100 text-2xl max-w-2xl mx-auto font-light leading-relaxed mt-6 font-['Gilda_Display']">
          We craft bespoke social media strategies, visual identities, optimization solutions, and forward-thinking digital strategies that elevate your brand's presence.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <a
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-light rounded-full hover:shadow-lg hover:translate-y-px transition-all duration-300 flex items-center gap-2 font-['Gilda_Display']"
          >
            Start a Project <ChevronRight size={16} />
          </a>
          <a
            href="/services"
            className="px-10 py-4 bg-[#494949] text-white opacity-100 font-light rounded-full hover:bg-gray-600 transition-all duration-300 border border-gray-800 shadow-sm font-['Gilda_Display']"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Services Section - With Images */}
      <div id="services" className="w-full max-w-6xl mx-auto relative z-10 mb-40">
        <h2 className="text-6xl font-normal mb-24 text-center font-['Gilda_Display'] text-white opacity-100">
          Our Expertise
        </h2>

        {/* Alternating image layout for services */}
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-32 last:mb-0 items-center`}
          >
            {/* Image Section */}
            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-12 lg:mb-0`}>
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gray-800/5 rounded-2xl transform -rotate-3 scale-95"
                  style={{
                    borderLeft: index % 2 === 0 ? `4px solid ${service.color}` : 'none',
                    borderRight: index % 2 === 1 ? `4px solid ${service.color}` : 'none'
                  }}
                ></div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={service.src}
                    alt={service.title}
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105 opacity-100"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
              <div className="w-16 h-0.5 mb-10" style={{ backgroundColor: service.color }}></div>
              <h3 className="text-5xl font-normal mb-8 text-red-600 opacity-100 font-['Gilda_Display']">
                {service.title}
              </h3>
              <p className="text-white opacity-100 font-light text-lg leading-relaxed mb-8 font-['Gilda_Display']">
                {service.description}
              </p>
              <a
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 opacity-45 text-white hover:text-red-500 font-['Gilda_Display'] group/link"
              >
                <span>Discover More</span>
                <ChevronRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links Section - More elegant spacing */}
      <div className="pt-24 border-t border-gray-800 relative z-10">
        <h2 className="text-2xl font-normal mb-16 text-center font-['Gilda_Display'] text-white opacity-100">
          Connect With Us
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white opacity-40 hover:text-red-900 font-light transition-all duration-300 gap-2"
            >
              {item.icon}
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* About the Founder Section */}
      <div className="relative z-10 bg-transparent lg:py-32 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-red-600 blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-800 blur-3xl"></div>
  </div>
  
  <div className="container mx-auto px-6 relative">
    {/* Heading with refined typography */}
    <h2 className="text-4xl md:text-5xl lg:text-7xl mb-16 text-center font-['Gilda_Display'] text-white">
     Behind <span className="italic text-red-500 relative">
        Social Moodboard
        <span className="absolute -bottom-2 left-0 w-full h-px bg-red-500 opacity-50"></span>
      </span>
    </h2>
    
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mx-auto max-w-7xl">
      {/* Image Section with enhanced styling */}
      <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-transparent mix-blend-overlay z-10"></div>
        <img
          src="/vis.png" 
          alt="Vishishta Banerjee"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text Section with better layout */}
      <div className="max-w-xl text-center lg:text-left mt-12 lg:mt-0">
        <p className="text-white/90 text-lg font-light mb-8 font-['Gilda_Display'] leading-relaxed">
          With over four years of experience, I, <strong className="text-red-400">Vishishta Banerjee</strong>, have worked with brands across industries, transforming their online presence. I create strategies that don't just "look good" but actually drive results. From F&B hotspots to corporate houses, I've helped businesses craft an identity, connect with their audience, and, most importantly—convert.
        </p>
        
        {/* Enhanced button with animation */}
        <a
          href="/about"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-light rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          <span className="font-['Gilda_Display']">Learn More About Us</span>
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

<div>

<h2 className="text-4xl md:text-5xl lg:text-7xl mb-16 text-center font-['Gilda_Display'] text-white">
     Niches <span className="italic text-red-500 relative">
       Worked In
        <span className="absolute -bottom-2 left-0 w-full h-px bg-red-500 opacity-50"></span>
      </span>
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <Lens1 />
  <Lens2 />
  <Lens3 />
  <Lens4 />
</div>

</div>


    </section>
  );
}