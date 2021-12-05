import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const color = [
 "skyblue",
 "blue",
 "lime",
 "red",
 "yellowgreen",
 "violet",
 "blueviolet",
 "darkgreen",
 "chocolate",
 "yellow",
];

const PracticeD3LibRect = () => {
 const [data, setData] = useState([
  10, 20, 30, 40, 50, 60, 100, 70, 5, 35,
 ]);
 const ref = useRef(null);

 useEffect(() => {
  // selection 객체
  const svg = d3.select(ref.current);

  // 그래프 생성
  svg
   .selectAll("rect")
   .data(data)
   //  .join((enter) => enter.append("rect"))
   .enter()
   .append("rect")
   .attr("fill", (_, index) => color[index])
   .attr("stroke", "grey")
   .attr("stroke-width", 2)
   .attr("height", (value) => value)
   .attr("width", 25)
   .attr("x", (_, index) => 30 * index)
   .attr("y", (value) => 100 - value);
 }, [data]);

 return (
  <>
   <svg ref={ref} />
  </>
 );
};

export default PracticeD3LibRect;
