import React, { useEffect, useState, useRef } from "react";
import {
 select,
 geoNaturalEarth1,
 json,
 geoPath,
 zoom,
} from "d3";
import "../css/PracticeD3LibMap.css";

const width = 400;
const height = 300;
const projection = geoNaturalEarth1()
 .scale(width / 1.3 / Math.PI)
 .translate([width / 2, height / 2]);

const PracticeD3LibMap = () => {
 const [data, setData] = useState(null);
 const svgRef = useRef();

 useEffect(() => {
  json(
   "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
  ).then((info) => {
   setData(info);
  });
 }, []);

 useEffect(() => {
  const svg = select(svgRef.current);

  data &&
   svg
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .selectAll("path")
    .data(data.features)
    .join("path")
    .attr("class", "country")
    .attr("fill", "#69b3a2")
    .attr("d", geoPath().projection(projection))
    .style("stroke", "#fff")
    .append("title")
    .text((d) => d.properties.name);
 }, [data]);

 return (
  <>
   <svg ref={svgRef}></svg>
   <button onClick={() => {}}>+</button>
  </>
 );
};

export default PracticeD3LibMap;
