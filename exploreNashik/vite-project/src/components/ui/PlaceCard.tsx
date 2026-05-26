// import { useNavigate } from "react-router-dom";
// import { Button } from "./button";

// const PlaceCard = ({ place }: any) => {
//   const navigate = useNavigate();
//   const handleOpen = () => {
//     navigate("/open-card", { state: { place } });
//   };

//   return (
//     <div

//       className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition overflow-hidden"
//     >

//       <div onClick={handleOpen}>
//         {/* Image */}
//         <div className="relative">
//           <img
//             src={place.images[0]?.imageUrl}
//             alt={place.name}
//             className="w-full h-48 object-cover"
//           />

//           {/* Category */}
//           <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
//             {place.category}
//           </span>

//           {/* Rating */}
//           <span className="absolute bottom-2 right-2 bg-white text-sm px-2 py-1 rounded shadow">
//             ⭐ {place.rating}
//           </span>
//         </div>

//         {/* Content */}
//         <div className="p-4">
//           <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
//             {place.name}
//           </h2>

//           <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//             {place.shortDescription}
//           </p>

//           <p className="text-xs text-gray-400 mt-2">📍 {place.location}</p>

//           <div className="flex justify-between mt-3 text-xs">
//             <span className="text-gray-500">⏰ {place.timings}</span>

//             <span className="text-green-600 font-medium">{place.entryFee}</span>
//           </div>
//           <span className="text-black-600 font-xs flex justify-between mt-3 text-xs">
//             Distance : {place.distance} km (From CBS , Nashik)
//           </span>
//           {place.difficulty && (<span className="text-black-600 font-xs flex justify-between mt-3 text-xs">
//             Difficulty : {place.difficulty}
//           </span>)}

//           <span  className="text-black-600 font-xs flex justify-between mt-3 text-xs">Contact : {place.contact}</span>
//           <span  className="text-black-600 font-xs flex justify-between mt-3 text-xs">Cuisine : {place.cuisine}</span>

//         </div>
//       </div>
//       <a href={place.mapLocation} target="_blank" rel="noopener noreferrer">
//         <Button className="flex-1 bg-black hover:bg-gray-800 mt-4">
//           Map
//         </Button>
//       </a>
//     </div>
//   );
// };

// export default PlaceCard;

////////////////////////////////////////////////////////////

// import { useNavigate } from "react-router-dom";
// import { Button } from "./button";

// const PlaceCard = ({ place }: any) => {
//   const navigate = useNavigate();

//   const handleOpen = () => {
//     navigate("/open-card", { state: { place } });
//   };

//   // Dynamic fields config
//   const cardFields = [
//     {
//       key: "timings",
//       label: "⏰ timings",
//     },
//     {
//       key: "entryFee",
//       label: "🎟 Entry Fee",
//     },
//     {
//       key: "distance",
//       label: "📏 Distance",
//       suffix: " km (From CBS, Nashik)",
//     },
//     {
//       key: "difficulty",
//       label: "🥾 Difficulty",
//     },
//     {
//       key: "contact",
//       label: "📞 Contact",
//     },
//     {
//       key: "cuisine",
//       label: "🍽 Cuisine",
//       category: "food", // fakta food sathi
//     },
//   ];

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition overflow-hidden">

//       <div onClick={handleOpen} className="cursor-pointer">

//         {/* Image */}
//         <div className="relative">
//           <img
//             src={place.images?.[0]?.imageUrl}
//             alt={place.name}
//             className="w-full h-48 object-cover"
//           />

//           {/* Category */}
//           <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
//             {place.category}
//           </span>

//           {/* Rating */}
//           <span className="absolute bottom-2 right-2 bg-white text-sm px-2 py-1 rounded shadow">
//             ⭐ {place.rating}
//           </span>
//         </div>

//         {/* Content */}
//         <div className="p-4">

//           {/* Name */}
//           <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
//             {place.name}
//           </h2>

//           {/* Description */}
//           <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//             {place.shortDescription}
//           </p>

//           {/* Location */}
//           {place.location && (
//             <p className="text-xs text-gray-400 mt-2">
//               📍 {place.location}
//             </p>
//           )}

//           {/* Dynamic Fields */}
//           <div className="mt-3 space-y-2 text-xs">
//             {cardFields.map((field) => {
//               const value = place[field.key];

//               // value nasel tar show nako
//               if (!value) return null;

//               // category specific field check
//               if (
//                 field.category &&
//                 field.category !== place.category
//               ) {
//                 return null;
//               }

//               return (
//                 <p
//                   key={field.key}
//                   className="text-gray-700 dark:text-gray-300 flex justify-between"
//                 >
//                   <span className="font-medium">
//                     {field.label}
//                   </span>

//                   <span>
//                     {value}
//                     {field.suffix && field.suffix}
//                   </span>
//                 </p>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Map Button */}
//       <a
//         href={place.mapLocation}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Button className="bg-black hover:bg-gray-800 mt-4 w-full rounded-none">
//           Map
//         </Button>
//       </a>
//     </div>
//   );
// };

// export default PlaceCard




import { useNavigate } from "react-router-dom";
import { Button } from "./button";

const PlaceCard = ({ place }: any) => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/open-card", { state: { place } });
  };

  // Dynamic fields config
  const cardFields = [
    {
      key: "timings",
      label: "⏰ Timings",
    },
    {
      key: "entryFee",
      label: "🎟 Entry Fee",
    },
    {
      key: "distance",
      label: "📏 Distance",
      suffix: " km (From CBS, Nashik)",
    },
    {
      key: "difficulty",
      label: "🥾 Difficulty",
    },
    {
      key: "contact",
      label: "📞 Contact",
    },
    {
      key: "cuisine",
      label: "🍽 Cuisine",
      category: "food", // only for food
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full min-h-[550px] border border-gray-100 dark:border-gray-700">

      <div
        onClick={handleOpen}
        className="cursor-pointer flex flex-col flex-grow"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={place.images?.[0]?.imageUrl}
            alt={place.name}
            className="w-full h-50 object-cover"
          />

          {/* Category */}
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full capitalize shadow">
            {place.category}
          </span>

          {/* Rating */}
          <span className="absolute bottom-3 right-3 bg-white text-sm px-3 py-1 rounded-lg shadow font-medium">
            ⭐ {place.rating}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">

          {/* Name */}
          <h2 className="font-bold text-xl text-gray-800 dark:text-white line-clamp-1 mb-1">
            {place.name}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-[40px]">
            {place.shortDescription}
          </p>

          {/* Location */}
          {place.location && (
            <p className="text-sm text-gray-500 mt-0 flex items-start gap-2 leading-5">
              <span>📍</span>
              <span className="line-clamp-2">
                {place.location}
              </span>
            </p>
          )}


          {/* Dynamic Fields */}
          <div className="mt-4 space-y-3 text-sm flex-grow">
            {cardFields.map((field) => {
              const value = place[field.key];

              // don't show if value missing
              if (!value) return null;

              // category-specific field
              if (
                field.category &&
                field.category !== place.category
              ) {
                return null;
              }

              return (
                <div
                  key={field.key}
                  className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="font-medium">
                    {field.label}
                  </span>

                  <span className="text-right">
                    {value}
                    {field.suffix && field.suffix}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Map Button */}
      <a
        href={place.mapLocation}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto"
      >
        <Button className="bg-black hover:bg-gray-900 text-white w-full py-6 rounded-none text-base font-medium">
          Map
        </Button>
      </a>
    </div>
  );
};

export default PlaceCard;