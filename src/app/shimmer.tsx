import React from "react";

const Shimmer = () => {
  return Array(7)
    .fill(0)
    .map((_, i: number) => (
      <div key={`shimmer-${i}`}>
        <div className="border border-gray-300 rounded-md p-2 shadow-md bg-gray-100 h-24 w-[150px]">
          <p className="w-1.5 h-2"></p>
          <div className="w-3xl h-12" />
        </div>
      </div>
    ));
};

export default Shimmer;
