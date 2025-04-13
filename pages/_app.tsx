import "@/styles/globals.css";
import { Footer, MobileNav } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function App({
  Component,
  pageProps,
  router,
}: {
  Component: any;
  pageProps: any;
  router: any;
}) {
  // Define the route where you don't want the footer
  const hideFooterRoutes = ["/core"]; // Add more routes if needed
  
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to handle responsive behavior
  useEffect(() => {
    // Function to check if screen is mobile width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      {/* Show Navbar only on non-mobile screens */}
      {!isMobile && <Navbar />}
      
      {/* Show MobileNav only on mobile screens */}
      {isMobile && <MobileNav />}
      
      <AnimatePresence mode="wait">
        <Component
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
      
      {/* Render footer only if the current route is not in the hideFooterRoutes array */}
      {!hideFooterRoutes.includes(router.route) && <Footer />}
    </>
  );
}