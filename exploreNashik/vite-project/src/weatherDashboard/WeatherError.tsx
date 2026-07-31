interface WeatherErrorProps {
  onRetry: () => void;
}

const WeatherError = ({ onRetry }: WeatherErrorProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-800 max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Oops, something went wrong.</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">We couldn't load the weather right now. Please try again.</p>
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-orange-600 text-white rounded-full shadow-sm hover:bg-orange-700 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default WeatherError;
