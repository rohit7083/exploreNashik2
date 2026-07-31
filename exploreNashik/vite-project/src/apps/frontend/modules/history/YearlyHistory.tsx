


// import React, { useState } from "react";
// import InfoOfNashik from "./IntroOfNashik";
// /* ================= TYPES ================= */
// interface TimelineItem {
//   year: string;
//   era: string;
//   title: string;
//   description: string;
//   icon: string;
//   stratum: string; // hex color representing this era's "layer"
// }

// /* ================= DATA ================= */
// const timelineData: TimelineItem[] = [
//   {
//     year: "~2000 BCE",
//     era: "Vedic Age",
//     title: "Nashik in Ancient Texts",
//     description:
//       "Nashik, known in ancient times as Padmavati, Janasthana, and Trinkha, holds a sacred place in Indian mythology and early history. It is prominently mentioned in the Ramayana, where Lord Rama, along with Sita and Lakshmana, spent a significant part of their 14-year exile in the forest region of Panchavati. Sages performed rituals, meditation, and teaching along its riverbanks, shaping its identity as a pilgrimage destination for centuries to come.",
//     icon: "📜",
//     stratum: "#A8763E",
//   },
//   {
//     year: "1st century BCE",
//     era: "Buddhist Period",
//     title: "A Center of Monks and Merchants",
//     description:
//       "Under the Satavahana dynasty, Nashik emerged as a major center for Buddhism and trade. Its most remarkable legacy is the Pandav Leni caves — 24 rock-cut monasteries and prayer halls carved into the Trirashmi hills. Inscriptions found there record donors, merchants, and rulers, evidence of a city thriving on trade routes connecting northern and southern India.",
//     icon: "🏛️",
//     stratum: "#8C7355",
//   },
//   {
//     year: "~100 CE",
//     era: "Satavahana Rule",
//     title: "Provincial Capital",
//     description:
//       "By 100 CE, Nashik had become an administrative and economic center under the Satavahanas. Inscriptions in the Nashik caves from this period are among the most important historical records of the dynasty, naming kings, traders, and monks. Economic stability and religious tolerance laid the foundation for the city's long-term importance.",
//     icon: "🏺",
//     stratum: "#B5532C",
//   },
//   {
//     year: "700–1000 CE",
//     era: "Medieval Period",
//     title: "Rise of Shaiva Worship",
//     description:
//       "Nashik grew into a major center for Shaivism, the worship of Lord Shiva. The Trimbakeshwar Temple, one of the twelve sacred Jyotirlingas, was established in this period and became a major pilgrimage site. The Godavari's origin nearby deepened the city's religious standing — pilgrims arrived in growing numbers to bathe and seek blessings.",
//     icon: "🛕",
//     stratum: "#9B2C2C",
//   },
//   {
//     year: "1000–1300 CE",
//     era: "Yadava Dynasty",
//     title: "Temples in Black Stone",
//     description:
//       "Under the Yadavas, ruling from Devagiri, Nashik saw significant growth in temple architecture, much of it in the Hemadpanthi style — dense, dark basalt carved with intricate detail. Proximity to the Godavari kept Nashik a pilgrimage destination, while trade and agriculture expanded alongside it.",
//     icon: "👑",
//     stratum: "#3D3833",
//   },
//   {
//     year: "1792",
//     era: "Maratha & Peshwa Era",
//     title: "Kalaram Temple Built",
//     description:
//       "Sardar Rangarao Odhekar built the Kalaram Temple in Panchavati after the Maratha victory era, dedicating it to a black-stone idol of Rama recovered from the Godavari. The Trimbakeshwar Temple was also rebuilt and expanded under Peshwa Balaji Bajirao, cementing Nashik's place as both a spiritual and administrative center.",
//     icon: "⚔️",
//     stratum: "#1F4B43",
//   },
//   {
//     year: "1818",
//     era: "British Period",
//     title: "Colonial Administration Begins",
//     description:
//       "After the Marathas' defeat in the Third Anglo-Maratha War, Nashik came under British rule. The East India Company built roads, government offices, and a central jail, introducing Western education and legal systems — modernizing infrastructure while unsettling traditional local autonomy.",
//     icon: "🏛️",
//     stratum: "#2C4A6E",
//   },
//   {
//     year: "2 Mar 1930",
//     era: "Freedom Movement",
//     title: "Kalaram Temple Entry Satyagraha",
//     description:
//       "Dr. B.R. Ambedkar led a landmark protest at the Kalaram Temple, demanding the right for Dalits to enter Hindu temples. Thousands joined the peaceful demonstration. Though immediate temple entry was not won, the satyagraha became a defining moment in India's struggle against caste-based exclusion.",
//     icon: "✊",
//     stratum: "#A61E1E",
//   },
//   {
//     year: "Post-1947",
//     era: "Independence Era",
//     title: "An Industrial City Takes Shape",
//     description:
//       "After independence, Nashik transformed into a major industrial hub. MIDC zones drew engineering, manufacturing, and defense industries — including the Currency Note Press and an Ordnance Factory — balancing the city's ancient religious identity with new economic weight.",
//     icon: "🏭",
//     stratum: "#52606D",
//   },
//   {
//     year: "2000s–Today",
//     era: "Modern Era",
//     title: "India's Wine Capital",
//     description:
//       "Favorable climate and soil turned Nashik into India's wine country, anchored by Sula Vineyards and now home to over 100 wineries. Annual festivals and wine tourism draw visitors nationwide — a modern layer atop four millennia of sacred and political history.",
//     icon: "🍷",
//     stratum: "#5B1A2E",
//   },
// ];

