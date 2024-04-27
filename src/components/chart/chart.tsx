"use client";

import { Chart, ChartItem } from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function SampleChart() {
  const isInitiated = useRef<boolean>(false);

  useEffect(() => {
    initiateChart();
  }, []);

  const initiateChart = () => {
    const data = [
      { year: 2010, count: 100000 },
      { year: 2011, count: 120000 },
      { year: 2012, count: 102000 },
      { year: 2013, count: 123420 },
      { year: 2014, count: 70000 },
      { year: 2015, count: 40000 },
      { year: 2016, count: 145000 },
    ];

    const chartElement = document.getElementById("acquisitions") as ChartItem;
    if (isInitiated.current) return;

    new Chart(chartElement, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Visits per Year",
            data: data.map((row) => row.count),
            borderColor: "#fed7aa",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderWidth: 4,
            borderRadius: 50,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Blog Visits",
          },
        },
      },
    });

    isInitiated.current = true;
  };

  return (
    <div style={{ width: "100%" }}>
      <canvas id="acquisitions"></canvas>
    </div>
  );
}
