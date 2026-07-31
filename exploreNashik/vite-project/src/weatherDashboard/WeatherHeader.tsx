// src/pages/WeatherDashboard/components/WeatherHeader.tsx
import { MapPin, RefreshCw } from 'lucide-react';

interface WeatherHeaderProps {
  location: string;
  onRefresh: () => void;
  isRefreshing: boolean;
  lastUpdated: string;
}

const WeatherHeader = ({ location, onRefresh, isRefreshing, lastUpdated }: WeatherHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
          <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            {location}
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">
              Live
            </span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>
      
      <button
        onClick={onRefresh}
        disabled={isRefreshing}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 dark:border-gray-700"
      >
        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        <span className="text-sm font-medium">
          {isRefreshing ? 'Updating...' : 'Refresh'}
        </span>
      </button>
    </div>
  );
};

export default WeatherHeader;