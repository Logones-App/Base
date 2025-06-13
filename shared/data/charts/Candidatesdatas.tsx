import React, { Component } from "react";
import dynamic from "next/dynamic";
import { DonutChartState } from "./dashboard.types";

const ReactCandidatesdatas = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export class Candidatesdatas extends Component<{}, DonutChartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      series: [32, 27, 25, 16],
      options: {
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            },
          },
          type: "donut",
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          colors: ["#fff"],
          width: 0,
          dashArray: 0,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "85%",
              labels: {
                name: {
                  show: true,
                  fontSize: "20px",
                  color: "#495057",
                  offsetY: -4,
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  color: undefined,
                  offsetY: 8,
                  formatter: function (val: string) {
                    return val + "%";
                  },
                },
              },
            },
          },
        },
        colors: [
          "rgb(132, 90, 223)",
          "rgb(35, 183, 229)",
          "rgb(245, 184, 73)",
          "rgb(38, 191, 148)",
        ],
      },
    };
  }

  render() {
    return (
      <ReactCandidatesdatas
        className="chartjs-chart  p-4"
        options={this.state.options}
        series={this.state.series}
        type="donut"
        height={223}
        width={"90%"}
      />
    );
  }
}
