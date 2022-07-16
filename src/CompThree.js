import React from "react";
import { useSelector } from "react-redux";
const CompThree = () => {
  const { counter } = useSelector((state) => state.counter);
  return (
    <div>
      <h2>{`Current counter is ${counter}`}</h2>
    </div>
  );
};

export default CompThree;
