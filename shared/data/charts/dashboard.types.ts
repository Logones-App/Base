// Types for dashboard charts (ApexCharts)
import { ApexOptions } from "apexcharts";

// Generic chart state for simple series/options
export interface ChartState {
  series: any;
  options: ApexOptions;
}

// For donut/pie charts with labels
export interface DonutChartState {
  series: number[];
  options: ApexOptions & { labels?: string[] };
}

// For sparkline charts (Totalcustomers, Totalrevenue, etc.)
export interface SparkChartState {
  series: Array<{ name: string; data: number[] }>;
  options: ApexOptions;
}

// For multi-series (Revenueanalytics, Profitearned, Earning, etc.)
export interface MultiSeriesChartState {
  series: Array<{ name: string; data: number[] | { x: string | Date; y: number }[]; type?: string }>; 
  options: ApexOptions;
}

// For candlestick charts (CryptoStatistics)
export interface CandlestickChartState {
  series: Array<{ data: Array<{ x: Date; y: [number, number, number, number] }> }>;
  options: ApexOptions;
}

// For charts with dynamic import props
export interface ChartComponentProps {
  options: ApexOptions;
  series: any;
  type: string;
  height?: number | string;
  width?: number | string;
  [key: string]: any;
}
