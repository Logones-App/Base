import React, { Component } from "react";
import dynamic from "next/dynamic";
import { MultiSeriesChartState } from "./dashboard.types";

const ReactEarning = dynamic(() => import("react-apexcharts"), { ssr: false });

export class Earning extends Component<{}, MultiSeriesChartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      series: [
        {
          name: "Total Orders",
          data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
        },
      ],
      options: {
        chart: { type: "bar", height: 220 },
        grid: { borderColor: "#f2f6f7" },
        colors: [
          "rgba(132, 90, 223, 0.3)",
          "rgba(132, 90, 223, 0.3)",
          "rgba(132, 90, 223, 0.3)",
          "rgba(132, 90, 223, 0.3)",
          "rgb(132, 90, 223)",
          "rgba(132, 90, 223, 0.3)",
          "#e4e7ed",
          "#e4e7ed",
          "#e4e7ed",
          "#e4e7ed",
          "#e4e7ed",
          "#e4e7ed",
        ],
        plotOptions: {
          bar: {
            columnWidth: "25%",
            distributed: true,
            borderRadius: 7,
          },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "12px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
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
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
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
        <ReactEarning
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={220}
          width={"100%"}
        />
      </div>
    );
  }
}
