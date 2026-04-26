import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";

/* ================= TYPES ================= */
interface TimelineItem {
  year: string;
  era: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

/* ================= DATA ================= */
const timelineData: TimelineItem[] = [
  {
    year: "2000 BC",
    era: "Ancient Period",
    title: "Vedic Age – Nashik in Ancient Texts",
    description:
      "Nashik, known in ancient times as Padmavati, Janasthana, and Trinkha, holds a sacred place in Indian mythology and early history. It is prominently mentioned in the Ramayana, where Lord Rama, along with Sita and Lakshmana, spent a significant part of their 14-year exile in the forest region of Panchvati. This association made Nashik a spiritually revered land. The region was surrounded by dense forests, flowing rivers, and hermitages where sages (rishis) performed rituals, meditation, and teaching. Nashik gradually evolved into a center of Vedic knowledge and religious discourse. The presence of sacred groves, riverbanks, and spiritual communities made it an important hub for early Hindu traditions, shaping its identity as a pilgrimage destination for centuries to come.",
    icon: "📜",
    color: "bg-amber-500",
  },
  {
    year: "1 Century BC",
    era: "Buddhist Period",
    title: "Nashik as a Buddhist Center",
    description:
      "During the reign of the Satavahana dynasty, Nashik emerged as a major center for Buddhism and trade. The most remarkable contribution of this era is the Pandav Leni caves, a group of 24 intricately carved rock-cut caves located in the Trirashmi hills. These caves served as monasteries (viharas) and prayer halls (chaityas) for Buddhist monks. The architecture reflects advanced engineering and artistic excellence of the time. Inscriptions found in these caves provide valuable information about donors, merchants, and rulers who contributed to their construction. Nashik's location on ancient trade routes connecting northern and southern India made it a thriving commercial hub, which further supported the growth of religious institutions and cultural exchange.",
    icon: "🏛️",
    color: "bg-yellow-600",
  },
  {
    year: "100 AD",
    era: "Satavahana Dynasty",
    title: "Satavahana Rule",
    description:
      "By 100 AD, Nashik had become an important administrative and economic center under the Satavahana dynasty. The city functioned as a provincial capital, facilitating governance, trade, and religious activities. The inscriptions found in Nashik caves from this period are considered among the most important historical records, mentioning kings, traders, monks, and donations made for religious purposes. The Satavahanas promoted both economic stability and religious harmony, supporting Buddhist institutions while also encouraging trade networks that connected different regions of India. Nashik's prosperity during this period laid the foundation for its long-term importance in Indian history.",
    icon: "🏺",
    color: "bg-orange-500",
  },
  {
    year: "700-1000 AD",
    era: "Medieval Period",
    title: "Shaiva Religious Importance",
    description:
      "Between 700 and 1000 AD, Nashik grew into a major center for Shaivism, the worship of Lord Shiva. The Trimbakeshwar Temple, one of the twelve sacred Jyotirlingas, was established during this period and became a major pilgrimage destination. The origin of the Godavari River near Nashik added to its religious significance, as the river is considered one of the holiest in India. Pilgrims began to visit Nashik in large numbers to perform rituals, take holy dips, and seek spiritual blessings. The city's identity as a religious hub was further strengthened by the development of temples, sacred ghats, and ritual practices that continue even today.",
    icon: "🛕",
    color: "bg-red-600",
  },
  {
    year: "1000-1300 AD",
    era: "Yadava Dynasty",
    title: "Yadava Kingdom",
    description:
      "During the Yadava dynasty, with its capital at Devagiri, Nashik experienced significant growth in culture, architecture, and religion. The rulers promoted temple construction, leading to the development of several structures built in the Hemadpanthi style, known for its use of black stone and intricate carvings. Nashik continued to flourish as a pilgrimage destination due to its proximity to the Godavari River. Trade and agriculture also developed during this period, supporting the local economy. The Yadava rule contributed greatly to the preservation and expansion of Nashik’s cultural and religious heritage.",
    icon: "👑",
    color: "bg-purple-600",
  },
  {
    year: "1600-1700 AD",
    era: "Maratha Empire",
    title: "Peshwa Era – Kalaram Temple Built",
    description:
      "Under the Maratha Empire and later the Peshwa administration, Nashik saw remarkable development in infrastructure, religion, and urban growth. One of the most iconic landmarks built during this period is the Kalaram Temple, constructed in 1792 by Sardar Rangarao Odhekar. This temple became a major center of devotion. The Trimbakeshwar Temple was also reconstructed and enhanced during the reign of Peshwa Balaji Bajirao. Nashik grew as a spiritual and administrative center, attracting pilgrims, traders, and scholars. The Maratha period played a crucial role in shaping the cultural identity of the city.",
    icon: "⚔️",
    color: "bg-green-700",
  },
  {
    year: "1818",
    era: "British Period",
    title: "British Rule Begins",
    description:
      "In 1818, after the defeat of the Maratha Empire in the Third Anglo-Maratha War, Nashik came under British rule. The British East India Company transformed Nashik into an administrative center by building infrastructure such as roads, government offices, and a central jail. Western education and legal systems were introduced, bringing significant changes to society. While British rule modernized certain aspects of governance, it also altered traditional systems and local autonomy. Nashik continued to develop as a regional center during this period.",
    icon: "🏛️",
    color: "bg-blue-600",
  },
  {
    year: "1930",
    era: "Freedom Movement",
    title: "Kalaram Temple Entry Movement",
    description:
      "In 1930, Nashik became a focal point of social reform when Dr. B.R. Ambedkar led the Kalaram Temple Entry Movement. This historic protest aimed to challenge caste discrimination and demand equal rights for Dalits to enter Hindu temples. Thousands of followers joined Ambedkar in a peaceful demonstration at the Kalaram Temple on March 2, 1930. Although immediate success was limited, the movement played a crucial role in raising awareness about social injustice and laid the groundwork for future reforms in Indian society.",
    icon: "✊",
    color: "bg-indigo-600",
  },
  {
    year: "1947",
    era: "Post Independence",
    title: "Industrial Growth",
    description:
      "After India gained independence in 1947, Nashik transitioned into a major industrial hub. The establishment of MIDC (Maharashtra Industrial Development Corporation) zones attracted industries in sectors such as engineering, manufacturing, and defense. Key institutions like the Currency Note Press and the Ordnance Factory were set up, boosting employment and economic growth. Nashik’s transformation into an industrial city balanced its traditional religious identity with modern development.",
    icon: "🏭",
    color: "bg-gray-600",
  },
  {
    year: "2000s",
    era: "Modern Era",
    title: "Wine Capital of India",
    description:
      "In the early 2000s, Nashik emerged as the wine capital of India with the establishment of Sula Vineyards. Favorable climate conditions and soil quality made the region ideal for grape cultivation. Over time, Nashik became home to more than 100 wineries, producing a wide variety of wines. The annual SulaFest and wine tourism attracted visitors from across India and abroad. Today, Nashik represents a perfect blend of ancient heritage and modern lifestyle, making it one of India’s most unique and evolving cities.",
    icon: "🍷",
    color: "bg-red-800",
  },
];

/* ================= COMPONENT ================= */
const HistoryPage: React.FC = () => {
  const [activeEra, setActiveEra] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* HEADER */}
    <div
  className="pt-10 pb-8 px-4 text-left text-white"
  style={{ background: "black" }}
>
  <div className="max-w-6xl mx-auto space-y-5">
    
