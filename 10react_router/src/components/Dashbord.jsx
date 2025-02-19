import React from "react";
import { Outlet } from "react-router";

const Dashbord = () => {
  return (
    <Outlet>
      <div>This is Dashboard</div>
    </Outlet>
  );
};

export default Dashbord;
