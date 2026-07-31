


// import { useState } from 'react';
// import SEO from '../../../../components/seo/SEO';
// import { travelInfo } from './data';

// type TransportKey = 'byRoad' | 'byRail' | 'byAir';

// interface TravelOption {
//   from: string;
//   distance: string;
//   time: string;
//   trains?: string;
//   bus?: string;
// }

// interface HowToReachItem {
//   icon: string;
//   title: string;
//   description: string;
//   options: TravelOption[];
//   tips?: string;
// }

// interface Season {
//   season: string;
//   weather: string;
//   recommendation: string;
//   highlights: string;
//   icon: string;
// }

// interface LocalTransport {
//   type: string;
//   icon: string;
//   description: string;
//   avgCost: string;
//   tips: string;
// }

// interface Distance {
//   city: string;
//   distance: string;
//   time: string;
//   direction: string;
// }

// interface TravelInfoType {
//   howToReach: Record<TransportKey, HowToReachItem>;
//   localTransport: LocalTransport[];
//   distancesFromNashik: Distance[];
//   bestTimeToVisit: { seasons: Season[] };
// }

// // Light/dark pairs for each transport mode and season so inline-style
// // driven colors stay theme-aware without hardcoding a single hex.
// const transportColors: Record<TransportKey, { light: string; dark: string }> = {
//   byRoad: { light: '#262421', dark: '#E7E2D9' },
//   byRail: { light: '#C2410C', dark: '#FB923C' },
//   byAir: { light: '#1D4E73', dark: '#60A5FA' },
// };

// const seasonColor: Record<string, { light: string; dark: string }> = {
//   'Best time to visit': { light: '#3F6B4F', dark: '#6EE7A0' },
//   'Great for waterfalls': { light: '#1D4E73', dark: '#60A5FA' },
//   'Avoid if possible': { light: '#C2410C', dark: '#FB923C' },
// };

// // Map compass directions to a position on an 8-point ring (N at top, clockwise)
// // const directionAngle: Record<string, number> = {
// //   North: 0,
// //   Northeast: 45,
// //   East: 90,
// //   Southeast: 135,
// //   South: 180,
// //   Southwest: 225,
// //   West: 270,
// //   Northwest: 315,
// // };

// const useThemeAwareColor = () => {
//   // Resolves a light/dark color pair based on the current `dark` class on <html>.
//   // Re-checked on each render, which is fine since this only runs on toggle clicks.
//   const isDark =
//     typeof document !== 'undefined' &&
//     document.documentElement.classList.contains('dark');
//   return (pair: { light: string; dark: string }) => (isDark ? pair.dark : pair.light);
// };

// const TravelInfoPage = () => {
//   const [activeTransport, setActiveTransport] = useState<TransportKey>('byRoad');
//   const resolveColor = useThemeAwareColor();

//   const { howToReach, localTransport, distancesFromNashik, bestTimeToVisit } =
//     travelInfo as TravelInfoType;

//   const transportOptions: { key: TransportKey; label: string; icon: string }[] = [
//     { key: 'byRoad', label: 'By Road', icon: '🚗' },
//     { key: 'byRail', label: 'By Train', icon: '🚂' },
//     { key: 'byAir', label: 'By Air', icon: '✈️' },
//   ];

//   const activeColor = resolveColor(transportColors[activeTransport]);

//   return (
//     <><SEO
// title="Travel Information | Explore Nashik"
// description="Travel information, transport guide and useful tips for visiting Nashik."
// url="https://explorenashik.in/travel-info"
// />
//     <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
//       {/* HEADER */}
//       <div className="pt-16 pb-14 px-4 bg-stone-900 dark:bg-black text-orange-50 relative overflow-hidden">
//         {/* faint route lines in background */}
//         <svg
//           className="absolute inset-0 w-full h-full opacity-[0.08]"
//           preserveAspectRatio="none"
//           viewBox="0 0 800 200"
//         >
//           <path d="M0,150 C200,50 400,180 800,40" stroke="#C2410C" strokeWidth="2" fill="none" />
//           <path d="M0,60 C250,160 500,20 800,140" stroke="currentColor" strokeWidth="1.5" fill="none" />
//         </svg>

