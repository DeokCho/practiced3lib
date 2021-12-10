import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const PracticeD3LibLine3 = () => {
 const margin = {
  left: 100,
  right: 100,
  top: 100,
  bottom: 100,
 };
 const [data, setData] = useState([
  { d: "2012", v: 10 },
  { d: "2013", v: 20 },
  { d: "2014", v: 30 },
  { d: "2015", v: 40 },
  { d: "2016", v: 50 },
  { d: "2017", v: 20 },
  { d: "2018", v: 10 },
  { d: "2019", v: 40 },
  { d: "2020", v: 90 },
  { d: "2021", v: 100 },
 ]);
 const ref = useRef();
 useEffect(() => {
  const svg = d3.select(ref.current);

  const xScale = d3
   .scaleLinear()
   .domain([0, data.length * 30])
   .range([0, 100]);
  const xAxis = d3.axisBottom().scale(xScale);

  const _line = d3
   .line()
   .x((_, i) => i * 30)
   .y(({ v }) => 100 - v)
   .curve(d3.curveLinear);

  svg
   .select("div")
   .selectAll((g) => g.select("svg").remove());

  svg
   .selectAll("path")
   .data([data])
   .join("path")

   .attr("d", (v) => _line(v))
   .attr("fill", "none")
   .attr("stroke", "blue")
   .attr("width", 1000)
   .attr("height", 500);
 }, [data]);
 return (
  <div>
   <svg ref={ref} />
  </div>
 );
};

export default PracticeD3LibLine3;
