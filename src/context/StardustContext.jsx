import { createContext, useContext, useState } from "react";

const StardustContext = createContext();

export function StardustProvider({ children }) {
  const [points, setPoints] = useState(0);

  const addPoints = (amount) => {
    setPoints((prev) => prev + amount);
  };

  return (
    <StardustContext.Provider value={{ points, addPoints }}>
      {children}
    </StardustContext.Provider>
  );
}

export function useStardust() {
  return useContext(StardustContext);
}
