import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const width = 200;
const height = 200;
const outerRadius = Math.min(width, height) / 2;
const innerRadius = 60;

const dataDefinition = [
 { name: "A", value: Math.random() * 100 },
 { name: "B", value: Math.random() * 100 },
 { name: "C", value: Math.random() * 100 },
 { name: "D", value: Math.random() * 100 },
 { name: "E", value: Math.random() * 100 },
];

const createPie = d3.pie().value((d) => d.value);
const createArc = d3
 .arc()
 .innerRadius(innerRadius)
 .outerRadius(outerRadius);
const colors = d3.scaleOrdinal(d3.schemeCategory10);
const format = d3.format(".2f");

const PracticeD3LibPie = () => {
 const [data, setData] = useState({ name: "", value: 0 });

 const svgRef = useRef();

 useEffect(() => {
  setData(createPie(dataDefinition));
  const svg = d3.select(svgRef.current);
  const svgWithData = svg.selectAll("g.arc").data(data);

  svgWithData.exit().remove();

  const groupWithUpdate = svgWithData
   .enter()
   .append("g")
   .attr("class", "arc");

  const path = groupWithUpdate
   .append("path")
   .merge(svgWithData.select("path.arc"));

  path
   .attr("class", "arc")
   .attr("d", createArc)
   .attr("fill", (d, i) => colors(i));

  const text = groupWithUpdate
   .append("text")
   .merge(svgWithData.select("text"));

  text
   .attr("text-anchor", "middle")
   .attr("alignment-baseline", "middle")
   .attr(
    "transform",
    (d) => `translate(${createArc.centroid(d)})`
   )
   .style("fill", "white")
   .style("font-size", 10)
   .text((d) => format(d.value));

  svg
   .selectAll("pie")
   .attr("width", width)
   .attr("height", height)
   .attr(
    "transform",
    `translate(${outerRadius},${innerRadius})`
   )
   .data([data]);
 }, [data]);
 return (
  <>
   <svg width={width} height={height}>
    <g
     ref={svgRef}
     transform={`translate(${outerRadius} ${outerRadius})`}
    />
   </svg>
  </>
 );
};

export default PracticeD3LibPie;
