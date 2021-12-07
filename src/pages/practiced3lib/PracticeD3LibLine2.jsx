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

// 차트의 높이와 너비
const width = 300;
const height = 300;

// 차트의 상하좌우의 여백
const margin = { top: 40, right: 40, bottom: 40, left: 40 };

// 차트의 데이터
// X축 - date, Y 축 - value
const makeRandomDate = () => {
 const arr = [];
 for (let i = 0; i < 365; i++) {
  arr.push({
   date: new Date(`2021-01-01` + i),
   value: Math.random() * 50,
  });
 }
 return arr;
};
const data = makeRandomDate();

const PracticeD3LibLine2 = () => {
 const ref = useRef();

 useEffect(() => {
  // ref 속성으로  DOM 지정
  const svg = select(ref.current);

  // 시간과 관련한 scale 을 리턴한다.
  // 데이터가 시간 관련된 데이터이기 때문에 scaleTime 을 사용한다.
  const x = scaleTime()
   // domain 범위로 들어온 값을 range 범위값으로 치환한다.
   // extent 메소드는 최소값과 최대값을 반환한다.
   // data 배열을 받아서 date의 값중 최대값과 최소값을 구한다.
   .domain(extent(data, (d) => d.date))
   // 치환될 범위를 지정한다.
   .range([margin.left, width - margin.right]);

  // 선형 scale 을 반환한다.
  // 라인 그래프 이기 때문에 scaleLiner 를 사용한다.
  const y = scaleLinear()
   // domain 범위로 들어온 값을 range 범위로 치환한다.
   // 최소값을 0으로, 최대값을 value 값 중 가장 높은 값으로 선택한다.
   .domain([0, max(data, (d) => d.value)])
   // 차트의 축을 잡아주는 메서드 "아주 나이스"
   .nice()
   // 치환될 범위를 지정한다.
   // svg 는 y축이 상단에서 시작하기 때문에 높은 수에서 낮은 수를 뺀다.
   .range([height - margin.bottom, margin.top]);

  // x축을 정의하는 함수
  // call 함수 호출시 인자가 전달된다.
  const xAxis = (g) =>
   g
    .attr(
     "transform",
     // translate 는 x, y 좌표로 움직인다.
     `translate(0,${height - margin.bottom})`
    )
    .call(
     // 아래쪽의 수평축을 만드는데 사용하는 메서드
     // 인자로 수평 scale을 전달한다. - 여기서는 x이다.
     axisBottom(x)
      // 축의 눈금을 제어하는데 사용한다. 인수로 개수를 지정한다.
      .ticks(width / 40)
      // 축의 눈금의 크기, 도메인 경로의 정사각형 끝 길이를 제어
      .tickSizeOuter(0)
    );

  // y축을 정의하는 함수
  // call 함수 호출시 인자가 전달된다.
  const yAxis = (g) =>
   g
    // translate 는 x, y 좌표로 움직인다.
    .attr("transform", `translate(${margin.left},0)`)
    // 왼쪽 세로 축을 만드는데 사용되는 메서드
    // 인자로 수직 scale 을 전달한다. - 여기서는 y이다.
    .call(axisLeft(y))
    .call((g) => g.select(".domain").remove())
    .call((g) => {
     return (
      g
       // tick 의 마지막의 값의 text 를 복제
       .select(".tick:last-of-type text")
       .clone()
       .attr("x", 3)
       .attr("text-anchor", "start")
       .attr("font-weight", "bold")
       .attr("font-size", "20px")
       .text("Y축")
     );
    });

  // 데이터를 선으로 표현하기 위한 메서드
  const svgLine = line()
   // value의 값이 Number 가 아닐 경우 선이 끊겨서 출력된다.
   .defined((d) => !isNaN(d.value))
   // x 축의 값으로 x 함수에 date 값을 전달한다.
   .x((d) => x(d.date))
   // y 축의 값으로 y 함수에 value 값을 전달한다.
   .y((d) => y(d.value))
   // 곡선 형태는 완만한 커브형태
   .curve(curveBasis);

  svg
   .select("div")
   .append("svg")
   .style("width", width)
   .style("height", height);

  svg
   // 선이될 path 엘리먼트 추가
   .append("path")
   // datum - 단일 데이터를 지정할 때 사용
   // 라인의 단일 요소 값으로 data를 전달한다.
   // data - 데이터 세트를 지정할 때 사용
   .datum(data)
   .attr("fill", "none")
   .attr("stroke", "steelblue")
   .attr("stroke-width", 1)
   .attr("stroke-linejoin", "round")
   .attr("stroke-linecap", "round")
   .attr("d", svgLine);

  // x축과 y축 구현
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);

  // 선택항목의 첫번째 요소를 반환하는 데 사용하는 메소드
  // 없을 경우 null 이 반환된다.
  svg.node();
 }, []);

 return (
  <svg ref={ref} style={{ height: 300, width: 300 }} />
 );
};

export default PracticeD3LibLine2;
