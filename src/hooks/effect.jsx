import { useState, useEffect } from "react";
import "../index.css";

export default function B() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const fakeApiResponse = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" },
          ];
  
          setData(fakeApiResponse);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1 className="dark-bg">useEffect Hook </h1>
        {isLoading ? (
          <p className="dark-bg">Loading...</p>
        ) : (
          <ul className="dark-bg">
            {data?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  