// /* ================= COMPONENT ================= */
// const HistoryPage: React.FC = () => {
//   const [activeEra, setActiveEra] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
//       {/* HEADER */}
//       <div className="pt-20 pb-16 px-4 bg-stone-900 dark:bg-black text-orange-50 relative overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg, transparent, transparent 38px, currentColor 38px, currentColor 40px)",
//           }}
//         />
//         <div className="max-w-3xl mx-auto space-y-4 relative">
//           <p className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400 dark:text-amber-300">
//             A Stratigraphy of Nashik · 2000 BCE — Today
//           </p>
//           <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
//             History &amp; Culture
//           </h1>
//           <p className="text-orange-50/70 text-lg max-w-xl leading-relaxed">
//             Four thousand years don't stack neatly. They settle in layers —
//             myth pressed under empire, empire under devotion, devotion under
//             steel and vineyard. Scroll down through the strata.
//           </p>
//         </div>
//       </div>

//       {/* STRATA TIMELINE */}
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <div className="relative flex">
//           {/* CORE SAMPLE COLUMN */}
//           <div className="w-3 md:w-5 flex-shrink-0 rounded-full overflow-hidden shadow-inner mr-6 md:mr-10">
//             <div className="flex flex-col h-full">
//               {timelineData.map((item) => (
//                 <div
//                   key={item.year}
//                   className="flex-1 dark:opacity-90"
//                   style={{ backgroundColor: item.stratum, minHeight: "180px" }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* ENTRIES */}
//           <div className="flex-1 space-y-10 min-w-0">
//             {timelineData.map((item) => {
//               const isActive = activeEra === item.year;

//               return (
//                 <div
//                   key={item.year}
//                   className="relative"
//                   style={{ minHeight: "180px" }}
//                 >
//                   {/* connector tick */}
//                   <div
//                     className="absolute -left-[34px] md:-left-[50px] top-6 w-6 md:w-8 h-px dark:opacity-90"
//                     style={{ backgroundColor: item.stratum }}
//                   />

//                   <button
//                     onClick={() => setActiveEra(isActive ? null : item.year)}
//                     className="w-full text-left bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md dark:hover:shadow-none transition-shadow border border-black/5 dark:border-white/5"
//                   >
//                     <div className="flex items-start gap-4">
//                       <span
//                         className="font-mono text-xs px-2 py-1 rounded text-white whitespace-nowrap mt-0.5 dark:opacity-90"
//                         style={{ backgroundColor: item.stratum }}
//                       >
//                         {item.year}
//                       </span>
//                       <div className="min-w-0">
//                         <p className="text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-400 font-medium mb-0.5">
//                           {item.era}
//                         </p>
//                         <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white flex items-center gap-2">
//                           <span aria-hidden="true">{item.icon}</span>
//                           {item.title}
//                         </h3>
//                       </div>
//                     </div>

//                     <p
//                       className={`text-sm text-stone-600 dark:text-gray-400 leading-relaxed mt-3 ${
//                         isActive ? "" : "line-clamp-2"
//                       }`}
//                     >
//                       {item.description}
//                     </p>

//                     <span
//                       className="text-xs mt-3 font-semibold inline-block dark:opacity-90"
//                       style={{ color: item.stratum }}
//                     >
//                       {isActive ? "▲ Show less" : "▼ Read more"}
//                     </span>
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <InfoOfNashik />
//     </div>
//   );
// };

