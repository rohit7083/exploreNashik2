import { Link } from "react-router-dom";

const features: string[] = [
  "🍇 Harvest Season: Jan-Feb",
  "🥂 30+ Wineries",
  "🎵 Annual SulaFest",
  "🏡 Vineyard Stays",
];

const WineTourismSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-purple-900/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-white">
        <div className="max-w-2xl">
          <span className="inline-block bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            🍷 Wine Capital of India
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nashik Wine Country
          </h2>

          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Nashik produces over 40% of India's wine. With 100+ wineries in the
            region, experience world-class wine tourism amid the beautiful
            Sahyadri hills. From Sula to York, embark on an unforgettable
            vineyard trail.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-8">
            {features.map((item) => (
              <span
                key={item}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/explore?category=Wine Tourism"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            🍷 Explore Wine Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WineTourismSection;
