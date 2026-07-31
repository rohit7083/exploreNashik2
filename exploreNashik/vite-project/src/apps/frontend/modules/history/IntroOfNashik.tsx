// import React from "react";
// /* ================= TYPES ================= */
// interface Highlight {
//   icon: string;
//   title: string;
//   description: string;
// }

// interface Comparison {
//   label: string;
//   nashik: string;
// }

// /* ================= DATA ================= */
// const highlights: Highlight[] = [
//   {
//     icon: "🍇",
//     title: "India's Grape Capital",
//     description:
//       "Nashik is the country's leading grape producer, growing more than half of India's grape exports. The same hills that grow table grapes also feed its wine industry.",
//   },
//   {
//     icon: "🍷",
//     title: "India's Wine Capital",
//     description:
//       "Home to over 50 wineries, including Sula — the winery that put Indian wine on the map in 1999. Roughly half of all wineries in Maharashtra sit in this one district.",
//   },
//   {
//     icon: "🛕",
//     title: "A Living Pilgrimage City",
//     description:
//       "Trimbakeshwar's Jyotirlinga, Ramkund, and Panchavati aren't museum pieces — they're active sites of daily worship, exactly as they've been for centuries.",
//   },
//   {
//     icon: "🧅",
//     title: "The Onion Capital, Too",
//     description:
//       "Less photographed than the vineyards, but just as real: Nashik district is one of India's largest onion-producing regions, especially around Lasalgaon's wholesale market.",
//   },
//   {
//     icon: "🙏",
//     title: "One of Four Kumbh Sites",
//     description:
//       "Nashik-Trimbakeshwar is one of only four places in India that host the Kumbh Mela, alongside Haridwar, Prayagraj, and Ujjain — sharing the Simhastha cycle with Ujjain alone.",
//   },
//   {
//     icon: "⛰️",
//     title: "Western Ghats on Its Doorstep",
//     description:
//       "Hill forts, the Anjneri range, and trekking country sit within an hour of the city center — a side of Nashik that rarely makes the postcards.",
//   },
// ];

// const comparisons: Comparison[] = [
//   {
//     label: "vs. Varanasi",
//     nashik:
//       "Both are sacred river cities, but Nashik pairs its temples with a modern wine industry — a combination no other Indian pilgrimage city offers.",
//   },
//   {
//     label: "vs. Goa",
//     nashik:
//       "Where Goa built its identity around beaches, Nashik built one around vineyards in the hills — India's closest answer to wine country, without the coastline.",
//   },
//   {
//     label: "vs. Pune",
//     nashik:
//       "Pune is the bigger metro nearby, but Nashik holds the older, deeper religious history — the Ramayana connection runs through Nashik, not Pune.",
//   },
// ];

// /* ================= COMPONENT ================= */
// const InfoOfNashik: React.FC = () => {
//   return (
//     <section className="bg-amber-50 dark:bg-gray-800/50 py-20 px-4">
//       <div className="max-w-5xl mx-auto space-y-16">
//         {/* INTRO */}
//         <div className="text-center space-y-3">
//           <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-600 dark:text-orange-400">
//             One layer, many identities
//           </p>
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white">
//             What Makes Nashik Different
//           </h2>
//           <p className="text-stone-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             Most Indian cities pick one identity and keep it. Nashik never
//             picked just one — it's a pilgrimage town, a grape-growing
//             district, and a wine region, all running at the same time, all
//             genuinely true.
//           </p>
//         </div>

//         {/* HIGHLIGHTS GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {highlights.map((item) => (
//             <div
//               key={item.title}
//               className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm"
//             >
//               <div className="text-2xl mb-2">{item.icon}</div>
//               <h3 className="font-serif font-bold text-stone-900 dark:text-white mb-1.5">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* COMPARISON */}
//         <div>
//           <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white mb-5 text-center">
//             How Nashik Compares
//           </h3>
//           <div className="space-y-3">
//             {comparisons.map((item) => (
//               <div
//                 key={item.label}
//                 className="flex flex-col sm:flex-row gap-2 sm:gap-5 bg-white dark:bg-gray-800 rounded-lg p-4 sm:items-start"
//               >
//                 <span className="font-mono text-xs uppercase tracking-wide text-teal-600 dark:text-teal-400 sm:w-28 flex-shrink-0 pt-0.5">
//                   {item.label}
//                 </span>
//                 <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
//                   {item.nashik}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
         
//       </div>
//     </section>
//   );
// };

// export default InfoOfNashik;



import React from "react";
import { useTranslation } from "react-i18next";

/* ================= TYPES ================= */
interface Highlight {
  key: string;
  icon: string;
}

interface Comparison {
  key: string;
  icon: string;
}

/* ================= DATA (non-translatable / structural) ================= */
const highlights: Highlight[] = [
  { key: "grapeCapital", icon: "🍇" },
  { key: "wineCapital", icon: "🍷" },
  { key: "pilgrimageCity", icon: "🛕" },
  { key: "onionCapital", icon: "🧅" },
  { key: "kumbhSite", icon: "🙏" },
  { key: "westernGhats", icon: "⛰️" },
];

const comparisons: Comparison[] = [
  { key: "varanasi", icon: "vs. Varanasi" },
  { key: "goa", icon: "vs. Goa" },
  { key: "pune", icon: "vs. Pune" },
];

/* ================= COMPONENT ================= */
const InfoOfNashik: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-amber-50 dark:bg-gray-800/50 py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* INTRO */}
        <div className="text-center space-y-3">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-600 dark:text-orange-400">
            {t("infoOfNashik.intro.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white">
            {t("infoOfNashik.intro.title")}
          </h2>
          <p className="text-stone-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("infoOfNashik.intro.description")}
          </p>
        </div>

        {/* HIGHLIGHTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item) => (
            <div
              key={item.key}
              className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-serif font-bold text-stone-900 dark:text-white mb-1.5">
                {t(`infoOfNashik.highlights.${item.key}.title`)}
              </h3>
              <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
                {t(`infoOfNashik.highlights.${item.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* COMPARISON */}
        <div>
          <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white mb-5 text-center">
            {t("infoOfNashik.comparison.title")}
          </h3>
          <div className="space-y-3">
            {comparisons.map((item) => (
              <div
                key={item.key}
                className="flex flex-col sm:flex-row gap-2 sm:gap-5 bg-white dark:bg-gray-800 rounded-lg p-4 sm:items-start"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-teal-600 dark:text-teal-400 sm:w-28 flex-shrink-0 pt-0.5">
                  {t(`infoOfNashik.comparison.${item.key}.label`)}
                </span>
                <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
                  {t(`infoOfNashik.comparison.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoOfNashik;