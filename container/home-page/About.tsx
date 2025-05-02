"use client";
import { Instagram, Linkedin, MessageCircle, ChevronRight } from "lucide-react";
import { TimelineDemo } from "@/data/data";

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
    color: "#8A7968", // Warm brown
    src: "/sms.png", // Updated image URL
  },
  {
    id: 2,
    title: "Visual Identity",
    description: "Crafting distinctive brand aesthetics that resonate with your target audience. Our design philosophy embraces elegance, intention, and the subtle art of visual storytelling that captivates and endures.",
    color: "#3C3C3C", // Deep black
    src: "/vid.png", // Updated image URL
  },
  {
    id: 3,
    title: "Optimization Hub",
    description: "Data-driven strategies to maximize engagement and conversion rates. We leverage analytical insights to refine your digital presence, ensuring your content performs optimally across all touchpoints.",
    color: "#8A7968", // Warm brown
    src: "/opt.png", // Updated image URL
  },
  {
    id: 4,
    title: "Digital Strategy & Beyond",
    description: "Forward-thinking approaches to position your brand for long-term success. We develop comprehensive roadmaps that align with your business objectives while maintaining flexibility for emerging trends.",
    color: "#3C3C3C", // Deep black
    src: "/ds.png", // Updated image URL
  }
];

// LogoCloud component defined separately
const logos = [
  {
    name: "Babel",
    url: "https://svgl.app/library/babel.svg",
  },
  {
    name: "Ngrok",
    url: "https://svgl.app/library/ngrok-light.svg",
  },
  {
    name: "Webflow",
    url: "https://svgl.app/library/webflow.svg",
  },
  {
    name: "Perplexity",
    url: "https://svgl.app/library/perplexity_wordmark_light.svg",
  },
  {
    name: "Sanity",
    url: "https://svgl.app/library/sanity.svg",
  },
  {
    name: "Post CSS",
    url: "https://svgl.app/library/postcss_wordmark.svg",
  },
];
     
export const LogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-2 md:px-4">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-10 w-28 px-2"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section className="w-full bg-gray-100 text-gray-800 py-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
      {/* Refined background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-stone-200/40 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-stone-300/40 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl bg-gradient-to-b from-white/60 to-transparent opacity-30 rounded-full blur-3xl" />
      
      {/* Header Section - Added more vertical spacing */}
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-40">
        <div className="mb-12">
          <span className="px-6 py-2 bg-stone-100 rounded-full text-xs tracking-[0.3em] text-stone-600 border border-stone-200 uppercase font-light">
            Elevate Your Digital Presence
          </span>
        </div>
        
        <h1 className="font-['Gilda_Display'] text-5xl sm:text-6xl md:text-7xl font-normal mb-12 tracking-tight leading-tight">
          Welcome to <span className="text-red-800 italic">The Social Moodboard</span>
        </h1>
        
        <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light leading-relaxed mt-6 font-['Gilda_Display']">
          We craft bespoke social media strategies, visual identities, optimization solutions, and forward-thinking digital strategies that elevate your brand's presence.
        </p>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <a 
            href="/contact" 
            className="px-10 py-4 bg-gradient-to-r from-stone-800 to-stone-700 text-white font-light rounded-full hover:shadow-lg hover:translate-y-px transition-all duration-300 flex items-center gap-2 font-['Gilda_Display']"
          >
            Start a Project <ChevronRight size={16} />
          </a>
          <a 
            href="/services" 
            className="px-10 py-4 bg-white text-stone-800 font-light rounded-full hover:bg-stone-50 transition-all duration-300 border border-stone-200 shadow-sm font-['Gilda_Display']"
          >
            Explore Services 
          </a>
        </div>
      </div>

      {/* Services Section - With Images */}
      <div id="services" className="w-full max-w-6xl mx-auto relative z-10 mb-40">
        <h2 className="text-3xl font-normal mb-24 text-center font-['Gilda_Display'] text-stone-800">
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
                  className="absolute inset-0 bg-stone-800/5 rounded-2xl transform -rotate-3 scale-95"
                  style={{ borderLeft: index % 2 === 0 ? `4px solid ${service.color}` : 'none', 
                          borderRight: index % 2 === 1 ? `4px solid ${service.color}` : 'none' }}
                ></div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={service.src} 
                    alt={service.title}
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
              <div className="w-16 h-0.5 mb-10" style={{ backgroundColor: service.color }}></div>
              <h3 className="text-3xl font-normal mb-8 text-stone-800 font-['Gilda_Display']">
                {service.title}
              </h3>
              <p className="text-stone-500 font-light text-lg leading-relaxed mb-8 font-['Gilda_Display']">
                {service.description}
              </p>
              <a 
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 font-['Gilda_Display'] group/link"
              >
                <span>Discover More</span>
                <ChevronRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        ))}

      </div>

     

      {/* Social Links Section - More elegant spacing */}
      <div className="pt-24 border-t border-stone-200 relative z-10">
        <h2 className="text-2xl font-normal mb-16 text-center font-['Gilda_Display'] text-stone-800">
          Connect With Us
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-stone-700 hover:text-stone-900 font-light transition-all duration-300 gap-2"
            >
              {item.icon}
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* About the Founder Section */}
      <div className="pt-24 relative z-10 bg-gray-100 py-20">
  <h2 className="text-7xl font-bold mb-12 text-center font-['Gilda_Display'] text-stone-800">
    About the <p className="italic text-red-800">Founder</p> 
  </h2>
  
  <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mx-auto max-w-7xl">
    {/* Image Section */}
    <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl">
      <img 
        src="/founder-image.jpg"  // Replace with actual image path
        alt="Vishishta Banerjee"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="max-w-xl text-center lg:text-left">
      <p className="text-stone-600 text-lg font-light mb-6 font-['Gilda_Display']">
        With over four years of experience, I, <strong>Vishishta Banerjee</strong>, have worked with brands across industries, transforming their online presence. I create strategies that don’t just “look good” but actually drive results. From F&B hotspots to corporate houses, I’ve helped businesses craft an identity, connect with their audience, and, most importantly—convert.
      </p>
      <a 
        href="/about" // Replace with a link if necessary
        className="px-8 py-4 bg-gradient-to-r from-stone-800 to-stone-700 text-white font-light rounded-full hover:shadow-lg hover:translate-y-px transition-all duration-300 flex items-center gap-2 font-['Gilda_Display']"
      >
        Learn More About Me
      </a>
    </div>
  </div>
</div>

      <LogoCloud />
    </section>
  );
}
