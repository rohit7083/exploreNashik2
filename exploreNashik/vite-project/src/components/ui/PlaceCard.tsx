import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const PlaceCard = ({ place }: any) => {
  const navigate = useNavigate();
  const handleOpen = () => {
    navigate("/open-card", { state: { place } });
  }
  const [showLocation, setShowLocation] = useState(false);

  return (
    <div onClick={handleOpen} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={place.images[0]?.imageUrl}
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

        <p className="text-xs text-gray-400 mt-2">📍 {place.location}</p>

        <div className="flex justify-between mt-3 text-xs">
          <span className="text-gray-500">⏰ {place.timings}</span>

          <span className="text-green-600 font-medium">{place.entryFee}</span>



        </div>
        <span className="text-black-600 font-xs flex justify-between mt-3 text-xs">Distance : {place.distance} km (From CBS , Nashik)</span>
        <span className="text-black-600 font-xs flex justify-between mt-3 text-xs">Difficulty : {place.difficulty}</span>

        {/* Button */}
        <button
          onClick={() => setShowLocation(!showLocation)}
          className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md mt-2"
        >
          {showLocation ? "Hide Location" : "Map"}
        </button>

        {/* Map Location Show on Click */}
        {showLocation && (
          <p className="text-base text-gray-400 mt-2">
            📍 {place.mapLocation}
          </p>
        )}

      </div>

    </div>
  );
};

export default PlaceCard;
