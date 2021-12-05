import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const dateData = [
 { d: "2021-12-01", v: 93.24 },
 { d: "2021-12-02", v: 93 },
 { d: "2021-12-03", v: 95.54 },
];

const PracticeD3Lib = () => {
 const [data, setData] = useState([10, 20, 30, 40, 50]);
 const ref = useRef(null);

 useEffect(() => {
  // selection 객체
  const svg = d3.select(ref.current);

  // 그래프 생성
  svg
   .selectAll("circle")
   .data(data)
   .join(
    (enter) => enter.append("circle"),
    (update) => update.attr("class", "updated"),
    (exit) => exit.remove()
   )
   .attr("r", (value) => value)
   .attr("cx", (value) => value * 2)
   .attr("cy", (value) => value * 2)
   .attr("stroke", "red");
 }, [data]);

 return (
  <>
   <svg ref={ref} />
   <button
    onClick={() => {
     setData(data.map((el) => el + 5));
    }}
   >
    increase + 5
   </button>
   <button
    onClick={() => {
     setData(data.filter((el) => el > 35));
    }}
   >
    filter circle r should gt 35
   </button>
   <button
    onClick={() => {
     setData([10, 20, 30, 40, 50]);
    }}
   >
    init data
   </button>
  </>
 );
};

export default PracticeD3Lib;
