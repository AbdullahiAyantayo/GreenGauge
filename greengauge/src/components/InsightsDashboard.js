import React, { useEffect } from "react";
import * as d3 from "d3";
import "./InsightsDashboard.css";

function InsightsDashboard() {
  const data = [
    { year: 2021, biofuels: 5, solar: 8, wind: 12, biomass: 6, battery: 10 },
    { year: 2022, biofuels: 7, solar: 10, wind: 15, biomass: 9, battery: 12 },
    { year: 2023, biofuels: 10, solar: 12, wind: 18, biomass: 11, battery: 15 },
    { year: 2024, biofuels: 12, solar: 15, wind: 20, biomass: 14, battery: 18 },
    { year: 2025, biofuels: 15, solar: 18, wind: 22, biomass: 17, battery: 20 },
  ];

  useEffect(() => {
    // Remove existing SVG if any
    d3.select("#line-chart").select("svg").remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select("#line-chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const years = data.map((d) => d.year);
    const sectors = Object.keys(data[0]).filter((key) => key !== "year");

    const x = d3
      .scaleLinear()
      .domain(d3.extent(years))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d3.max(sectors.map((s) => d[s])))])
      .nice()
      .range([height, 0]);

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    svg.append("g").call(d3.axisLeft(y));

    const color = d3.scaleOrdinal(d3.schemeCategory10).domain(sectors);

    sectors.forEach((sector) => {
      const line = d3
        .line()
        .x((d) => x(d.year))
        .y((d) => y(d[sector]));

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color(sector))
        .attr("stroke-width", 2)
        .attr("d", line);
    });

    const legend = svg
      .selectAll(".legend")
      .data(sectors)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (_, i) => `translate(0,${i * 20})`);

    legend
      .append("rect")
      .attr("x", width - 20)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

    legend
      .append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text((d) => d);
  }, [data]);

  return (
    <div className="insights-dashboard">
      <h2>Insights Dashboard</h2>
      <div className="insights-text">
        <p><strong>Biofuels:</strong> ROI projected at 15% over the next 5 years.</p>
        <p><strong>Solar:</strong> ROI projected at 18% over the next 5 years.</p>
        <p><strong>Wind:</strong> ROI projected at 22% over the next 5 years.</p>
        <p><strong>Biomass:</strong> ROI projected at 17% over the next 5 years.</p>
        <p><strong>Battery:</strong> ROI projected at 20% over the next 5 years.</p>
      </div>
      <div id="line-chart"></div>
    </div>
  );
}

export default InsightsDashboard;
