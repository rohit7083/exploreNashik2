// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// interface Attraction {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   location: string;
// }

// const attractions: Attraction[] = [
//   {
//     id: 1,
//     name: "Trimbakeshwar Temple",
//     image:
//       "https://res.cloudinary.com/dq7re39ys/image/upload/v1781953290/places/yylgphy5edahqgdzvmrc.jpg",
//     description:
//       "One of the twelve sacred Jyotirlingas of Lord Shiva and a major pilgrimage destination in India.",
//     location: "Trimbak",
//   },
//   {
//     id: 2,
//     name: "Sula Vineyards",
//     image:
//       "https://res.cloudinary.com/dq7re39ys/image/upload/v1781947900/tourism-app/bzxz7zjah55ibxsglawn.png",
//     description:
//       "India's most famous winery offering vineyard tours, wine tastings, and stunning views of the surrounding hills.",
//     location: "Gangapur Road, Nashik",
//   },
//   {
//     id: 6,
//     name: "Harihar Fort",
//     image:
//       "https://res.cloudinary.com/dq7re39ys/image/upload/v1779533882/places/cngz8ouajmgrz1ispun9.jpg",
//     description:
//       "Famous for its steep rock-cut staircase and breathtaking trekking experience.",
//     location: "Trimbak Range",
//   },
//   {
//     id: 7,
//     name: "Ramkund",
//     image:
//       "https://res.cloudinary.com/dq7re39ys/image/upload/v1781953286/places/ho16ohej07zc7u1tp1px.jpg",
//     description:
//       "Sacred bathing ghat on the Godavari River, an important pilgrimage site.",
//     location: "Panchavati",
//   },
//   {
//     id: 8,
//     name: "Kalaram Temple",
//     image:
//       "https://res.cloudinary.com/dq7re39ys/image/upload/v1781953294/places/v9bzvxfhiufjojiier3v.jpg",
//     description:
//       "Historic temple dedicated to Lord Rama, known for its black stone architecture.",
//     location: "Panchavati",
//   },
//   {
//     id: 9,
//     name: "Saptashrungi Devi Temple",
//     image:
//       "https://res.cloudinary.com/dq7re39ys/image/upload/v1781953294/places/ylsojugqfnhjzleh1hz7.jpg",
//     description:
//       "One of Maharashtra's most revered Shakti Peethas, located amidst seven hills.",
//     location: "Vani",
//   },
// ];

// // Returns how many cards are visible at the current viewport width,
// // matching your Tailwind breakpoints: base=1, md=2, lg=3
// const getVisibleCount = () => {
//   if (typeof window === "undefined") return 3;
//   const w = window.innerWidth;
//   if (w >= 1024) return 3; // lg
//   if (w >= 768) return 2; // md
//   return 1; // base/mobile
// };

// const TopAttraction = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(getVisibleCount());

//   useEffect(() => {
//     const handleResize = () => {
//       const newVisible = getVisibleCount();
//       setVisibleCount(newVisible);
//       // clamp currentIndex so we don't sit past the new maxIndex
//       setCurrentIndex((prev) =>
//         Math.min(prev, Math.max(0, attractions.length - newVisible))
//       );
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const maxIndex = Math.max(0, attractions.length - visibleCount);
//   const slideWidthPercent = 100 / visibleCount;

//   const nextSlide = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <section className="w-full py-12 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-10">
//           <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
//             Top Attractions
//           </h2>
//           <p className="text-gray-500 dark:text-gray-400 mt-2">
//             Essential information to plan your perfect Nashik trip
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative">
//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             disabled={currentIndex === 0}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-20
//                      h-12 w-12 rounded-full bg-white shadow-lg
//                      flex items-center justify-center
//                      hover:scale-110 transition-all
//                      disabled:opacity-40"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-gray-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             disabled={currentIndex === maxIndex}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-20
//                      h-12 w-12 rounded-full bg-white shadow-lg
//                      flex items-center justify-center
//                      hover:scale-110 transition-all
//                      disabled:opacity-40"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-gray-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>

