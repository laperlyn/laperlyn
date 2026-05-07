import { createContext, useContext, useState, useEffect } from "react";

const StardustContext = createContext();

export function StardustProvider({ children }) {
  const [points, setPoints] = useState(() => {
    // Load saved points from localStorage on first render
    const saved = localStorage.getItem("stardust_points");
    return saved ? parseInt(saved, 10) : 0;
  });

  // Save to localStorage whenever points change
  useEffect(() => {
    localStorage.setItem("stardust_points", points.toString());
  }, [points]);

  const addPoints = (amount) => {
    setPoints((prev) => prev + amount);
  };

  const resetPoints = () => {
    setPoints(0);
    localStorage.removeItem("stardust_points");
  };

  return (
    <StardustContext.Provider value={{ points, addPoints, resetPoints }}>
      {children}
    </StardustContext.Provider>
  );
}

export function useStardust() {
  return useContext(StardustContext);
}
