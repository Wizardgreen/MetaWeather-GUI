import { useCallback } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { ForecastListWrapper, ForecastCard, Day, DateText } from "./style";
import { ConsolidatedWeather } from "../../assets/types";

interface ForecastListProps {
  loading: boolean;
  dataList: ConsolidatedWeather[];
}

const DayMap = {
  "1": "mon",
  "2": "tue",
  "3": "wen",
  "4": "thu",
  "5": "fri",
  "6": "sat",
  "7": "sun",
};

export default function ForecastList({ dataList, loading }: ForecastListProps) {
  const generateIconUrl = useCallback((abbr): string => {
    const prefix = "https://www.metaweather.com/static/img/weather/png/64/";
    return `${prefix}${abbr}.png`;
  }, []);

  const renderList = useCallback((list: ConsolidatedWeather[]) => {
    return list.map((data) => {
      const dayKey = new Date(data.applicable_date)
        .getDay()
        .toString() as keyof typeof DayMap;
      const date = data.applicable_date.slice(5).replace("-", "/");
      return (
        <ForecastCard key={data.id}>
          <img
            src={generateIconUrl(data.weather_state_abbr)}
            alt="weather-icon"
          />
          <Day>{DayMap[dayKey]}</Day>
          <DateText>{date}</DateText>
        </ForecastCard>
      );
    });
  }, []);
  return (
    <ForecastListWrapper>
      {loading && <LoadingSpinner />}
      {!loading && dataList.length !== 0 && renderList(dataList)}
    </ForecastListWrapper>
  );
}
