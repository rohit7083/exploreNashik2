type Stat = {
  number: string;
  label: string;
  icon: string;
};

const stats: Stat[] = [
  { number: "50+", label: "Tourist Spots", icon: "📍" },
  { number: "30+", label: "Wineries", icon: "🍷" },
  { number: "12", label: "Jyotirlinga nearby", icon: "🛕" },
  { number: "4", label: "Kumbh Mela site", icon: "🙏" },
];

const QuickStats = () => {
  return (
    <div className="bg-black dark:bg-white-800 py-10 mt-8 mb-8" >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label} className="animate-slide-up">
              <div className="text-3xl mb-1">{stat.icon}</div>
              <div className="text-3xl font-bold">{stat.number}</div>
              <div className="text-green-200 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickStats;