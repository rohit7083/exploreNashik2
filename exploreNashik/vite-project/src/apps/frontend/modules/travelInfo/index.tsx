import { useState } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { travelInfo } from './data';
import SectionHeader from './SectionHeader';

type TransportKey = 'byRoad' | 'byRail' | 'byAir';

interface TravelOption {
  from: string;
  distance: string;
  time: string;
  trains?: string;
  bus?: string;
}

interface HowToReachItem {
  icon: string;
  title: string;
  description: string;
  options: TravelOption[];
  tips?: string;
}

interface Season {
  season: string;
  weather: string;
  recommendation: string;
  highlights: string;
  icon: string;
}

interface LocalTransport {
  type: string;
  icon: string;
  description: string;
  avgCost: string;
  tips: string;
}

interface Distance {
  city: string;
  distance: string;
  time: string;
}

interface TravelInfoType {
  howToReach: Record<TransportKey, HowToReachItem>;
  localTransport: LocalTransport[];
  distancesFromNashik: Distance[];
  bestTimeToVisit: { seasons: Season[] };
}

const seasonBorder: Record<string, string> = {
  'Best time to visit': 'border-green-500',
  'Great for waterfalls': 'border-blue-500',
  'Avoid if possible': 'border-orange-500',
};

const seasonBadge: Record<string, string> = {
  'Best time to visit': 'bg-green-100 text-green-700',
  'Great for waterfalls': 'bg-blue-100 text-blue-700',
  'Avoid if possible': 'bg-orange-100 text-orange-700',
};

const TravelInfoPage = () => {
  const [activeTransport, setActiveTransport] = useState<TransportKey>('byRoad');

  const { howToReach, localTransport, distancesFromNashik, bestTimeToVisit } =
    travelInfo as TravelInfoType;

  const transportOptions: { key: TransportKey; label: string; icon: string }[] = [
    { key: 'byRoad', label: 'By Road', icon: '🚗' },
    { key: 'byRail', label: 'By Train', icon: '🚂' },
    { key: 'byAir', label: 'By Air', icon: '✈️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Page Content */}

      <div
  className="pt-8 pb-6 px-4 text-white"
  style={{ background: "black" }}
>
  <div className="max-w-6xl mx-auto space-y-5">
    
    <Badge className="bg-white text-blue-700 w-fit">
      Travel Guide
    </Badge>

    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      Travel Information 🚗
    </h1>

    <p className="text-blue-100 text-lg max-w-2xl">
      Everything you need to know to get to and around Nashik
    </p>

  </div>
</div>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-16">

        {/* Best Time to Visit */}
        <section>
          <SectionHeader
            title="Best Time to Visit"
            subtitle="Plan your trip according to Nashik's seasons"
            emoji="🗓️"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bestTimeToVisit.seasons.map((season) => (
              <div
                key={season.season}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 hover:shadow-lg transition ${
                  seasonBorder[season.recommendation] ?? 'border-gray-300'
                }`}
              >
                <div className="text-4xl mb-3">{season.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                  {season.season}
                </h3>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  {season.weather}
                </p>

                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                    seasonBadge[season.recommendation] ??
                    'bg-gray-100 text-gray-700'
                  }`}
                >
                  {season.recommendation}
                </span>

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {season.highlights}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Reach */}
        <section>
          <SectionHeader
            title="How to Reach Nashik"
            subtitle="Multiple convenient ways to reach the wine capital"
            emoji="🧭"
          />

          <div className="flex flex-wrap gap-3 mb-6">
            {transportOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setActiveTransport(opt.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm ${
                  activeTransport === opt.key
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <span>{opt.icon}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>

          {howToReach[activeTransport] && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">
                  {howToReach[activeTransport].icon}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {howToReach[activeTransport].title}
                </h3>
              </div>

              <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
                {howToReach[activeTransport].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {howToReach[activeTransport].options.map((opt, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      From {opt.from}
                    </h4>

                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <p>📏 {opt.distance}</p>
                      <p>⏱️ {opt.time}</p>
                      {opt.trains && <p>🚂 {opt.trains}</p>}
                      {opt.bus && <p>🚌 {opt.bus}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {howToReach[activeTransport].tips && (
                <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    💡 <strong>Tip:</strong>{' '}
                    {howToReach[activeTransport].tips}
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Distances */}
        <section>
          <SectionHeader
            title="Distances from Nashik"
            subtitle="Nashik's connectivity to major cities"
            emoji="📏"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {distancesFromNashik.map((dest) => (
              <div
                key={dest.city}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  🏙️
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {dest.city}
                  </h4>
                  <p className="text-sm text-blue-700 font-semibold">
                    {dest.distance}
                  </p>
                  <p className="text-xs text-gray-500">
                    ⏱️ {dest.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Transport */}
        <section>
          <SectionHeader
            title="Local Transport"
            subtitle="Getting around Nashik"
            emoji="🚌"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localTransport.map((transport) => (
              <div
                key={transport.type}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{transport.icon}</span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {transport.type}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm mb-3">
                  {transport.description}
                </p>

                <p className="text-green-700 text-sm font-medium">
                  💰 {transport.avgCost}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  💡 {transport.tips}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency */}
        <section className="bg-red-50 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-red-700 mb-6">
            🆘 Emergency Numbers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Police', number: '100', icon: '👮' },
              { label: 'Ambulance', number: '108', icon: '🚑' },
              { label: 'Fire', number: '101', icon: '🚒' },
              { label: 'Tourist Help', number: '1800-111-363', icon: '🏛️' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-4 text-center shadow"
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xl font-bold text-red-600">
                  {item.number}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default TravelInfoPage;