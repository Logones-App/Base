import React, { Component } from "react";
import dynamic from "next/dynamic";
import { MultiSeriesChartState } from "./dashboard.types";

const ReactSalesoverview = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export class Salesoverview extends Component<{}, MultiSeriesChartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      series: [
        {
          name: "Sales",
          data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        },
        {
          name: "OPEX Ratio",
          data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
        },
        {
          name: "General & Admin",
          data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
        },
        {
          name: "Marketing",
          data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
        },
      ],
      options: {
        chart: { stacked: true, type: "bar", height: 325 },
        grid: { borderColor: "#f5f4f4", strokeDashArray: 5 },
        colors: [
          "rgb(132, 90, 223)",
          "rgba(132, 90, 223, 0.6)",
          "rgba(132, 90, 223, 0.3)",
          "#ebeff5",
        ],
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                { from: -100, to: -46, color: "#ebeff5" },
                { from: -45, to: 0, color: "#ebeff5" },
              ],
            },
            columnWidth: "20%",
          },
        },
        dataLabels: { enabled: false },
        legend: { show: true, position: "top" },
        yaxis: {
          title: {
            text: "Growth",
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            formatter: function (y: number) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
          axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          labels: { rotate: -90 },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <ReactSalesoverview
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={325}
          width={"100%"}
        />
      </div>
    );
  }
}
