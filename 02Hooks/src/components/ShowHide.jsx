import React, { useState } from "react";
import { PiEyeClosedDuotone, PiEyeDuotone } from "react-icons/pi";

const ShowHide = () => {
  let [open, setOpen] = useState(0);

  let toggelBtn = () => {
    setOpen((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="flex items-center justify-center gap-x-4">
      <div>
        {open === 0 ? (
          <input
            className="bg-white p-2 border rounded"
            type="password"
            placeholder="Enter your password"
          />
        ) : (
          <input
            className="bg-white p-2 border rounded"
            type="text"
            placeholder="Enter your password"
          />
        )}
      </div>
      <button onClick={toggelBtn}>
        {open === 0 ? (
          <PiEyeClosedDuotone size={40} />
        ) : (
          <PiEyeDuotone size={40} />
        )}
      </button>
    </div>
  );
};

export default ShowHide;
