import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const StardustContext = createContext();

export function StardustProvider({ children }) {
  // Check if we have saved points from a previous visit, otherwise start at 0
  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem('laperlyn_stardust');
    return savedPoints ? parseInt(savedPoints, 10) : 0;
  });

  // Whenever points change, save them to the browser's local storage
  useEffect(() => {
    localStorage.setItem('laperlyn_stardust', points);
  }, [points]);

  // The function to add points
  const addPoints = (amount) => {
    setPoints((prevPoints) => prevPoints + amount);
  };

  return (
    <StardustContext.Provider value={{ points, addPoints }}>
      {children}
    </StardustContext.Provider>
  );
}

// Custom hook to use the Stardust easily in any file
export const useStardust = () => useContext(StardustContext);