    <Badge className="bg-white text-blue-700 w-fit">
      History & Culture
    </Badge>

    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      History & Culture 📖
    </h1>

    <p className="text-amber-100 text-lg max-w-2xl">
      Explore 4000 years of Nashik's rich history
    </p>

  </div>
</div>
      {/* TIMELINE */}
      <div className="container mx-auto px-4 py-10">
        <div className="relative">
          {/* LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 hidden md:block" />

          <div className="space-y-10">
            {timelineData.map((item, i) => {
              const isActive = activeEra === item.year;

              return (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* CARD */}
                  <div className="w-full md:w-[45%]">
                    <div
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
                      onClick={() => setActiveEra(isActive ? null : item.year)}
                    >
                      <div className="flex gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <span
                            className={`text-xs text-white px-2 py-1 rounded ${item.color}`}
                          >
                            {item.era}
                          </span>
                          <h3 className="font-bold text-lg mt-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className={`text-sm ${isActive ? "" : "line-clamp-2"}`}
                      >
                        {item.description}
                      </p>

                      <button className="text-green-600 text-xs mt-2 font-semibold">
                        {isActive ? "▲ Show less" : "▼ Read more"}
                      </button>
                    </div>
                  </div>

                  {/* YEAR */}
                  <div className="flex flex-col items-center z-10">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-4 border-white`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* EMPTY SPACE */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
