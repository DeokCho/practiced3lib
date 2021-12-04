import React from "react";

const PracticeSvg = () => {
 return (
  <div>
   <svg width="400" height="180">
    <rect
     x="50"
     y="20"
     rx="20"
     ry="20"
     width="150"
     height="150"
     style={{
      fill: "red",
      stroke: "black",
      strokeWidth: 5,
      opacity: 0.5,
     }}
     onClick={() => alert("In SVG")}
    />
   </svg>
  </div>
 );
};

export default PracticeSvg;
