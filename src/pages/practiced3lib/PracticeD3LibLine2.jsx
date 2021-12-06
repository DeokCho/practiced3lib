import React, { useEffect, useRef } from "react";
import {
 select,
 scaleTime,
 extent,
 scaleLinear,
 max,
 axisBottom,
 axisLeft,
 line,
 curveBasis,
} from "d3";

const width = 500;
const height = 500;
const margin = { top: 40, right: 40, bottom: 40, left: 40 };
const data = [
 { date: new Date("2021-01-01"), value: 5 },
 { date: new Date("2021-01-02"), value: 15 },
 { date: new Date("2021-01-03"), value: 25 },
 { date: new Date("2021-01-04"), value: 20 },
 { date: new Date("2021-01-05"), value: 10 },
 { date: new Date("2021-01-06"), value: 40 },
 { date: new Date("2021-01-07"), value: 65 },
 { date: new Date("2021-01-08"), value: 25 },
];

const PracticeD3LibLine2 = () => {
 const ref = useRef();

 useEffect(() => {
  const svg = select(ref.current);

  const x = scaleTime()
   .domain(extent(data, (d) => d.date))
   .range([margin.left, width - margin.right]);

  const y = scaleLinear()
   .domain([0, max(data, (d) => d.value)])
   .nice()
   .range([height - margin.bottom, margin.top]);

  const xAxis = (g) =>
   g
    .attr(
     "transform",
     `translate(0,${height - margin.bottom})`
    )
    .call(
     axisBottom(x)
      .ticks(width / 90)
      .tickSizeOuter(0)
    );

  const yAxis = (g) =>
   g
    .attr("transform", `translate(${margin.left},0)`)
    .call(axisLeft(y))
    .call((g) => g.select(".domain").remove())
    .call((g) => {
     return g
      .select(".tick:last-of-type text")
      .clone()
      .attr("x", 3)
      .attr("text-anchor", "start")
      .attr("font-weight", "bold")
      .attr("font-size", "20px")
      .text("Y축");
    });

  const svgLine = line()
   .defined((d) => !isNaN(d.value))
   .x((d) => x(d.date))
   .y((d) => y(d.value))
   .curve(curveBasis);

  svg
   .select("div")
   .append("svg")
   .style("width", width)
   .style("height", height);

  svg
   .append("path")
   .datum(data)
   .attr("fill", "none")
   .attr("stroke", "steelblue")
   .attr("stroke-width", 1)
   .attr("stroke-linejoin", "round")
   .attr("stroke-linecap", "round")
   .attr("d", svgLine);

  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();
 }, []);

 return (
  <svg ref={ref} style={{ height: 500, width: 500 }} />
 );
};

export default PracticeD3LibLine2;
