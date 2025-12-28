"use client";

import { useEffect, useState, useRef } from "react";

export function ResumeScaler({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | "auto">("auto");
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Define calculation logic
    const calculateSize = () => {
      if (!contentRef.current) return;

      // Use documentElement.clientWidth to exclude scrollbar
      const availableWidth = document.documentElement.clientWidth;
      const contentWidth = 1200; // Fixed width of the resume
      const currentContentHeight = contentRef.current.offsetHeight;

      if (currentContentHeight === 0 || availableWidth === 0) return;

      // Calculate scale
      let newScale = 1;
      if (availableWidth < contentWidth) {
        newScale = availableWidth / contentWidth;
      }
      
      setScale(newScale);
      
      // Update height with buffer
      // We do NOT check for small differences here because we want to be precise
      // But since we removed the loop (ResizeObserver), it's safe.
      setHeight(currentContentHeight * newScale + 50); 
    };

    // 2. Initial calculation
    calculateSize();
    
    // 3. Re-run calculation a few times to catch layout settlements (fonts, images, animations)
    // This replaces the ResizeObserver which was causing infinite loops
    const timers = [
        setTimeout(calculateSize, 100),
        setTimeout(calculateSize, 500),
        setTimeout(calculateSize, 1000),
        setTimeout(calculateSize, 2000)
    ];

    // 4. Handle Window Resize
    // Debounce to improve performance
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(calculateSize, 100);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      timers.forEach(clearTimeout);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full overflow-hidden flex justify-center items-start origin-top-left"
      style={{ 
        height: height
      }}
    >
      <div 
        ref={contentRef}
        style={{ 
          width: "1200px", // Force fixed width
          transform: `scale(${scale})`, 
          transformOrigin: "top center",
          flexShrink: 0
        }}
      >
        {children}
      </div>
    </div>
  );
}