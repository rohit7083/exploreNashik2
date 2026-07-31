// src/weatherDashboard/WeatherAlerts.tsx
import { AlertTriangle, Cloud, CloudRain, Sun, Thermometer, Wind, Zap } from 'lucide-react';
import type { CurrentWeather } from '../services/weatherApi';

interface WeatherAlertsProps {
  data: CurrentWeather;
}

interface Alert {
  type: string;
  icon: React.ReactNode;
  message: string;
  severity: 'warning' | 'danger' | 'info';
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const WeatherAlerts = ({ data }: WeatherAlertsProps) => {
  const alerts: Alert[] = [];
  const weatherCode = data.weatherCode;
  
  // Check for Thunderstorm (Weather codes: 95, 96, 99)
  if ([95, 96, 99].includes(weatherCode)) {
    alerts.push({
      type: 'Thunderstorm',
      icon: <Zap className="w-5 h-5" />,
      message: '⚡ Thunderstorm expected. Stay indoors, avoid open areas, and unplug electronic devices.',
      severity: 'danger',
      color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700 text-purple-800 dark:text-purple-200',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-300 dark:border-purple-700',
      textColor: 'text-purple-800 dark:text-purple-200',
    });
  }
  
  // Check for Heavy Rain (Weather codes: 61, 63, 65, 80, 81, 82)
  if ([61, 63, 65, 80, 81, 82].includes(weatherCode)) {
    alerts.push({
      type: 'Heavy Rain',
      icon: <CloudRain className="w-5 h-5" />,
      message: '🌧 Heavy rainfall expected. Carry an umbrella, drive carefully, and avoid waterlogged areas.',
      severity: 'warning',
      color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-300 dark:border-blue-700',
      textColor: 'text-blue-800 dark:text-blue-200',
    });
  }
  
  // Check for High UV (UV Index > 6)
  if (data.uvIndex > 6) {
    const uvLevel = data.uvIndex > 8 ? 'Very High' : 'High';
    alerts.push({
      type: `UV Index: ${uvLevel}`,
      icon: <Sun className="w-5 h-5" />,
      message: `☀️ UV Index is ${data.uvIndex.toFixed(1)} (${uvLevel}). Wear sunscreen, sunglasses, and avoid prolonged sun exposure between 11 AM - 3 PM.`,
      severity: 'warning',
      color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700 text-orange-800 dark:text-orange-200',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-300 dark:border-orange-700',
      textColor: 'text-orange-800 dark:text-orange-200',
    });
  }
  
  // Check for Strong Winds (Wind speed > 30 km/h)
  if (data.windSpeed > 30) {
    const windLevel = data.windSpeed > 50 ? 'Severe' : 'Strong';
    alerts.push({
      type: `${windLevel} Winds`,
      icon: <Wind className="w-5 h-5" />,
      message: `💨 ${windLevel} winds at ${Math.round(data.windSpeed)} km/h. Secure outdoor items and drive with caution.`,
      severity: 'warning',
      color: 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-300 dark:border-yellow-700',
      textColor: 'text-yellow-800 dark:text-yellow-200',
    });
  }
  
  // Check for Heatwave (Temperature > 35°C)
  if (data.temperature > 35) {
    alerts.push({
      type: 'Heatwave',
      icon: <Thermometer className="w-5 h-5" />,
      message: `🌡️ Heatwave alert! Temperature is ${Math.round(data.temperature)}°C. Stay hydrated, avoid outdoor activities during peak hours, and use sunscreen.`,
      severity: 'danger',
      color: 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-300 dark:border-red-700',
      textColor: 'text-red-800 dark:text-red-200',
    });
  }
  
  // Check for Fog (Weather codes: 45, 48)
  if ([45, 48].includes(weatherCode)) {
    alerts.push({
      type: 'Fog Alert',
      icon: <Cloud className="w-5 h-5" />,
      message: '🌫️ Dense fog expected. Drive with headlights on, maintain safe distance, and use fog lights if available.',
      severity: 'info',
      color: 'bg-gray-100 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200',
      bgColor: 'bg-gray-50 dark:bg-gray-800/50',
      borderColor: 'border-gray-300 dark:border-gray-600',
      textColor: 'text-gray-800 dark:text-gray-200',
    });
  }
  
  // Check for Extreme Cold (Temperature < 10°C)
  if (data.temperature < 10 && data.temperature > 0) {
    alerts.push({
      type: 'Cold Weather',
      icon: <Thermometer className="w-5 h-5" />,
      message: `❄️ Cold weather alert! Temperature is ${Math.round(data.temperature)}°C. Wear warm clothing and carry a jacket.`,
      severity: 'info',
      color: 'bg-cyan-100 dark:bg-cyan-900/30 border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-200',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-300 dark:border-cyan-700',
      textColor: 'text-cyan-800 dark:text-cyan-200',
    });
  }
  
  // Check for Freezing (Temperature < 0°C)
  if (data.temperature < 0) {
    alerts.push({
      type: 'Freezing Alert',
      icon: <AlertTriangle className="w-5 h-5" />,
      message: `🥶 Freezing temperature at ${Math.round(data.temperature)}°C! Take precautions against frostbite and icy conditions.`,
      severity: 'danger',
      color: 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700 text-indigo-800 dark:text-indigo-200',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-300 dark:border-indigo-700',
      textColor: 'text-indigo-800 dark:text-indigo-200',
    });
  }
  
  // No alerts found
  if (alerts.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <span>✅</span> Weather Alerts
        </h2>
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="text-4xl mb-3">🌤️</div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">All Clear</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              No severe weather alerts at this time
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  // Sort alerts by severity (danger > warning > info)
  const severityOrder = { danger: 0, warning: 1, info: 2 };
  const sortedAlerts = [...alerts].sort((a, b) => 
    severityOrder[a.severity as keyof typeof severityOrder] - 
    severityOrder[b.severity as keyof typeof severityOrder]
  );
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span>⚠️</span> Weather Alerts
        <span className="ml-auto text-sm font-normal bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full">
          {alerts.length} Alert{alerts.length > 1 ? 's' : ''}
        </span>
      </h2>
      
      <div className="space-y-3">
        {sortedAlerts.map((alert, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border ${alert.bgColor} ${alert.borderColor} transition-all hover:shadow-md`}
          >
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 p-1.5 rounded-lg ${alert.bgColor} ${alert.borderColor}`}>
                <div className={alert.textColor}>
                  {alert.icon}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-sm font-semibold ${alert.textColor}`}>
                    {alert.type}
                  </span>
                  
                  {/* Severity badges */}
                  {alert.severity === 'danger' && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300">
                      🔴 High Priority
                    </span>
                  )}
                  {alert.severity === 'warning' && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300">
                      🟡 Moderate
                    </span>
                  )}
                  {alert.severity === 'info' && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                      🔵 Information
                    </span>
                  )}
                </div>
                
                <p className={`text-sm ${alert.textColor}`}>
                  {alert.message}
                </p>
                
                {/* Additional safety tips based on alert type */}
                {alert.type === 'Heatwave' && (
                  <div className="mt-2 text-xs text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg inline-block">
                    💧 Drink water every 15-20 minutes
                  </div>
                )}
                
                {alert.type === 'Heavy Rain' && (
                  <div className="mt-2 text-xs text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg inline-block">
                    🚗 Drive slowly and avoid waterlogged areas
                  </div>
                )}
                
                {alert.type.includes('UV Index') && (
                  <div className="mt-2 text-xs text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg inline-block">
                    🧴 Apply SPF 50+ sunscreen
                  </div>
                )}
                
                {alert.type.includes('Wind') && (
                  <div className="mt-2 text-xs text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1.5 rounded-lg inline-block">
                    🏠 Secure loose outdoor items
                  </div>
                )}
                
                {alert.type === 'Fog Alert' && (
                  <div className="mt-2 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/30 px-3 py-1.5 rounded-lg inline-block">
                    💡 Use fog lights and maintain safe distance
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick safety summary */}
      {alerts.length > 0 && (
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <span>🛡️</span>
            <span>
              <strong>Stay Safe:</strong> Follow the recommendations above and check for updates regularly.
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherAlerts;