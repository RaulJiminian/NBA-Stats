import React, { useEffect, useRef } from "react";
import { select, scaleBand, scaleLinear, max, axisBottom } from "d3";

function BarGraphPoints({playerAverages}) {
  const svgRef = useRef();
  
  playerAverages = playerAverages.sort((a, b) => a.year - b.year);

  useEffect(() => {
    const MARGINS = { top: 20, bottom: 10 }
    // Change width based on screen size
    const CHART_WIDTH = 600;
    const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

    const chartContainer = select(svgRef.current)
      .attr("width", CHART_WIDTH)
      .attr("height", CHART_HEIGHT + MARGINS.top + MARGINS.bottom);

    const chart = chartContainer.append("g");

    const xScale = scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
    xScale.domain(playerAverages?.map((d) => d.year));

    const yScale = scaleLinear().range([CHART_HEIGHT, 0]);
    yScale.domain([0, max(playerAverages, (d) => d.stats[0].points) + 5]);

    chart.append("g").call(axisBottom(xScale).tickSizeOuter(0)).attr('transform', `translate(0, ${CHART_HEIGHT})`).attr('color', '#3f51b5');

    chart
      .selectAll(".bar")
      .data(playerAverages)
      ?.join("rect")
      .classed("bar", true)
      .attr("width", xScale.bandwidth())
      ?.attr("height", (data) => CHART_HEIGHT - yScale(data.stats[0].points))
      .attr("x", (data) => xScale(data.year))
      .attr("y", (data) => yScale(data.stats[0].points));

    chart
      .selectAll(".label")
      .data(playerAverages)
      ?.join("text")
      .text((data) => data.stats[0].points)
      .attr("x", data => xScale(data.year) + xScale.bandwidth() / 2)
      .attr("y", data => yScale(data.stats[0].points) - 20)
      .attr('text-anchor', 'middle')
      .classed('label', true);
  }, []);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
}

export default BarGraphPoints;
