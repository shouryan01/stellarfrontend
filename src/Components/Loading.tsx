import React from "react";
import loading from "../Assets/Loading.svg";

const Loading = () => (
  <div className="bg-white flex justify-center h-screen absolute inset-0 w-screen">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