// export default HistoryPage;


import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InfoOfNashik from "./IntroOfNashik";

/* ================= TYPES ================= */
interface TimelineItem {
  key: string;
  year: string;
  icon: string;
  stratum: string;
}

/* ================= DATA (non-translatable / structural) ================= */
const timelineData: TimelineItem[] = [
  { key: "vedic", year: "~2000 BCE", icon: "📜", stratum: "#A8763E" },
  { key: "buddhist", year: "1st century BCE", icon: "🏛️", stratum: "#8C7355" },
  { key: "satavahana", year: "~100 CE", icon: "🏺", stratum: "#B5532C" },
  { key: "medieval", year: "700–1000 CE", icon: "🛕", stratum: "#9B2C2C" },
  { key: "yadava", year: "1000–1300 CE", icon: "👑", stratum: "#3D3833" },
  { key: "maratha", year: "1792", icon: "⚔️", stratum: "#1F4B43" },
  { key: "british", year: "1818", icon: "🏛️", stratum: "#2C4A6E" },
  { key: "satyagraha", year: "2 Mar 1930", icon: "✊", stratum: "#A61E1E" },
  { key: "independence", year: "Post-1947", icon: "🏭", stratum: "#52606D" },
  { key: "modern", year: "2000s–Today", icon: "🍷", stratum: "#5B1A2E" },
];

/* ================= COMPONENT ================= */
const HistoryPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeEra, setActiveEra] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
      {/* HEADER */}
      <div className="pt-20 pb-16 px-4 bg-stone-900 dark:bg-black text-orange-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 38px, currentColor 38px, currentColor 40px)",
          }}
        />
        <div className="max-w-3xl mx-auto space-y-4 relative">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400 dark:text-amber-300">
            {t("history.hero.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            {t("history.hero.title")}
          </h1>
          <p className="text-orange-50/70 text-lg max-w-xl leading-relaxed">
            {t("history.hero.description")}
          </p>
        </div>
      </div>

      {/* STRATA TIMELINE */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative flex">
          {/* CORE SAMPLE COLUMN */}
          <div className="w-3 md:w-5 flex-shrink-0 rounded-full overflow-hidden shadow-inner mr-6 md:mr-10">
            <div className="flex flex-col h-full">
              {timelineData.map((item) => (
                <div
                  key={item.key}
                  className="flex-1 dark:opacity-90"
                  style={{ backgroundColor: item.stratum, minHeight: "180px" }}
                />
              ))}
            </div>
          </div>

          {/* ENTRIES */}
          <div className="flex-1 space-y-10 min-w-0">
            {timelineData.map((item) => {
              const isActive = activeEra === item.key;

              return (
                <div
                  key={item.key}
                  className="relative"
                  style={{ minHeight: "180px" }}
                >
                  {/* connector tick */}
                  <div
                    className="absolute -left-[34px] md:-left-[50px] top-6 w-6 md:w-8 h-px dark:opacity-90"
                    style={{ backgroundColor: item.stratum }}
                  />

                  <button
                    onClick={() => setActiveEra(isActive ? null : item.key)}
                    className="w-full text-left bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md dark:hover:shadow-none transition-shadow border border-black/5 dark:border-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="font-mono text-xs px-2 py-1 rounded text-white whitespace-nowrap mt-0.5 dark:opacity-90"
                        style={{ backgroundColor: item.stratum }}
                      >
                        {item.year}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wide text-stone-500/70 dark:text-gray-400 font-medium mb-0.5">
                          {t(`history.timeline.${item.key}.era`)}
                        </p>
                        <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white flex items-center gap-2">
                          <span aria-hidden="true">{item.icon}</span>
                          {t(`history.timeline.${item.key}.title`)}
                        </h3>
                      </div>
                    </div>

                    <p
                      className={`text-sm text-stone-600 dark:text-gray-400 leading-relaxed mt-3 ${
                        isActive ? "" : "line-clamp-2"
                      }`}
                    >
                      {t(`history.timeline.${item.key}.description`)}
                    </p>

                    <span
                      className="text-xs mt-3 font-semibold inline-block dark:opacity-90"
                      style={{ color: item.stratum }}
                    >
                      {isActive
                        ? `▲ ${t("history.showLess")}`
                        : `▼ ${t("history.readMore")}`}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <InfoOfNashik />
    </div>
  );
};

export default HistoryPage;