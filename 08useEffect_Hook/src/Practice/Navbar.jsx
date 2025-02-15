import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  useEffect(() => {
    alert("hey I will run on every render");
  });
  useEffect(() => {
    alert("hey I run becase color was changed");
  }, [color]);

  useEffect(() => {
    alert("Hey! i was mounted on your file");

    return () => {
      alert("component was unmounted");
    };
  }, []);

  return (
    <div className="h-14 w-full ">
      <h1 className="text-xl font-semibold">Navbar {color} is color</h1>
    </div>
  );
};

export default Navbar;
