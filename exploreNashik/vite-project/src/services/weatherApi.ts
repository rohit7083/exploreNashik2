// src/services/weatherApi.ts
import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1';

// Nashik coordinates
const NASHIK_LAT = 19.9975;
const NASHIK_LON = 73.7898;

export interface CurrentWeather {
  temperature: number;
  feelsLike: number;
  weatherCode: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  pressure: number;
  uvIndex: number;
  visibility: number;
  isDay: number;
}

export interface DailyForecast {
  date: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
  sunrise: string;
  sunset: string;
  rainSum: number;
  rainProbability: number;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  weatherCode: number;
  rainProbability: number;
  windSpeed: number;
  humidity: number;
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyForecast[];
  hourly: HourlyForecast[];
  alerts: unknown[];
}

// Weather code to condition mapping
export const weatherConditions: Record<number, { label: string; icon: string; description: string }> = {
  0: { label: 'Clear', icon: '☀️', description: 'Clear sky' },
  1: { label: 'Mainly Clear', icon: '🌤', description: 'Mainly clear' },
  2: { label: 'Partly Cloudy', icon: '⛅', description: 'Partly cloudy' },
  3: { label: 'Overcast', icon: '☁️', description: 'Overcast' },
  45: { label: 'Fog', icon: '🌫', description: 'Foggy' },
  48: { label: 'Fog', icon: '🌫', description: 'Depositing rime fog' },
  51: { label: 'Drizzle', icon: '🌦', description: 'Light drizzle' },
  53: { label: 'Drizzle', icon: '🌦', description: 'Moderate drizzle' },
  55: { label: 'Drizzle', icon: '🌧', description: 'Dense drizzle' },
  61: { label: 'Rain', icon: '🌧', description: 'Slight rain' },
  63: { label: 'Rain', icon: '🌧', description: 'Moderate rain' },
  65: { label: 'Rain', icon: '🌧', description: 'Heavy rain' },
  71: { label: 'Snow', icon: '❄️', description: 'Slight snow fall' },
  73: { label: 'Snow', icon: '❄️', description: 'Moderate snow fall' },
  75: { label: 'Snow', icon: '❄️', description: 'Heavy snow fall' },
  80: { label: 'Rain Showers', icon: '🌦', description: 'Slight rain showers' },
  81: { label: 'Rain Showers', icon: '🌧', description: 'Moderate rain showers' },
  82: { label: 'Rain Showers', icon: '⛈', description: 'Heavy rain showers' },
  95: { label: 'Thunderstorm', icon: '⛈', description: 'Thunderstorm' },
  96: { label: 'Thunderstorm', icon: '⛈', description: 'Thunderstorm with hail' },
  99: { label: 'Thunderstorm', icon: '⛈', description: 'Thunderstorm with heavy hail' },
};

export const getWeatherIcon = (code: number): string => {
  return weatherConditions[code]?.icon || '🌤';
};

export const getWeatherLabel = (code: number): string => {
  return weatherConditions[code]?.label || 'Unknown';
};

export const fetchWeatherData = async (): Promise<WeatherData> => {
  try {
    // Fetch current weather, daily forecast, and hourly forecast in one call
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        latitude: NASHIK_LAT,
        longitude: NASHIK_LON,
        current: [
          'temperature_2m',
          'relative_humidity_2m',
          'apparent_temperature',
          'weather_code',
          'wind_speed_10m',
          'wind_direction_10m',
          'pressure_msl',
          'uv_index',
          'visibility',
          'is_day'
        ],
        daily: [
          'weather_code',
          'temperature_2m_max',
          'temperature_2m_min',
          'sunrise',
          'sunset',
          'rain_sum',
          'precipitation_probability_max'
        ],
        hourly: [
          'temperature_2m',
          'weather_code',
          'precipitation_probability',
          'wind_speed_10m',
          'relative_humidity_2m'
        ],
        timezone: 'Asia/Kolkata',
        forecast_days: 7
      }
    });

    const data = response.data;
    
    // Transform current weather
    const current: CurrentWeather = {
      temperature: data.current.temperature_2m,
      feelsLike: data.current.apparent_temperature,
      weatherCode: data.current.weather_code,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      windDirection: data.current.wind_direction_10m,
      pressure: data.current.pressure_msl,
      uvIndex: data.current.uv_index,
      visibility: data.current.visibility,
      isDay: data.current.is_day
    };

    // Transform daily forecast
    const daily: DailyForecast[] = data.daily.time.map((time: string, index: number) => ({
      date: time,
      weatherCode: data.daily.weather_code[index],
      maxTemp: data.daily.temperature_2m_max[index],
      minTemp: data.daily.temperature_2m_min[index],
      sunrise: data.daily.sunrise[index],
      sunset: data.daily.sunset[index],
      rainSum: data.daily.rain_sum[index],
      rainProbability: data.daily.precipitation_probability_max[index]
    }));

    // Transform hourly forecast (next 24 hours)
    const hourly: HourlyForecast[] = data.hourly.time.map((time: string, index: number) => ({
      time: time,
      temperature: data.hourly.temperature_2m[index],
      weatherCode: data.hourly.weather_code[index],
      rainProbability: data.hourly.precipitation_probability[index],
      windSpeed: data.hourly.wind_speed_10m[index],
      humidity: data.hourly.relative_humidity_2m[index]
    })).slice(0, 24);

    return {
      current,
      daily,
      hourly,
      alerts: [] // Open-Meteo doesn't provide alerts in free tier
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Cache the weather data for 10 minutes
let cachedWeatherData: WeatherData | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export const getWeatherData = async (): Promise<WeatherData> => {
  const now = Date.now();
  if (cachedWeatherData && (now - lastFetchTime) < CACHE_DURATION) {
    return cachedWeatherData;
  }
  
  cachedWeatherData = await fetchWeatherData();
  lastFetchTime = now;
  return cachedWeatherData;
};