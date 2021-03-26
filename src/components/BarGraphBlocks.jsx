import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { select, scaleBand, scaleLinear, max, axisBottom } from "d3";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

export default function BarGraphBlocks({ playerAverages }) {
  const [windowWidth] = useWindowSize();
  const svgRef = useRef();
  
  playerAverages = playerAverages.sort((a, b) => a.year - b.year);
  
  useEffect(() => {
    const MARGINS = { topXL: 30, topL: 20, topM: 20, topS: 10, bottomXL: 15, bottomL: 10, bottomM: 10, bottomS: 5 };

    let CHART_WIDTH = windowWidth > 1400 ? 900 : windowWidth > 700 ? 600 : windowWidth > 350 ? 300 : 150;
    let CHART_HEIGHT = windowWidth > 1400 ? (600 - MARGINS.topXL - MARGINS.bottomXL) : windowWidth > 700 ? (400 - MARGINS.topL - MARGINS.bottomL) : windowWidth > 350 ? (300 - MARGINS.topM - MARGINS.bottomM) : (100 - MARGINS.topS - MARGINS.bottomS);
    let tickFontSize = windowWidth > 700 ? "16px" : windowWidth > 350 ? "12px" : "7px";
    let labelFontSize = windowWidth > 700 ? "14px" : windowWidth > 350 ? "10px" : "6px";
    
    const chartContainer = select(svgRef.current);

    chartContainer.selectAll("*").remove();

    chartContainer
      .attr("width", CHART_WIDTH)
      .attr("height", CHART_HEIGHT + MARGINS.topL + MARGINS.bottomL);
    
    const chart = chartContainer.append("g");

    const xScale = scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
    xScale.domain(playerAverages?.map((d) => d.year));

    const yScale = scaleLinear().range([CHART_HEIGHT, 0]);
    yScale.domain([0, max(playerAverages, (d) => d.stats[0].blocks) + 5]);

    chart.append("g").call(axisBottom(xScale).tickSizeOuter(0)).attr('transform', `translate(0, ${CHART_HEIGHT})`).attr('color', '#3f51b5').attr('font-size', `${tickFontSize}`);

    chart
      .selectAll(".bar")
      .data(playerAverages)
      .join("rect")
      .classed("bar", true)
      .attr("width", xScale.bandwidth())
      .attr("height", (data) => CHART_HEIGHT - yScale(data.stats[0].blocks))
      .attr("x", (data) => xScale(data.year))
      .attr("y", (data) => yScale(data.stats[0].blocks));

    chart
      .selectAll(".label")
      .data(playerAverages)
      .join("text")
      .text((data) => data.stats[0].blocks)
      .attr("x", data => xScale(data.year) + xScale.bandwidth() / 2)
      .attr("y", data => yScale(data.stats[0].blocks) - 5)
      .attr('text-anchor', 'middle')
      .attr('font-size', `${labelFontSize}`)
      .classed('label', true);
    
  }, [windowWidth, playerAverages]);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
}
