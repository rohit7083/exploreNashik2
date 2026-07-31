// src/weatherDashboard/WeatherDashboard.tsx
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getWeatherData } from '../services/weatherApi';
import CurrentWeather from './CurrentWeather';
import DailyForecast from './DailyForecast';
import GoldenHour from './GoldenHour';
import HourlyForecast from './HourlyForecast';
import WeatherAlerts from './WeatherAlerts';
import WeatherError from './WeatherError';
import WeatherHeader from './WeatherHeader';
import WeatherSkeleton from './WeatherSkeleton';

const WeatherDashboard = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['weather', refreshKey],
    queryFn: getWeatherData,
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    refetch();
  };

  if (isLoading) {
    return <WeatherSkeleton />;
  }

  if (error) {
    return <WeatherError onRetry={handleRefresh} />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Header with location and refresh */}
        <WeatherHeader 
          location="Nashik" 
          onRefresh={handleRefresh} 
          isRefreshing={isFetching}
          lastUpdated={new Date().toLocaleTimeString('en-IN', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        />

        {/* Current Weather */}
        <CurrentWeather data={data.current} />

        {/* Weather Alerts */}
        <WeatherAlerts data={data.current} />

        {/* Golden Hour */}
        <GoldenHour daily={data.daily} />

        {/* 7-Day Forecast */}
        <DailyForecast daily={data.daily} />

        {/* Hourly Forecast */}
        <HourlyForecast hourly={data.hourly} />

    
      </div>
    </div>
  );
};

export default WeatherDashboard;