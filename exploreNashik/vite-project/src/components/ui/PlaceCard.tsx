const PlaceCard = ({ place }: any) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition overflow-hidden">
      
      {/* Image */}
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-48 object-cover"
        />

        {/* Category */}
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
          {place.category}
        </span>

        {/* Rating */}
        <span className="absolute bottom-2 right-2 bg-white text-sm px-2 py-1 rounded shadow">
          ⭐ {place.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
          {place.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {place.shortDescription}
        </p>

        <p className="text-xs text-gray-400 mt-2">
          📍 {place.location}
        </p>

        <div className="flex justify-between mt-3 text-xs">
          <span className="text-gray-500">⏰ {place.timings}</span>
          <span className="text-green-600 font-medium">
            {place.entryFee}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;