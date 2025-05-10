"use client";

import { useEffect, useRef, MutableRefObject } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';

type ScrollAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

const defaultOptions: ScrollAnimationOptions = {
  threshold: 0.2,
  rootMargin: '50px',
  triggerOnce: false,
};

export const useScrollAnimation = (
  options: ScrollAnimationOptions = defaultOptions
): [MutableRefObject<null>, AnimationControls] => {
  const controls = useAnimation();
  const elementRef = useRef(null);

  useEffect(() => {
    const { threshold, rootMargin, triggerOnce } = { ...defaultOptions, ...options };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          controls.start('hidden');
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [controls, options]);

  return [elementRef, controls];
};