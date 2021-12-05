import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const PracticeD3LibRect = () => {
 const [data, setData] = useState([10, 20, 30, 40, 50]);
 const ref = useRef(null);

 useEffect(() => {
  // selection 객체
  const svg = d3.select(ref.current);

  // 그래프 생성
  svg
   .selectAll("rect")
   .data(data)
   .join((enter) => enter.append("rect"))
   .attr("height", (value) => value)
   .attr("width", 40)
   .attr("x", (_, index) => 50 * index)
   .attr("y", (value, _) => 100 - value);
 }, [data]);

 return (
  <>
   <svg ref={ref} />
  </>
 );
};

export default PracticeD3LibRect;
