// import { useState } from 'react';
// import { Badge } from '../../../../components/ui/badge';
// import { travelInfo } from './data';
// import SectionHeader from './SectionHeader';

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
// }

// interface TravelInfoType {
//   howToReach: Record<TransportKey, HowToReachItem>;
//   localTransport: LocalTransport[];
//   distancesFromNashik: Distance[];
//   bestTimeToVisit: { seasons: Season[] };
// }

// const seasonBorder: Record<string, string> = {
//   'Best time to visit': 'border-green-500',
//   'Great for waterfalls': 'border-blue-500',
//   'Avoid if possible': 'border-orange-500',
// };

// const seasonBadge: Record<string, string> = {
//   'Best time to visit': 'bg-green-100 text-green-700',
//   'Great for waterfalls': 'bg-blue-100 text-blue-700',
//   'Avoid if possible': 'bg-orange-100 text-orange-700',
// };

// const TravelInfoPage = () => {
//   const [activeTransport, setActiveTransport] = useState<TransportKey>('byRoad');

//   const { howToReach, localTransport, distancesFromNashik, bestTimeToVisit } =
//     travelInfo as TravelInfoType;

//   const transportOptions: { key: TransportKey; label: string; icon: string }[] = [
//     { key: 'byRoad', label: 'By Road', icon: '🚗' },
//     { key: 'byRail', label: 'By Train', icon: '🚂' },
//     { key: 'byAir', label: 'By Air', icon: '✈️' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       {/* Page Content */}

//       <div
//   className="pt-8 pb-6 px-4 text-white"
//   style={{ background: "black" }}
// >
//   <div className="max-w-6xl mx-auto space-y-5">
    
//     <Badge className="bg-white text-blue-700 w-fit">
//       Travel Guide
//     </Badge>

//     <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//       Travel Information 🚗
//     </h1>

//     <p className="text-blue-100 text-lg max-w-2xl">
//       Everything you need to know to get to and around Nashik
//     </p>

//   </div>
// </div>
//       <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-16">

//         {/* Best Time to Visit */}
//         <section>
//           <SectionHeader
//             title="Best Time to Visit"
//             subtitle="Plan your trip according to Nashik's seasons"
//             emoji="🗓️"
//           />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {bestTimeToVisit.seasons.map((season) => (
//               <div
//                 key={season.season}
//                 className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 hover:shadow-lg transition ${
//                   seasonBorder[season.recommendation] ?? 'border-gray-300'
//                 }`}
//               >
//                 <div className="text-4xl mb-3">{season.icon}</div>
//                 <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
//                   {season.season}
//                 </h3>
//                 <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
//                   {season.weather}
//                 </p>

//                 <span
//                   className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
//                     seasonBadge[season.recommendation] ??
//                     'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   {season.recommendation}
//                 </span>

//                 <p className="text-gray-500 dark:text-gray-400 text-sm">
//                   {season.highlights}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* How to Reach */}
//         <section>
//           <SectionHeader
//             title="How to Reach Nashik"
//             subtitle="Multiple convenient ways to reach the wine capital"
//             emoji="🧭"
//           />

//           <div className="flex flex-wrap gap-3 mb-6">
//             {transportOptions.map((opt) => (
//               <button
//                 key={opt.key}
//                 onClick={() => setActiveTransport(opt.key)}
//                 className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm ${
//                   activeTransport === opt.key
//                     ? 'bg-blue-700 text-white shadow-md'
//                     : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
//                 }`}
//               >
//                 <span>{opt.icon}</span>
//                 <span>{opt.label}</span>
//               </button>
//             ))}
//           </div>

//           {howToReach[activeTransport] && (
//             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-8">
//               <div className="flex items-center gap-3 mb-3">
//                 <span className="text-4xl">
//                   {howToReach[activeTransport].icon}
//                 </span>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                   {howToReach[activeTransport].title}
//                 </h3>
//               </div>