//         <div className="max-w-5xl mx-auto space-y-4 relative">
//           <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-400 dark:text-orange-300">
//             Routes In · Routes Around
//           </p>
//           <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
//             Travel Information
//           </h1>
//           <p className="text-orange-50/70 text-lg max-w-xl leading-relaxed">
//             By road, rail, or air — how to get to Nashik, how to move once
//             you're here, and what to know before you go.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 md:px-8 py-14 space-y-20">
//         {/* BEST TIME TO VISIT */}
//         <section>
//           <header className="mb-7">
//             <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
//               Plan ahead
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
//               Best Time to Visit
//             </h2>
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {bestTimeToVisit.seasons.map((season) => {
//               const pair = seasonColor[season.recommendation] ?? {
//                 light: '#52606D',
//                 dark: '#9CA3AF',
//               };
//               const color = resolveColor(pair);
//               return (
//                 <div
//                   key={season.season}
//                   className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-none border-t-[3px]"
//                   style={{ borderTopColor: color }}
//                 >
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="text-3xl">{season.icon}</span>
//                     <span
//                       className="text-xs font-semibold px-2.5 py-1 rounded-full text-white dark:text-gray-900"
//                       style={{ backgroundColor: color }}
//                     >
//                       {season.recommendation}
//                     </span>
//                   </div>
//                   <h3 className="font-bold text-stone-900 dark:text-white text-lg mb-1">
//                     {season.season}
//                   </h3>
//                   <p className="text-stone-700 dark:text-gray-300 font-medium text-sm mb-2">
//                     {season.weather}
//                   </p>
//                   <p className="text-stone-500 dark:text-gray-400 text-sm leading-relaxed">
//                     {season.highlights}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* HOW TO REACH — route line selector */}
//         <section>
//           <header className="mb-7">
//             <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
//               Getting here
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
//               How to Reach Nashik
//             </h2>
//           </header>

//           {/* Route line tabs */}
//           <div className="flex gap-1 mb-0">
//             {transportOptions.map((opt) => {
//               const isActive = activeTransport === opt.key;
//               const color = resolveColor(transportColors[opt.key]);
//               return (
//                 <button
//                   key={opt.key}
//                   onClick={() => setActiveTransport(opt.key)}
//                   className="flex-1 group"
//                 >
//                   <div
//                     className="h-1.5 rounded-full mb-3 transition-all dark:bg-gray-600"
//                     style={{
//                       backgroundColor: isActive ? color : undefined,
//                       opacity: isActive ? 1 : undefined,
//                     }}
//                   />
//                   <div
//                     className={`flex items-center justify-center gap-2 pb-3 font-medium text-sm transition-colors ${
//                       isActive ? '' : 'text-stone-400 dark:text-gray-500 hover:text-stone-600 dark:hover:text-gray-300'
//                     }`}
//                     style={isActive ? { color } : undefined}
//                   >
//                     <span>{opt.icon}</span>
//                     <span className="hidden sm:inline">{opt.label}</span>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>

//           {howToReach[activeTransport] && (
//             <div
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm dark:shadow-none border-l-[3px]"
//               style={{ borderLeftColor: activeColor }}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <span className="text-3xl">{howToReach[activeTransport].icon}</span>
//                 <h3 className="text-xl font-bold text-stone-900 dark:text-white">
//                   {howToReach[activeTransport].title}
//                 </h3>
//               </div>

//               <p className="text-stone-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
//                 {howToReach[activeTransport].description}
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {howToReach[activeTransport].options.map((opt, i) => (
//                   <div key={i} className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4">
//                     <h4 className="font-semibold text-stone-900 dark:text-white mb-1">
//                       From {opt.from}
//                     </h4>
//                     <div className="text-sm text-stone-500 dark:text-gray-400 space-y-0.5">
//                       <p>{opt.distance}</p>
//                       <p>{opt.time}</p>
//                       {opt.trains && <p>🚂 {opt.trains}</p>}
//                       {opt.bus && <p>🚌 {opt.bus}</p>}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {howToReach[activeTransport].tips && (
//                 <div
//                   className="mt-5 rounded-lg p-4 text-sm"
//                   style={{ backgroundColor: `${activeColor}14`, color: activeColor }}
//                 >
//                   <strong>Tip:</strong> {howToReach[activeTransport].tips}
//                 </div>
//               )}
//             </div>
//           )}
//         </section>

//         {/* DISTANCES — compass layout */}
//         <section>
//           <header className="mb-7">
//             <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
//               Connectivity
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
//               Distances from Nashik
//             </h2>
//           </header>

//           <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-none p-6 md:p-10">
//             {/* N/E/S/W markers */}
//             <div className="hidden md:block">
//               <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
//                 N
//               </div>
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
//                 S
//               </div>
//               <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
//                 W
//               </div>
//               <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
//                 E
//               </div>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
//               {distancesFromNashik.map((dest) => (
//                 <div
//                   key={dest.city}
//                   className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4 text-center"
//                 >
//                   <p className="font-mono text-[10px] uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-1">
//                     {dest.direction}
//                   </p>
//                   <h4 className="font-bold text-stone-900 dark:text-white mb-0.5">
//                     {dest.city}
//                   </h4>
//                   <p className="text-sm text-stone-700 dark:text-gray-300 font-semibold">
//                     {dest.distance}
//                   </p>
//                   <p className="text-xs text-stone-400 dark:text-gray-500">{dest.time}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* LOCAL TRANSPORT */}
//         <section>
//           <header className="mb-7">
//             <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
//               Around the city
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
//               Local Transport
//             </h2>
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {localTransport.map((transport) => (
//               <div
//                 key={transport.type}
//                 className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm dark:shadow-none"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="text-2xl">{transport.icon}</span>
//                   <h3 className="font-bold text-stone-900 dark:text-white">{transport.type}</h3>
//                 </div>
//                 <p className="text-stone-500 dark:text-gray-400 text-sm mb-3 leading-relaxed">
//                   {transport.description}
//                 </p>
//                 <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-1">
//                   {transport.avgCost}
//                 </p>
//                 <p className="text-xs text-stone-400 dark:text-gray-500 leading-relaxed">
//                   {transport.tips}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* EMERGENCY */}
//         <section className="bg-stone-900 dark:bg-black rounded-2xl p-7 md:p-9">
//           <h3 className="text-xl font-serif font-bold text-orange-50 mb-6 flex items-center gap-2">
//             <span>🆘</span> Emergency Numbers
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { label: 'Police', number: '100', icon: '👮' },
//               { label: 'Ambulance', number: '108', icon: '🚑' },
//               { label: 'Fire', number: '101', icon: '🚒' },
//               { label: 'Tourist Helpline', number: '1800-111-363', icon: '🏛️' },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className="bg-orange-50 dark:bg-gray-800 rounded-lg p-4 text-center"
//               >
//                 <div className="text-2xl mb-1">{item.icon}</div>
//                 <p className="text-xs font-medium text-stone-500 dark:text-gray-400">
//                   {item.label}
//                 </p>
//                 <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
//                   {item.number}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//     </>
//   );
// };

// export default TravelInfoPage;

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/seo/SEO';
import { travelInfo } from './data';

type TransportKey = 'byRoad' | 'byRail' | 'byAir';

const transportColors: Record<TransportKey, { light: string; dark: string }> = {
  byRoad: { light: '#262421', dark: '#E7E2D9' },
  byRail: { light: '#C2410C', dark: '#FB923C' },
  byAir: { light: '#1D4E73', dark: '#60A5FA' },
};

const seasonColorMap: Record<string, { light: string; dark: string }> = {
  winter: { light: '#3F6B4F', dark: '#6EE7A0' },
  monsoon: { light: '#1D4E73', dark: '#60A5FA' },
  summer: { light: '#C2410C', dark: '#FB923C' },
};

const directionMap: Record<string, string> = {
  mumbai: 'Southwest',
  pune: 'South',
  shirdi: 'Southeast',
  aurangabad: 'East',
  trimbakeshwar: 'West',
  saptashringi: 'North',
  igatpuri: 'Southwest',
  dhule: 'North',
};

const useThemeAwareColor = () => {
  const isDark =
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark');
  return (pair: { light: string; dark: string }) => (isDark ? pair.dark : pair.light);
};

const TravelInfoPage = () => {
  const { t } = useTranslation();
  const [activeTransport, setActiveTransport] = useState<TransportKey>('byRoad');
  const resolveColor = useThemeAwareColor();

  const { howToReach, localTransport, distancesFromNashik, bestTimeToVisit } = travelInfo;

  const transportOptions: { key: TransportKey; label: string; icon: string }[] = [
    { key: 'byRoad', label: t('travelInfo.transport.byRoad'), icon: '🚗' },
    { key: 'byRail', label: t('travelInfo.transport.byRail'), icon: '🚂' },
    { key: 'byAir', label: t('travelInfo.transport.byAir'), icon: '✈️' },
  ];

  const emergencyNumbers = [
    { label: t('travelInfo.emergency.police'), number: '100', icon: '👮' },
    { label: t('travelInfo.emergency.ambulance'), number: '108', icon: '🚑' },
    { label: t('travelInfo.emergency.fire'), number: '101', icon: '🚒' },
    { label: t('travelInfo.emergency.touristHelpline'), number: '1800-111-363', icon: '🏛️' },
  ];

  const activeColor = resolveColor(transportColors[activeTransport]);
  const activeData = howToReach[activeTransport];

  return (
    <>
      <SEO
        title={t('travelInfo.seo.title')}
        description={t('travelInfo.seo.description')}
        url="https://explorenashik.in/travel-info"
      />
      <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
        {/* HEADER */}
        <div className="pt-16 pb-14 px-4 bg-stone-900 dark:bg-black text-orange-50 relative overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.08]"
            preserveAspectRatio="none"
            viewBox="0 0 800 200"
          >
            <path d="M0,150 C200,50 400,180 800,40" stroke="#C2410C" strokeWidth="2" fill="none" />
            <path d="M0,60 C250,160 500,20 800,140" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>

          <div className="max-w-5xl mx-auto space-y-4 relative">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-400 dark:text-orange-300">
              {t('travelInfo.hero.label')}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              {t('travelInfo.hero.title')}
            </h1>
            <p className="text-orange-50/70 text-lg max-w-xl leading-relaxed">
              {t('travelInfo.hero.description')}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8 py-14 space-y-20">
          {/* BEST TIME TO VISIT */}
          <section>
            <header className="mb-7">
              <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
                {t('travelInfo.bestTime.label')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
                {t('travelInfo.bestTime.title')}
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {bestTimeToVisit.seasons.map((season) => {
                const pair = seasonColorMap[season.key] ?? { light: '#52606D', dark: '#9CA3AF' };
                const color = resolveColor(pair);
                return (
                  <div
                    key={season.key}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-none border-t-[3px]"
                    style={{ borderTopColor: color }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{season.icon}</span>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full text-white dark:text-gray-900"
                        style={{ backgroundColor: color }}
                      >
                        {t(`travelInfo.bestTime.seasons.${season.key}.recommendation`)}
                      </span>
                    </div>
                    <h3 className="font-bold text-stone-900 dark:text-white text-lg mb-1">
                      {t(`travelInfo.bestTime.seasons.${season.key}.season`)}
                    </h3>
                    <p className="text-stone-700 dark:text-gray-300 font-medium text-sm mb-2">
                      {t(`travelInfo.bestTime.seasons.${season.key}.weather`)}
                    </p>
                    <p className="text-stone-500 dark:text-gray-400 text-sm leading-relaxed">
                      {t(`travelInfo.bestTime.seasons.${season.key}.highlights`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* HOW TO REACH */}
          <section>
            <header className="mb-7">
              <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
                {t('travelInfo.howToReach.label')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
                {t('travelInfo.howToReach.title')}
              </h2>
            </header>

            <div className="flex gap-1 mb-0">
              {transportOptions.map((opt) => {
                const isActive = activeTransport === opt.key;
                const color = resolveColor(transportColors[opt.key]);
                return (
                  <button key={opt.key} onClick={() => setActiveTransport(opt.key)} className="flex-1 group">
                    <div
                      className="h-1.5 rounded-full mb-3 transition-all dark:bg-gray-600"
                      style={{ backgroundColor: isActive ? color : undefined, opacity: isActive ? 1 : undefined }}
                    />
                    <div
                      className={`flex items-center justify-center gap-2 pb-3 font-medium text-sm transition-colors ${
                        isActive ? '' : 'text-stone-400 dark:text-gray-500 hover:text-stone-600 dark:hover:text-gray-300'
                      }`}
                      style={isActive ? { color } : undefined}
                    >
                      <span>{opt.icon}</span>
                      <span className="hidden sm:inline">{opt.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeData && (
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm dark:shadow-none border-l-[3px]"
                style={{ borderLeftColor: activeColor }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{activeData.icon}</span>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                    {t(`travelInfo.howToReach.modes.${activeTransport}.title`)}
                  </h3>
                </div>

                <p className="text-stone-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {t(`travelInfo.howToReach.modes.${activeTransport}.description`)}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeData.options.map((opt, i) => (
                    <div key={i} className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <h4 className="font-semibold text-stone-900 dark:text-white mb-1">
                        {t('travelInfo.howToReach.from')} {t(`travelInfo.places.${opt.from}`)}
                      </h4>
                      <div className="text-sm text-stone-500 dark:text-gray-400 space-y-0.5">
                        <p>{opt.distance}</p>
                        <p>{t(`travelInfo.howToReach.durations.${opt.time}`)}</p>
                        {'trains' in opt && opt.trains && (
                          <p>🚂 {t(`travelInfo.howToReach.trains.${opt.trains}`)}</p>
                        )}
                        {'bus' in opt && opt.bus && (
                          <p>🚌 {t(`travelInfo.howToReach.buses.${opt.bus}`)}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-5 rounded-lg p-4 text-sm"
                  style={{ backgroundColor: `${activeColor}14`, color: activeColor }}
                >
                  <strong>{t('travelInfo.howToReach.tip')}:</strong>{' '}
                  {t(`travelInfo.howToReach.modes.${activeTransport}.tips`)}
                </div>
              </div>
            )}
          </section>

          {/* DISTANCES */}
          <section>
            <header className="mb-7">
              <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
                {t('travelInfo.distances.label')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
                {t('travelInfo.distances.title')}
              </h2>
            </header>

            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-none p-6 md:p-10">
              <div className="hidden md:block">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
                  {t('travelInfo.distances.compass.n')}
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
                  {t('travelInfo.distances.compass.s')}
                </div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
                  {t('travelInfo.distances.compass.w')}
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
                  {t('travelInfo.distances.compass.e')}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {distancesFromNashik.map((dest) => (
                  <div key={dest.key} className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4 text-center">
                    <p className="font-mono text-[10px] uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-1">
                      {t(`travelInfo.distances.directions.${directionMap[dest.key]}`)}
                    </p>
                    <h4 className="font-bold text-stone-900 dark:text-white mb-0.5">
                      {t(`travelInfo.places.${dest.key}`)}
                    </h4>
                    <p className="text-sm text-stone-700 dark:text-gray-300 font-semibold">{dest.distance}</p>
                    <p className="text-xs text-stone-400 dark:text-gray-500">
                      {dest.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LOCAL TRANSPORT */}
          <section>
            <header className="mb-7">
              <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
                {t('travelInfo.localTransport.label')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
                {t('travelInfo.localTransport.title')}
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {localTransport.map((transport) => (
                <div key={transport.key} className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm dark:shadow-none">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{transport.icon}</span>
                    <h3 className="font-bold text-stone-900 dark:text-white">
                      {t(`travelInfo.localTransport.modes.${transport.key}.type`)}
                    </h3>
                  </div>
                  <p className="text-stone-500 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                    {t(`travelInfo.localTransport.modes.${transport.key}.description`)}
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-1">
                    {transport.avgCost} {t('travelInfo.localTransport.perTrip')}
                  </p>
                  <p className="text-xs text-stone-400 dark:text-gray-500 leading-relaxed">
                    {t(`travelInfo.localTransport.modes.${transport.key}.tips`)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* EMERGENCY */}
          <section className="bg-stone-900 dark:bg-black rounded-2xl p-7 md:p-9">
            <h3 className="text-xl font-serif font-bold text-orange-50 mb-6 flex items-center gap-2">
              <span>🆘</span> {t('travelInfo.emergency.title')}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyNumbers.map((item) => (
                <div key={item.label} className="bg-orange-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <p className="text-xs font-medium text-stone-500 dark:text-gray-400">{item.label}</p>
                  <p className="text-lg font-bold text-orange-600 dark:text-orange-400">{item.number}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TravelInfoPage;