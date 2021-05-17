import { useCallback } from "react";
import { PinChartWrapper, ChartTitle, Bar, Rect, Text } from "./style";
import { ConsolidatedWeather } from "../../assets/types";
import { round as _round } from "lodash";

interface PieChartProps {
  dataList: ConsolidatedWeather[];
}
export default function PieChart({ dataList }: PieChartProps) {
  const renderBar = useCallback((list: ConsolidatedWeather[]) => {
    const barHeight = 25;
    const getWidth = (x: number) => _round(x * 10, 2);
    const getVal = (x: number) => _round(x, 1);
    return list.map(({ max_temp, min_temp, applicable_date, id }, idx) => {
      const date = applicable_date.slice(5).replace("-", "/");
      const maxWidth = getWidth(max_temp);
      const minWidth = getWidth(min_temp);
      const max = getVal(max_temp);
      const min = getVal(min_temp);
      const barY = idx * 35;
      const textY = barY + barHeight / 2;
      const dy = ".35em";
      const x = 55;
      return (
        <Bar key={id}>
          <Rect
            x={x}
            type="max"
            height={barHeight}
            width={maxWidth + 5}
            y={barY}
          />
          <Text x={minWidth + x + 2.5} y={textY} dy={dy}>
            {max}
          </Text>
          <Rect x={x} type="min" height={barHeight} width={minWidth} y={barY} />
          <Text x={x + 2.5} y={textY} dy={dy}>
            {min}
          </Text>
          <Text x={0} y={textY} dy={dy} type="date">
            {date}
          </Text>
        </Bar>
      );
    });
  }, []);
  return (
    <PinChartWrapper>
      <ChartTitle>max & min temperature</ChartTitle>
      <svg width="420" role="pie-chart">
        {dataList.length > 0 && renderBar(dataList)}
      </svg>
    </PinChartWrapper>
  );
}
