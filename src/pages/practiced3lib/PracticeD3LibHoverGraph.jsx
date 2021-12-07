import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const PracticeD3LibHoverGraph = () => {
 const [data, setData] = useState([1, 2, 3, 4, 5]);
 const ref = useRef();

 useEffect(() => {
  const svg = d3.select(ref.current);

  svg
   .append("rect")
   .attr("width", 30)
   .attr("height", 30)
   .attr("x", 50)
   .attr("y", 50);
 }, [data]);

 return (
  <div>
   <svg ref={ref} />
  </div>
 );
};

export default PracticeD3LibHoverGraph;
