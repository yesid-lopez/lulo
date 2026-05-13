'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { CmsCaseStudyMockup } from '@/utils/cmsCaseStudies';

type Props = {
  mockups: CmsCaseStudyMockup[];
};

const EDGE_TOLERANCE = 8;
const SCROLL_PAGE_FRACTION = 0.85;

export default function CaseStudyMockupGallery({ mockups }: Props) {
  const stripRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const refreshScrollState = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > EDGE_TOLERANCE);
    setCanScrollRight(el.scrollLeft < maxScroll - EDGE_TOLERANCE);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    refreshScrollState();
    el.addEventListener('scroll', refreshScrollState, { passive: true });
    window.addEventListener('resize', refreshScrollState);
    return () => {
      el.removeEventListener('scroll', refreshScrollState);
      window.removeEventListener('resize', refreshScrollState);
    };
  }, [refreshScrollState]);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    // Translate vertical wheel into horizontal scroll on desktop where the
    // trackpad would normally only scroll the page. Only intercept when the
    // user is actually moving vertically (deltaY) more than horizontally.
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      const atStart = el.scrollLeft <= 0 && event.deltaY < 0;
      const atEnd = el.scrollLeft >= maxScroll && event.deltaY > 0;
      if (atStart || atEnd) return;
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const scrollByPage = (direction: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * SCROLL_PAGE_FRACTION, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <ul
        ref={stripRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [justify-content:safe_center] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6"
      >
        {mockups.map((mockup) => (
          <li key={mockup.src} className="snap-start shrink-0">
            <Image
              src={mockup.src}
              alt={mockup.alt}
              width={600}
              height={1299}
              loading="lazy"
              className="block h-[360px] w-auto rounded-2xl object-cover shadow-[0_24px_60px_-30px_rgba(17,24,39,0.45)] md:h-[420px]"
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Previous mockup"
        onClick={() => scrollByPage(-1)}
        className={`absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 p-2.5 text-gray-900 shadow-lg backdrop-blur transition-opacity duration-200 hover:bg-white md:flex ${
          canScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next mockup"
        onClick={() => scrollByPage(1)}
        className={`absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 p-2.5 text-gray-900 shadow-lg backdrop-blur transition-opacity duration-200 hover:bg-white md:flex ${
          canScrollRight ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
