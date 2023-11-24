// pages/YourPage.tsx
import React from "react";

const YourPage: React.FC = () => {
  const handleLoadData = async () => {
    try {
      const response = await fetch("/api/combo", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error loading data:", response.statusText);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  return (
    <div>
      <h1>Your Page</h1>
      <button onClick={handleLoadData}>Load Character Data</button>
    </div>
  );
};

export default YourPage;
