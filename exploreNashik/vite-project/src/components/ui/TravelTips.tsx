const tips = [
  {
    icon: "🌡️",
    title: "Best Time",
    desc: "October to March for pleasant weather. Monsoon (July-Sept) for waterfalls and lush greenery.",
  },
  {
    icon: "🚗",
    title: "How to Reach",
    desc: "Via Mumbai (3hrs road/rail), Pune (4hrs), or fly to Mumbai and drive.",
  },
  {
    icon: "💰",
    title: "Budget",
    desc: "₹1,500/day (budget), ₹4,000/day (mid), ₹15,000+/day (luxury including stay & food).",
  },
  {
    icon: "🗣️",
    title: "Language",
    desc: "Marathi is the local language. Hindi and English widely understood.",
  },
];

const TravelTips = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-2xl">💡</p>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Travel Tips
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Essential information to plan your perfect Nashik trip
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tips.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            🚗 Complete Travel Guide →
          </button>
        </div>

      </div>
    </section>
  );
};

export default TravelTips;
