import React, { useRef, useEffect, useState } from "react";
import { select, line, curveBasis } from "d3";

const PracticeD3LibLine = () => {
 const [data, setData] = useState([
  25, 30, 45, 60, 20, 65, 75,
 ]);
 const svgRef = useRef();
 useEffect(() => {
  const svg = select(svgRef.current);
  // 여기서 Line 은 함수가 된다. 데이터에 기반해 path 엘리먼트의 d 속성을 생성한다.
  const Line = line()
   .x((value, index) => index * 50)
   .y((value) => 150 - value)
   .curve(curveBasis);
  // 여기서 data([data]) 와 같이 array 에 담는 이유는 각 데이터마다의 path 를 생성할 것이 아니기 때문이다.
  // 하나의 path 에서 data 들을 그려낼 것이기 때문에 data 를 array 에 담아서 전달한다.
  // join("path") 는 각 데이터 entry 마다의 path 생성.
  svg
   .selectAll("path")
   .data([data])
   .join("path")
   // 여기서 value 는 data 를 가져와서 쓰게 된다.
   .attr("d", (value) => Line(value))
   .attr("fill", "none")
   .attr("stroke", "blue");
 }, [data]);
 return (
  <>
   <svg ref={svgRef} />
   <button
    style={{
     height: "30px",
     width: "50px",
    }}
    onClick={() => setData(data.map((value) => value + 5))}
   >
    +5
   </button>
   <button
    style={{
     height: "30px",
     width: "50px",
    }}
    onClick={() => setData(data.map((value) => value - 5))}
   >
    -5
   </button>
   <button
    style={{
     height: "30px",
     width: "150px",
    }}
    onClick={() =>
     setData(data.filter((value) => value > 35))
    }
   >
    35이하만 표시
   </button>
   <button
    style={{
     height: "30px",
     width: "70px",
    }}
    onClick={() => setData([25, 30, 45, 60, 20, 65, 75])}
   >
    초기화
   </button>
  </>
 );
};

export default PracticeD3LibLine;
