export interface Location {
  latt_long: string;
  location_type: string;
  title: string;
  woeid: number;
}

export interface LocationWithForecast extends Location {
  consolidated_weather: ConsolidatedWeather[];
  sources: Source[];
  parent: Location;
  sun_rise: string;
  sun_set: string;
  time: string;
  timezone: string;
  timezone_name: string;
}

interface ConsolidatedWeather {
  air_pressure: number;
  applicable_date: string;
  created: string;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
}

interface Source {
  crawl_rate: number;
  slug: string;
  title: string;
  url: string;
}
