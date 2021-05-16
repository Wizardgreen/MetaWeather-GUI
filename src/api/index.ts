import axios from "axios";
import { Location, LocationWithForecast } from "../assets/types";
axios.defaults.baseURL = "https://www.metaweather.com/api/";

export const getLocationList = (name: string) => {
  return axios.get<Location[]>("/location/search", {
    params: { query: name },
  });
};

export const getRecentForecast = (woeid: number) => {
  return axios.get<LocationWithForecast[]>(`/location/${woeid}`);
};
