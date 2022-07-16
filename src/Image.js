import React from "react";
import { useSelector } from "react-redux";

const Image = () => {
  const { isLoading, isSuccess, isError, imageUrl, errorMessage } = useSelector(
    (state) => state.dog
  );
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div>
        <img
          style={{ width: "200px", height: "200px" }}
          src={imageUrl}
          alt='dog'
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>{errorMessage}</h1>
      </div>
    );
  }
};

export default Image;
