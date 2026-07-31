// src/weatherDashboard/DailyForecast.tsx
import type { DailyForecast as DailyForecastType } from '../services/weatherApi';
import { getWeatherIcon } from '../services/weatherApi';

interface DailyForecastProps {
  daily: DailyForecastType[];
}

const DailyForecast = ({ daily }: DailyForecastProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span>📅</span> 7-Day Forecast
      </h2>
      
      <div className="space-y-2">
        {daily.map((day, index) => {
          const date = new Date(day.date);
          const isToday = index === 0;
          const dayName = isToday ? 'Today' : date.toLocaleDateString('en-IN', { weekday: 'short' });
          const icon = getWeatherIcon(day.weatherCode);
          
          return (
            <div 
              key={day.date}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                isToday 
                  ? 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <div className="flex items-center gap-4 min-w-[100px]">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-14">
                  {dayName}
                </span>
                <span className="text-2xl">{icon}</span>
              </div>
              
              <div className="flex items-center gap-4 flex-1 justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 dark:text-gray-500">↓</span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {Math.round(day.minTemp)}°
                  </span>
                </div>
                
                <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                    style={{
                      width: `${((day.maxTemp - day.minTemp) / 20) * 100}%`,
                      left: `${((day.minTemp + 10) / 30) * 100}%`
                    }}
                  />
                </div>
                
                <div className="flex items-center gap-2 min-w-[50px]">
                  <span className="text-sm text-gray-400 dark:text-gray-500">↑</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {Math.round(day.maxTemp)}°
                  </span>
                </div>
                
                <div className="min-w-[60px] text-right">
                  {day.rainProbability > 0 && (
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {Math.round(day.rainProbability)}% ☔
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;