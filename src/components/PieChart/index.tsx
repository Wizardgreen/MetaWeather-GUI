import { useCallback } from "react";
import {
  PinChartWrapper,
  ChartTitle,
  Circle,
  SVGWrapper,
  SVG,
  DesListItem,
  Cube,
  DesList,
} from "./style";
import { ConsolidatedWeather } from "../../assets/types";
import { round as _round } from "lodash";

interface PieChartProps {
  dataList: ConsolidatedWeather[];
}
export default function PieChart({ dataList }: PieChartProps) {
  const renderPie = useCallback((list: ConsolidatedWeather[]) => {
    const sumHumidity = list.reduce(
      (acc, { humidity }) => (acc += humidity),
      0
    );

    let prev = 0;
    return list.map(({ humidity, id }) => {
      const val = 101 - prev;
      prev += 100 * (humidity / sumHumidity);
      return <Circle strokeDasharray={`${val} 100`} key={id} />;
    });
  }, []);
  const renderDes = useCallback((list: ConsolidatedWeather[]) => {
    const dateFormat = (x: string) => x.slice(5).replace("-", "/");
    return list.map(({ id, applicable_date, humidity }) => (
      <DesListItem key={id}>
        <Cube /> <span>{`${dateFormat(applicable_date)} - ${humidity}%`}</span>
      </DesListItem>
    ));
  }, []);

  return (
    <PinChartWrapper>
      <ChartTitle>humidity</ChartTitle>
      <SVGWrapper>
        <SVG viewBox="0 0 32 32">{renderPie(dataList)}</SVG>
        <DesList>{renderDes(dataList)}</DesList>
      </SVGWrapper>
    </PinChartWrapper>
  );
}
