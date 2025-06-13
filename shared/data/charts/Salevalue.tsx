import React, { Component } from "react";
import dynamic from "next/dynamic";
import { DonutChartState } from "./dashboard.types";

const ReactSalevalue = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export class Salevalue extends Component<{}, DonutChartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      series: [60],
      options: {
        chart: {
          height: 225,
          type: "radialBar",
        },
        colors: ["rgb(132, 90, 223)"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 2,
                opacity: 0.15,
              },
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#4b9bfa",
                fontSize: "16px",
                show: false,
              },
              value: {
                color: "#4b9bfa",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Cart"],
      },
    };
  }

  render() {
    return (
      <div>
        <ReactSalevalue
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={230}
          width={"100%"}
        />
      </div>
    );
  }
}
