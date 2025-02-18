import React from "react";
import { useParams } from "react-router";

const Param = () => {
  const { id } = useParams();

  return (
    <div>
      <h2> Param: {id}</h2>
    </div>
  );
};

export default Param;
