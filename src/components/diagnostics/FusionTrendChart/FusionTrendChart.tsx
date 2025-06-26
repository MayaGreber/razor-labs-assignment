import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DiagnosticEntry } from "../../../data/mockData";
import { getMostSeverePerDay } from "../../../utils/diagnosticUtils";
import { formatDateToDDMMYYYY } from "../../../utils/dateUtils";

interface FusionTrendChartProps {
  data: DiagnosticEntry[];
  onFirstDateChange?: (dateText: string) => void;
}

const FusionTrendChart: React.FC<FusionTrendChartProps> = ({
  data,
  onFirstDateChange,
}) => {
  const severityMap: Record<string, number> = {
    critical: 0,
    alarm: 1,
    healthy: 2,
  };

  const MAX_POINTS = 20;

  const mostSeverePerDay = getMostSeverePerDay(data);
  const filteredData = mostSeverePerDay.slice(-MAX_POINTS);

  const getColorBySeverity = (severityNum: number): string => {
    switch (severityNum) {
      case 0:
        return "#e63462";
      case 1:
        return "#ff891b";
      case 2:
        return "#0ead69";
      default:
        return "#d8dce1";
    }
  };

  const seriesData = filteredData.map((entry) => {
    const severityNum = severityMap[entry.severity] ?? 0;
    return {
      x: new Date(entry.date).getTime(),
      y: severityNum,
      color: getColorBySeverity(severityNum),
      type: entry.type,
      marker: {
        enabled: true,
        fillColor: getColorBySeverity(severityNum),
      },
    };
  });

  const firstDateTimestamp = seriesData[0]?.x ?? null;

  const firstDateFormatted = firstDateTimestamp
    ? formatDateToDDMMYYYY(firstDateTimestamp)
    : "";

  useEffect(() => {
    if (onFirstDateChange) {
      onFirstDateChange(firstDateFormatted);
    }
  }, [firstDateFormatted, onFirstDateChange]);

  const lastDatePlusOneDay =
    seriesData[seriesData.length - 1]?.x + 12 * 60 * 60 * 1000;

  const options: Highcharts.Options = {
    chart: {
      type: "line",
      height: 150,
      marginRight: 45,
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "datetime",
      title: { text: "" },
      lineWidth: 0,
      tickLength: 0,
      gridLineWidth: 0,
      tickPositions: seriesData.map((point) => point.x),
      labels: {
        formatter: function () {
          if (typeof this.value === "number") {
            return Highcharts.dateFormat("%b %e", this.value);
          }
          return "";
        },
        align: "left",
        style: {
          color: "#55687d",
          fontSize: "12px",
        },
      },
      plotLines: [
        ...seriesData.map<Highcharts.XAxisPlotLinesOptions>((point) => ({
          value: point.x,
          color: "#999",
          dashStyle: "Dash",
          width: 1,
          zIndex: 3,
        })),
        {
          value: lastDatePlusOneDay,
          color: "#000",
          dashStyle: "Dash",
          width: 1,
          zIndex: 3,
        },
      ],
    },
    yAxis: {
      title: { text: "" },
      labels: { enabled: false },
      gridLineWidth: 0,
      lineWidth: 0,
      tickLength: 0,
      min: 0,
      max: 2,
    },
    tooltip: {
      useHTML: true,
      formatter: function (this: any) {
        const type = this.point.type || "";
        const severityLabel = ["Critical", "Alarm", "Healthy"][this.y];
        return `<b>${severityLabel}</b><br/><span style="color: #888;">Type: ${type}</span>`; 
      },
    },
    series: [
      {
        name: "",
        data: seriesData,
        type: "line",
        color: "#d8dce1",
        lineWidth: 1,
        marker: {
          radius: 5,
          lineWidth: 3,
        },
      },
    ],
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default FusionTrendChart; 