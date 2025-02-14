import React, { useEffect, useState } from "react";

const OnlineStatus = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);
  const [manualMode, setManualMode] = useState(false); // ✅ Manual toggle mode

  useEffect(() => {
    if (manualMode) return; // ✅ If manual mode is ON, don't listen to network changes

    const handleOffline = () => setOnline(false);
    const handleOnline = () => setOnline(true);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [manualMode]); // ✅ Runs only if manual mode is OFF

  // ✅ Toggle function
  const toggleStatus = () => {
    setManualMode(true); // ✅ Activate manual mode
    setOnline((prev) => !prev); // ✅ Toggle status
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <div className={`p-4 rounded-lg text-white text-center `}>
        {isOnline ? "🟢 You are Online" : "🔴 You are Offline"}
      </div>

      {/* ✅ Button to toggle status manually */}
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={toggleStatus}
      >
        Toggle Online/Offline
      </button>

      {/* ✅ Button to Reset to Auto Mode */}
      {manualMode && (
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setManualMode(false)}
        >
          Reset to Auto Mode
        </button>
      )}
    </div>
  );
};

export default OnlineStatus;