//           {/* Viewport */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
//               }}
//             >
//               {attractions.map((place) => (
//                 <div
//                   key={place.id}
//                   className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
//                 >
//                   <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition h-full">
//                     <img
//                       src={`${place.image}?w=600&auto=format&fit=crop`}
//                       alt={place.name}
//                       loading="lazy"
// decoding="async"
//                       className="w-full h-52 object-cover"
//                     />

//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
//                         {place.name}
//                       </h3>

//                       <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
//                         {place.location}
//                       </p>

//                       <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
//                         {place.description}
//                       </p>

//                       <Link
//                         to="/explore"
//                         className="text-red-600 font-medium hover:underline text-sm"
//                       >
//                         View Details →
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2.5 w-2.5 rounded-full transition-all ${
//                   currentIndex === index ? "bg-red-600 w-6" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopAttraction;




import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Attraction {
  id: number;
  key: string;
  image: string;
}

const attractions: Attraction[] = [
  {
    id: 1,
    key: "trimbakeshwarTemple",
    image: "https://res.cloudinary.com/dq7re39ys/image/upload/v1781953290/places/yylgphy5edahqgdzvmrc.jpg",
  },
  {
    id: 2,
    key: "sulaVineyards",
    image: "https://res.cloudinary.com/dq7re39ys/image/upload/v1781947900/tourism-app/bzxz7zjah55ibxsglawn.png",
  },
  {
    id: 6,
    key: "harihar Fort".replace(" ", ""),
    image: "https://res.cloudinary.com/dq7re39ys/image/upload/v1779533882/places/cngz8ouajmgrz1ispun9.jpg",
  },
  {
    id: 7,
    key: "ramkund",
    image: "https://res.cloudinary.com/dq7re39ys/image/upload/v1781953286/places/ho16ohej07zc7u1tp1px.jpg",
  },
  {
    id: 8,
    key: "kalaramTemple",
    image: "https://res.cloudinary.com/dq7re39ys/image/upload/v1781953294/places/v9bzvxfhiufjojiier3v.jpg",
  },
  {
    id: 9,
    key: "saptashrungiDeviTemple",
    image: "https://res.cloudinary.com/dq7re39ys/image/upload/v1781953294/places/ylsojugqfnhjzleh1hz7.jpg",
  },
];

// Returns how many cards are visible at the current viewport width,
// matching your Tailwind breakpoints: base=1, md=2, lg=3
const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;
  if (w >= 1024) return 3; // lg
  if (w >= 768) return 2; // md
  return 1; // base/mobile
};

const TopAttraction = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisibleCount();
      setVisibleCount(newVisible);
      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(0, attractions.length - newVisible))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, attractions.length - visibleCount);
  const slideWidthPercent = 100 / visibleCount;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            {t("topAttractions.title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {t("topAttractions.subtitle")}
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label={t("topAttractions.prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                     h-12 w-12 rounded-full bg-white shadow-lg
                     flex items-center justify-center
                     hover:scale-110 transition-all
                     disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            aria-label={t("topAttractions.next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                     h-12 w-12 rounded-full bg-white shadow-lg
                     flex items-center justify-center
                     hover:scale-110 transition-all
                     disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
              }}
            >
              {attractions.map((place) => (
                <div
                  key={place.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition h-full">
                    <img
                      src={`${place.image}?w=600&auto=format&fit=crop`}
                      alt={t(`topAttractions.items.${place.key}.name`)}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-52 object-cover"
                    />

                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                        {t(`topAttractions.items.${place.key}.name`)}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {t(`topAttractions.items.${place.key}.location`)}
                      </p>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {t(`topAttractions.items.${place.key}.description`)}
                      </p>

                      <Link
                        to="/explore"
                        className="text-red-600 font-medium hover:underline text-sm"
                      >
                        {t("topAttractions.viewDetails")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`${t("topAttractions.goToSlide")} ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  currentIndex === index ? "bg-red-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAttraction;