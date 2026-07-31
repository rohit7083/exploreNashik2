// src/weatherDashboard/HourlyForecast.tsx
import { getWeatherIcon } from '../services/weatherApi';
import type { HourlyForecast as HourlyForecastType } from '../services/weatherApi';

interface HourlyForecastProps {
  hourly: HourlyForecastType[];
}

const HourlyForecast = ({ hourly }: HourlyForecastProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span>🕐</span> Hourly Forecast
      </h2>
      
      <div className="overflow-x-auto">
        <div className="flex gap-4 pb-2 min-w-max">
          {hourly.map((hour, index) => {
            const time = new Date(hour.time);
            const isNow = index === 0;
            const icon = getWeatherIcon(hour.weatherCode);
            
            return (
              <div 
                key={hour.time}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl min-w-[80px] ${
                  isNow 
                    ? 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {time.toLocaleTimeString('en-IN', { hour: 'numeric', hour12: true })}
                </span>
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {Math.round(hour.temperature)}°
                </span>
                {hour.rainProbability > 0 && (
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {Math.round(hour.rainProbability)}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;