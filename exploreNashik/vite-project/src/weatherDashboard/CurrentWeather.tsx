// src/weatherDashboard/CurrentWeather.tsx
import {
    Droplets,
    Eye,
    Gauge,
    Sun,
    Wind
} from 'lucide-react';
import type { CurrentWeather as CurrentWeatherType } from '../services/weatherApi';
import { weatherConditions } from '../services/weatherApi';

interface CurrentWeatherProps {
  data: CurrentWeatherType;
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  const weatherInfo = weatherConditions[data.weatherCode] || { label: 'Unknown', icon: '🌤' };
  
  const getUVIndexLevel = (uv: number) => {
    if (uv <= 2) return { label: 'Low', color: 'text-green-600 dark:text-green-400' };
    if (uv <= 5) return { label: 'Moderate', color: 'text-yellow-600 dark:text-yellow-400' };
    if (uv <= 7) return { label: 'High', color: 'text-orange-600 dark:text-orange-400' };
    if (uv <= 10) return { label: 'Very High', color: 'text-red-600 dark:text-red-400' };
    return { label: 'Extreme', color: 'text-purple-600 dark:text-purple-400' };
  };

  const uvLevel = getUVIndexLevel(data.uvIndex);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left section - Main weather info */}
        <div className="flex items-center gap-6 w-full lg:w-auto">
          <div className="text-7xl leading-none">
            {weatherInfo.icon}
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-gray-900 dark:text-white">
                {Math.round(data.temperature)}°
              </span>
              <span className="text-gray-500 dark:text-gray-400">C</span>
            </div>
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
              {weatherInfo.label}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Feels like {Math.round(data.feelsLike)}°C
            </p>
          </div>
        </div>

        {/* Right section - Weather stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full lg:w-auto">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 min-w-[100px]">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <Droplets className="w-4 h-4" />
              <span>Humidity</span>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
              {data.humidity}%
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 min-w-[100px]">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <Wind className="w-4 h-4" />
              <span>Wind</span>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
              {Math.round(data.windSpeed)} km/h
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 min-w-[100px]">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <Gauge className="w-4 h-4" />
              <span>Pressure</span>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
              {Math.round(data.pressure)} hPa
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 min-w-[100px]">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <Sun className="w-4 h-4" />
              <span>UV Index</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {data.uvIndex.toFixed(1)}
              </span>
              <span className={`text-xs font-medium ${uvLevel.color}`}>
                {uvLevel.label}
              </span>
            </div>
          </div>

          {data.visibility && (
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 min-w-[100px] col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <Eye className="w-4 h-4" />
                <span>Visibility</span>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {(data.visibility / 1000).toFixed(1)} km
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;