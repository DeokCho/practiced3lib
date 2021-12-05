import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const PracticeD3Lib = () => {
 const [data, setData] = useState([10, 20, 30, 40, 50]);
 const [spareData, setSpareData] = useState([]);
 const [toggle, setToggle] = useState(false);
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
   .attr("stroke", "blue")
   .attr("stroke-width", 3)
   .attr("fill", "green");
 }, [data]);

 return (
  <>
   <svg ref={ref} />
   <button
    onClick={() => {
     setData(data.map((el) => el + 5));
    }}
   >
    +5
   </button>
   <button
    onClick={() => {
     setData(data.map((el) => el - 5));
    }}
   >
    -5
   </button>
   <button
    style={{ backgroundColor: toggle ? "red" : "" }}
    onClick={() => {
     setToggle(!toggle);
     if (toggle) {
      setData(spareData);
     } else {
      setSpareData(data);
      setData(data.filter((el) => el > 35));
     }
    }}
   >
    35 이상
   </button>
   <button
    onClick={() => {
     setToggle(false);
     setData([10, 20, 30, 40, 50]);
     setSpareData([]);
    }}
   >
    초기화
   </button>
  </>
 );
};

export default PracticeD3Lib;
