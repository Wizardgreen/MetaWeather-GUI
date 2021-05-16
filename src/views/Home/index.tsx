import { useEffect, useState, useCallback } from "react";
import { getLocationList, getRecentForecast } from "../../api/index";
import Input from "../../components/Input";
import Title from "../../components/Title";
import PageWrapper from "../../components/PageWrapper";
import LoadingSpinner from "../../components/LoadingSpinner";
import _debounce from "lodash/debounce";
import { MainContentWrapper } from "./style";
import { Location, LocationWithForecast } from "../../assets/types";

export default function Home() {
  const [searchKey, setSearchKey] = useState<string>("");
  const [locationList, setLocationList] = useState<Location[]>([]);
  const [locationLoading, setLocationLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<LocationWithForecast | {}>({});
  const [weatherLoading, setWeatherLoading] = useState<boolean>(false);
  const [targetWOEID, setTargetWOEID] = useState<number | null>(null);

  const handleInput = (value: string): void => {
    setSearchKey(value);
  };

  const handleSelect = (location: Location): void => {
    const { woeid } = location;
    setTargetWOEID(woeid);
  };

  const queryLocation = useCallback(
    _debounce(
      (query: string) => {
        if (query.length === 0) {
          setLocationList([]);
          setLocationLoading(false);
          return;
        }
        return getLocationList(query)
          .then(({ data }) => {
            if (data.length > 0) setLocationList(data);
            setLocationLoading(false);
          })
          .catch(() => setLocationLoading(false));
      },
      500,
      { trailing: true }
    ),
    []
  );

  // GET - Location List
  useEffect(() => {
    setLocationLoading(true);
    queryLocation(searchKey);
  }, [searchKey]);

  // GET - Location 5 Days Weather
  useEffect(() => {
    if (targetWOEID === null) return;
    setWeatherLoading(true);
    getRecentForecast(targetWOEID).then(({ data }) => {
      setWeatherData(data);
      setWeatherLoading(false);
    });
  }, [targetWOEID]);

  return (
    <PageWrapper>
      <Title>search location for weather.</Title>
      <Input
        value={searchKey}
        options={locationList}
        onChange={handleInput}
        onSelect={handleSelect}
        viewKey="title"
        loading={locationLoading}
      />
      <MainContentWrapper>
        {weatherLoading && <LoadingSpinner />}
      </MainContentWrapper>
    </PageWrapper>
  );
}
