'use client';

import { useMemo } from 'react';

const generateBoxShadow = (n: number) => {
  let value = '';
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    value += `${x}px ${y}px #FFF${i === n - 1 ? '' : ','}`;
  }
  return value;
};

export default function PixelStars() {
  const shadows = useMemo(() => ({
    small: generateBoxShadow(700),
    medium: generateBoxShadow(200),
    big: generateBoxShadow(100),
  }), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars 1 */}
      <div 
        className="w-px h-px bg-transparent absolute top-0 left-0 animate-[animStar_50s_linear_infinite]"
        style={{ boxShadow: shadows.small }}
      >
        <div 
            className="absolute top-[2000px] w-px h-px bg-transparent"
            style={{ boxShadow: shadows.small }}
        />
      </div>

      {/* Stars 2 */}
      <div 
        className="w-[2px] h-[2px] bg-transparent absolute top-0 left-0 animate-[animStar_100s_linear_infinite]"
        style={{ boxShadow: shadows.medium }}
      >
        <div 
            className="absolute top-[2000px] w-[2px] h-[2px] bg-transparent"
            style={{ boxShadow: shadows.medium }}
        />
      </div>

      {/* Stars 3 */}
      <div 
        className="w-[3px] h-[3px] bg-transparent absolute top-0 left-0 animate-[animStar_150s_linear_infinite]"
        style={{ boxShadow: shadows.big }}
      >
        <div 
            className="absolute top-[2000px] w-[3px] h-[3px] bg-transparent"
            style={{ boxShadow: shadows.big }}
        />
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
    </div>
  );
}
