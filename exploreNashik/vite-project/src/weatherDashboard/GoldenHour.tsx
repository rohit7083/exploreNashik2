import type { DailyForecast } from '../services/weatherApi';

interface GoldenHourProps {
  daily: DailyForecast[];
}

const GoldenHour = ({ daily }: GoldenHourProps) => {
  const today = daily[0];
  if (!today) return null;

  const sunrise = new Date(today.sunrise);
  const sunset = new Date(today.sunset);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Golden Hour</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-200">
        <div className="rounded-3xl bg-orange-50 dark:bg-orange-900/10 p-5 border border-orange-100 dark:border-orange-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Sunrise</p>
          <p className="text-2xl font-semibold">{sunrise.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div className="rounded-3xl bg-orange-50 dark:bg-orange-900/10 p-5 border border-orange-100 dark:border-orange-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Sunset</p>
          <p className="text-2xl font-semibold">{sunset.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Plan your best photography and outdoor trips around the golden hours around sunrise and sunset.
      </p>
    </div>
  );
};

export default GoldenHour;
