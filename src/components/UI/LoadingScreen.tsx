"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  /**
   * Optional minimum display time in milliseconds
   * This ensures the loading animation completes even if content loads very quickly
   */
  minimumLoadingTime?: number;
  children: React.ReactNode; // Add children prop
}

// Create a context to manage loading state across components
interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {}
});

export const useLoading = () => useContext(LoadingContext);

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  minimumLoadingTime = 1500,
  children 
}) => {
  const [loading, setLoading] = useState(true);
  const [isCompletelyDone, setIsCompletelyDone] = useState(false);

  useEffect(() => {
    // Simulate minimum loading time to ensure animation completes
    const timer = setTimeout(() => {
      setLoading(false);
    }, minimumLoadingTime);

    // Clean up timer on unmount
    return () => clearTimeout(timer);
  }, [minimumLoadingTime]);

  // This effect handles the transition after the exit animation completes
  useEffect(() => {
    if (!loading) {
      // Wait for exit animation to complete before setting completely done
      const completeTimer = setTimeout(() => {
        setIsCompletelyDone(true);
      }, 500); // Match this with the exit animation duration
      
      return () => clearTimeout(completeTimer);
    }
  }, [loading]);

  // Create context value
  const contextValue = {
    isLoading: !isCompletelyDone,
    setIsLoading: setLoading
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children} {/* Render the children */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-sky-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </LoadingContext.Provider>
);
}

export default LoadingScreen;