//               <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
//                 {howToReach[activeTransport].description}
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {howToReach[activeTransport].options.map((opt, i) => (
//                   <div
//                     key={i}
//                     className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4"
//                   >
//                     <h4 className="font-semibold text-gray-900 dark:text-white">
//                       From {opt.from}
//                     </h4>

//                     <div className="text-sm text-gray-600 dark:text-gray-400">
//                       <p>📏 {opt.distance}</p>
//                       <p>⏱️ {opt.time}</p>
//                       {opt.trains && <p>🚂 {opt.trains}</p>}
//                       {opt.bus && <p>🚌 {opt.bus}</p>}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {howToReach[activeTransport].tips && (
//                 <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
//                   <p className="text-blue-800 dark:text-blue-300 text-sm">
//                     💡 <strong>Tip:</strong>{' '}
//                     {howToReach[activeTransport].tips}
//                   </p>
//                 </div>
//               )}
//             </div>
//           )}
//         </section>

//         {/* Distances */}
//         <section>
//           <SectionHeader
//             title="Distances from Nashik"
//             subtitle="Nashik's connectivity to major cities"
//             emoji="📏"
//           />

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {distancesFromNashik.map((dest) => (
//               <div
//                 key={dest.city}
//                 className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex items-center gap-4"
//               >
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                   🏙️
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-gray-900 dark:text-white">
//                     {dest.city}
//                   </h4>
//                   <p className="text-sm text-blue-700 font-semibold">
//                     {dest.distance}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     ⏱️ {dest.time}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Local Transport */}
//         <section>
//           <SectionHeader
//             title="Local Transport"
//             subtitle="Getting around Nashik"
//             emoji="🚌"
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {localTransport.map((transport) => (
//               <div
//                 key={transport.type}
//                 className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="text-3xl">{transport.icon}</span>
//                   <h3 className="font-bold text-gray-900 dark:text-white">
//                     {transport.type}
//                   </h3>
//                 </div>

//                 <p className="text-gray-500 text-sm mb-3">
//                   {transport.description}
//                 </p>

//                 <p className="text-green-700 text-sm font-medium">
//                   💰 {transport.avgCost}
//                 </p>

//                 <p className="text-xs text-gray-400 mt-2">
//                   💡 {transport.tips}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Emergency */}
//         <section className="bg-red-50 rounded-2xl p-6">
//           <h3 className="text-2xl font-bold text-red-700 mb-6">
//             🆘 Emergency Numbers
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { label: 'Police', number: '100', icon: '👮' },
//               { label: 'Ambulance', number: '108', icon: '🚑' },
//               { label: 'Fire', number: '101', icon: '🚒' },
//               { label: 'Tourist Help', number: '1800-111-363', icon: '🏛️' },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className="bg-white rounded-xl p-4 text-center shadow"
//               >
//                 <div className="text-3xl">{item.icon}</div>
//                 <p className="text-sm font-medium">{item.label}</p>
//                 <p className="text-xl font-bold text-red-600">
//                   {item.number}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default TravelInfoPage;




// import { useState } from 'react';
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

// const transportColors: Record<TransportKey, string> = {
//   byRoad: '#262421',
//   byRail: '#C2410C',
//   byAir: '#1D4E73',
// };

// const seasonColor: Record<string, string> = {
//   'Best time to visit': '#3F6B4F',
//   'Great for waterfalls': '#1D4E73',
//   'Avoid if possible': '#C2410C',
// };

// // Map compass directions to a position on an 8-point ring (N at top, clockwise)
// const directionAngle: Record<string, number> = {
//   North: 0,
//   Northeast: 45,
//   East: 90,
//   Southeast: 135,
//   South: 180,
//   Southwest: 225,
//   West: 270,
//   Northwest: 315,
// };

// const TravelInfoPage = () => {
//   const [activeTransport, setActiveTransport] = useState<TransportKey>('byRoad');

//   const { howToReach, localTransport, distancesFromNashik, bestTimeToVisit } =
//     travelInfo as TravelInfoType;

//   const transportOptions: { key: TransportKey; label: string; icon: string }[] = [
//     { key: 'byRoad', label: 'By Road', icon: '🚗' },
//     { key: 'byRail', label: 'By Train', icon: '🚂' },
//     { key: 'byAir', label: 'By Air', icon: '✈️' },
//   ];

//   const activeColor = transportColors[activeTransport];

//   return (
//     <div className="min-h-screen bg-[#F7F2E9]">
//       {/* HEADER */}
//       <div className="pt-16 pb-14 px-4 bg-[#262421] text-[#F7F2E9] relative overflow-hidden">
//         {/* faint route lines in background */}
//         <svg
//           className="absolute inset-0 w-full h-full opacity-[0.08]"
//           preserveAspectRatio="none"
//           viewBox="0 0 800 200"
//         >
//           <path d="M0,150 C200,50 400,180 800,40" stroke="#C2410C" strokeWidth="2" fill="none" />
//           <path d="M0,60 C250,160 500,20 800,140" stroke="#F7F2E9" strokeWidth="1.5" fill="none" />
//         </svg>

//         <div className="max-w-5xl mx-auto space-y-4 relative">
//           <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#C2410C]">
//             Routes In · Routes Around
//           </p>
//           <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
//             Travel Information
//           </h1>
//           <p className="text-[#F7F2E9]/70 text-lg max-w-xl leading-relaxed">
//             By road, rail, or air — how to get to Nashik, how to move once
//             you're here, and what to know before you go.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 md:px-8 py-14 space-y-20">
//         {/* BEST TIME TO VISIT */}
//         <section>
//           <header className="mb-7">
//             <p className="font-mono text-xs uppercase tracking-wide text-[#262421]/45">
//               Plan ahead
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#262421]">
//               Best Time to Visit
//             </h2>
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {bestTimeToVisit.seasons.map((season) => {
//               const color = seasonColor[season.recommendation] ?? '#52606D';
//               return (
//                 <div
//                   key={season.season}
//                   className="bg-white rounded-lg p-6 shadow-sm border-t-[3px]"
//                   style={{ borderTopColor: color }}
//                 >
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="text-3xl">{season.icon}</span>
//                     <span
//                       className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
//                       style={{ backgroundColor: color }}
//                     >
//                       {season.recommendation}
//                     </span>
//                   </div>
//                   <h3 className="font-bold text-[#262421] text-lg mb-1">
//                     {season.season}
//                   </h3>
//                   <p className="text-[#262421]/70 font-medium text-sm mb-2">
//                     {season.weather}
//                   </p>
//                   <p className="text-[#262421]/55 text-sm leading-relaxed">
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
//             <p className="font-mono text-xs uppercase tracking-wide text-[#262421]/45">
//               Getting here
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#262421]">
//               How to Reach Nashik
//             </h2>
//           </header>

//           {/* Route line tabs */}
//           <div className="flex gap-1 mb-0">
//             {transportOptions.map((opt) => {
//               const isActive = activeTransport === opt.key;
//               const color = transportColors[opt.key];
//               return (
//                 <button
//                   key={opt.key}
//                   onClick={() => setActiveTransport(opt.key)}
//                   className="flex-1 group"
//                 >
//                   <div
//                     className="h-1.5 rounded-full mb-3 transition-all"
//                     style={{
//                       backgroundColor: isActive ? color : '#262421',
//                       opacity: isActive ? 1 : 0.15,
//                     }}
//                   />
//                   <div
//                     className={`flex items-center justify-center gap-2 pb-3 font-medium text-sm transition-colors ${
//                       isActive ? '' : 'text-[#262421]/45 hover:text-[#262421]/70'
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
//               className="bg-white rounded-xl p-6 md:p-8 shadow-sm border-l-[3px]"
//               style={{ borderLeftColor: activeColor }}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <span className="text-3xl">{howToReach[activeTransport].icon}</span>
//                 <h3 className="text-xl font-bold text-[#262421]">
//                   {howToReach[activeTransport].title}
//                 </h3>
//               </div>

//               <p className="text-[#262421]/60 mb-6 text-sm leading-relaxed">
//                 {howToReach[activeTransport].description}
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {howToReach[activeTransport].options.map((opt, i) => (
//                   <div key={i} className="bg-[#F7F2E9] rounded-lg p-4">
//                     <h4 className="font-semibold text-[#262421] mb-1">
//                       From {opt.from}
//                     </h4>
//                     <div className="text-sm text-[#262421]/60 space-y-0.5">
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
//             <p className="font-mono text-xs uppercase tracking-wide text-[#262421]/45">
//               Connectivity
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#262421]">
//               Distances from Nashik
//             </h2>
//           </header>

//           <div className="relative bg-white rounded-xl shadow-sm p-6 md:p-10">
//             {/* N/E/S/W markers */}
//             <div className="hidden md:block">
//               <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-[#262421]/30">
//                 N
//               </div>
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-[#262421]/30">
//                 S
//               </div>
//               <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-[#262421]/30">
//                 W
//               </div>
//               <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-[#262421]/30">
//                 E
//               </div>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
//               {distancesFromNashik.map((dest) => (
//                 <div
//                   key={dest.city}
//                   className="bg-[#F7F2E9] rounded-lg p-4 text-center"
//                 >
//                   <p className="font-mono text-[10px] uppercase tracking-wide text-[#C2410C] mb-1">
//                     {dest.direction}
//                   </p>
//                   <h4 className="font-bold text-[#262421] mb-0.5">
//                     {dest.city}
//                   </h4>
//                   <p className="text-sm text-[#262421]/70 font-semibold">
//                     {dest.distance}
//                   </p>
//                   <p className="text-xs text-[#262421]/45">{dest.time}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* LOCAL TRANSPORT */}
//         <section>
//           <header className="mb-7">
//             <p className="font-mono text-xs uppercase tracking-wide text-[#262421]/45">
//               Around the city
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#262421]">
//               Local Transport
//             </h2>
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {localTransport.map((transport) => (
//               <div
//                 key={transport.type}
//                 className="bg-white rounded-lg p-5 shadow-sm"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="text-2xl">{transport.icon}</span>
//                   <h3 className="font-bold text-[#262421]">{transport.type}</h3>
//                 </div>
//                 <p className="text-[#262421]/60 text-sm mb-3 leading-relaxed">
//                   {transport.description}
//                 </p>
//                 <p className="text-[#3F6B4F] text-sm font-semibold mb-1">
//                   {transport.avgCost}
//                 </p>
//                 <p className="text-xs text-[#262421]/40 leading-relaxed">
//                   {transport.tips}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* EMERGENCY */}
//         <section className="bg-[#262421] rounded-2xl p-7 md:p-9">
//           <h3 className="text-xl font-serif font-bold text-[#F7F2E9] mb-6 flex items-center gap-2">
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
//                 className="bg-[#F7F2E9] rounded-lg p-4 text-center"
//               >
//                 <div className="text-2xl mb-1">{item.icon}</div>
//                 <p className="text-xs font-medium text-[#262421]/60">
//                   {item.label}
//                 </p>
//                 <p className="text-lg font-bold text-[#C2410C]">
//                   {item.number}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default TravelInfoPage;




import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { travelInfo } from './data';

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
  direction: string;
}

interface TravelInfoType {
  howToReach: Record<TransportKey, HowToReachItem>;
  localTransport: LocalTransport[];
  distancesFromNashik: Distance[];
  bestTimeToVisit: { seasons: Season[] };
}

// Light/dark pairs for each transport mode and season so inline-style
// driven colors stay theme-aware without hardcoding a single hex.
const transportColors: Record<TransportKey, { light: string; dark: string }> = {
  byRoad: { light: '#262421', dark: '#E7E2D9' },
  byRail: { light: '#C2410C', dark: '#FB923C' },
  byAir: { light: '#1D4E73', dark: '#60A5FA' },
};

const seasonColor: Record<string, { light: string; dark: string }> = {
  'Best time to visit': { light: '#3F6B4F', dark: '#6EE7A0' },
  'Great for waterfalls': { light: '#1D4E73', dark: '#60A5FA' },
  'Avoid if possible': { light: '#C2410C', dark: '#FB923C' },
};

// Map compass directions to a position on an 8-point ring (N at top, clockwise)
// const directionAngle: Record<string, number> = {
//   North: 0,
//   Northeast: 45,
//   East: 90,
//   Southeast: 135,
//   South: 180,
//   Southwest: 225,
//   West: 270,
//   Northwest: 315,
// };

const useThemeAwareColor = () => {
  // Resolves a light/dark color pair based on the current `dark` class on <html>.
  // Re-checked on each render, which is fine since this only runs on toggle clicks.
  const isDark =
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark');
  return (pair: { light: string; dark: string }) => (isDark ? pair.dark : pair.light);
};

const TravelInfoPage = () => {
  const [activeTransport, setActiveTransport] = useState<TransportKey>('byRoad');
  const resolveColor = useThemeAwareColor();

  const { howToReach, localTransport, distancesFromNashik, bestTimeToVisit } =
    travelInfo as TravelInfoType;

  const transportOptions: { key: TransportKey; label: string; icon: string }[] = [
    { key: 'byRoad', label: 'By Road', icon: '🚗' },
    { key: 'byRail', label: 'By Train', icon: '🚂' },
    { key: 'byAir', label: 'By Air', icon: '✈️' },
  ];

  const activeColor = resolveColor(transportColors[activeTransport]);

  return (
    <><Helmet>
<title>Travel Information | Explore Nashik</title>

<meta
name="description"
content="Travel information, transport, weather and useful tips for visiting Nashik."
/>
</Helmet>
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
      {/* HEADER */}
      <div className="pt-16 pb-14 px-4 bg-stone-900 dark:bg-black text-orange-50 relative overflow-hidden">
        {/* faint route lines in background */}
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
            Routes In · Routes Around
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Travel Information
          </h1>
          <p className="text-orange-50/70 text-lg max-w-xl leading-relaxed">
            By road, rail, or air — how to get to Nashik, how to move once
            you're here, and what to know before you go.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-14 space-y-20">
        {/* BEST TIME TO VISIT */}
        <section>
          <header className="mb-7">
            <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
              Plan ahead
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
              Best Time to Visit
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bestTimeToVisit.seasons.map((season) => {
              const pair = seasonColor[season.recommendation] ?? {
                light: '#52606D',
                dark: '#9CA3AF',
              };
              const color = resolveColor(pair);
              return (
                <div
                  key={season.season}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-none border-t-[3px]"
                  style={{ borderTopColor: color }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{season.icon}</span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white dark:text-gray-900"
                      style={{ backgroundColor: color }}
                    >
                      {season.recommendation}
                    </span>
                  </div>
                  <h3 className="font-bold text-stone-900 dark:text-white text-lg mb-1">
                    {season.season}
                  </h3>
                  <p className="text-stone-700 dark:text-gray-300 font-medium text-sm mb-2">
                    {season.weather}
                  </p>
                  <p className="text-stone-500 dark:text-gray-400 text-sm leading-relaxed">
                    {season.highlights}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW TO REACH — route line selector */}
        <section>
          <header className="mb-7">
            <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
              Getting here
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
              How to Reach Nashik
            </h2>
          </header>

          {/* Route line tabs */}
          <div className="flex gap-1 mb-0">
            {transportOptions.map((opt) => {
              const isActive = activeTransport === opt.key;
              const color = resolveColor(transportColors[opt.key]);
              return (
                <button
                  key={opt.key}
                  onClick={() => setActiveTransport(opt.key)}
                  className="flex-1 group"
                >
                  <div
                    className="h-1.5 rounded-full mb-3 transition-all dark:bg-gray-600"
                    style={{
                      backgroundColor: isActive ? color : undefined,
                      opacity: isActive ? 1 : undefined,
                    }}
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

          {howToReach[activeTransport] && (
            <div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm dark:shadow-none border-l-[3px]"
              style={{ borderLeftColor: activeColor }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{howToReach[activeTransport].icon}</span>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                  {howToReach[activeTransport].title}
                </h3>
              </div>

              <p className="text-stone-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {howToReach[activeTransport].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {howToReach[activeTransport].options.map((opt, i) => (
                  <div key={i} className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-stone-900 dark:text-white mb-1">
                      From {opt.from}
                    </h4>
                    <div className="text-sm text-stone-500 dark:text-gray-400 space-y-0.5">
                      <p>{opt.distance}</p>
                      <p>{opt.time}</p>
                      {opt.trains && <p>🚂 {opt.trains}</p>}
                      {opt.bus && <p>🚌 {opt.bus}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {howToReach[activeTransport].tips && (
                <div
                  className="mt-5 rounded-lg p-4 text-sm"
                  style={{ backgroundColor: `${activeColor}14`, color: activeColor }}
                >
                  <strong>Tip:</strong> {howToReach[activeTransport].tips}
                </div>
              )}
            </div>
          )}
        </section>

        {/* DISTANCES — compass layout */}
        <section>
          <header className="mb-7">
            <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
              Connectivity
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
              Distances from Nashik
            </h2>
          </header>

          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-none p-6 md:p-10">
            {/* N/E/S/W markers */}
            <div className="hidden md:block">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
                N
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
                S
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
                W
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-stone-400/60 dark:text-gray-600">
                E
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {distancesFromNashik.map((dest) => (
                <div
                  key={dest.city}
                  className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4 text-center"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-1">
                    {dest.direction}
                  </p>
                  <h4 className="font-bold text-stone-900 dark:text-white mb-0.5">
                    {dest.city}
                  </h4>
                  <p className="text-sm text-stone-700 dark:text-gray-300 font-semibold">
                    {dest.distance}
                  </p>
                  <p className="text-xs text-stone-400 dark:text-gray-500">{dest.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL TRANSPORT */}
        <section>
          <header className="mb-7">
            <p className="font-mono text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-500">
              Around the city
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
              Local Transport
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {localTransport.map((transport) => (
              <div
                key={transport.type}
                className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{transport.icon}</span>
                  <h3 className="font-bold text-stone-900 dark:text-white">{transport.type}</h3>
                </div>
                <p className="text-stone-500 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                  {transport.description}
                </p>
                <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-1">
                  {transport.avgCost}
                </p>
                <p className="text-xs text-stone-400 dark:text-gray-500 leading-relaxed">
                  {transport.tips}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EMERGENCY */}
        <section className="bg-stone-900 dark:bg-black rounded-2xl p-7 md:p-9">
          <h3 className="text-xl font-serif font-bold text-orange-50 mb-6 flex items-center gap-2">
            <span>🆘</span> Emergency Numbers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Police', number: '100', icon: '👮' },
              { label: 'Ambulance', number: '108', icon: '🚑' },
              { label: 'Fire', number: '101', icon: '🚒' },
              { label: 'Tourist Helpline', number: '1800-111-363', icon: '🏛️' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-orange-50 dark:bg-gray-800 rounded-lg p-4 text-center"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-xs font-medium text-stone-500 dark:text-gray-400">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                  {item.number}
                </p>
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