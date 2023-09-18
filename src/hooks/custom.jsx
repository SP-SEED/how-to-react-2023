import { useEffect } from "react";
import "../index.css";

function useBeforeUnloadAlert(message) {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = message; 
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [message]);
}


export default function F() {
    useBeforeUnloadAlert( "You have unsaved changes. Are you sure you want to leave?" );
  
    return (
      <div>
        <h1 className="dark-bg">useCustom Hook</h1>
      </div>
    );
  }
  

