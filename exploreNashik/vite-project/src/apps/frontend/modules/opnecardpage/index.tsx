import SEO from "@/components/seo/SEO";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePlace } from "../../../../api/usePlaces";
// ✅ Types
// interface Review {
//   id: number;
//   name: string;
//   avatar: string;
//   rating: number;
//   date: string;
//   comment: string;
// }

// Star Rating
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`text-xl ${
          i <= rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))}
    <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
  </div>
);

// const dummyReviews: Review[] = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     avatar: "👩",
//     rating: 5,
//     date: "March 2025",
//     comment:
//       "An absolutely divine experience! The spiritual energy here is unmatched.",
//   },
//   {
//     id: 2,
//     name: "Rahul Mehta",
//     avatar: "👨",
//     rating: 4,
//     date: "February 2025",
//     comment: "Breathtaking place with deep history. Must visit during Kumbh.",
//   },
// ];

const AttractionDetailPage: React.FC = () => {
  const navigate = useNavigate();

const { slug } = useParams();

const { data: attraction, isLoading } = usePlace(slug!);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      );
    }
  // जर data nasel
if (isLoading) {
  return <div>Loading...</div>;
}

if (!attraction) {
  return <div>Attraction not found</div>;
}

// 👇 आता attraction available आहे

const pageTitle = `${attraction.name} - ${attraction.location} | Explore Nashik`;

const pageDescription =
  attraction.shortDescription || attraction.description;

const pageImage =
  attraction.images?.[0]?.imageUrl ||
  "https://explorenashik.in/enCover.png";

const touristSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",

  name: attraction.name,

  description: pageDescription,

  image: attraction.images?.map((img: any) => img.imageUrl),

url: `https://explorenashik.in/open-card/${slug}`,
  touristType: attraction.category,

  address: {
    "@type": "PostalAddress",
    addressLocality: attraction.location,
    addressRegion: "Maharashtra",
    addressCountry: "India",
  },

  aggregateRating: attraction.rating
    ? {
        "@type": "AggregateRating",
        ratingValue: attraction.rating,
        reviewCount: 1,
      }
    : undefined,
};

  // Gallery Images
  const gallery = attraction.images?.map((img: any) => img.imageUrl) || [];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://explorenashik.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Explore",
      item: "https://explorenashik.in/explore",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: attraction.name,
item: `https://explorenashik.in/open-card/${slug}`,    },
  ],
};
  return (
    <> <SEO
      title={pageTitle}
      description={pageDescription}
      url={`https://explorenashik.in/open-card/${slug}`}
      image={pageImage}
  schema={[touristSchema, breadcrumbSchema]}
    />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <span className="mr-2">←</span> Back
          </button>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`px-4 py-2 rounded-lg font-medium ${
              isFavorite
                ? "bg-red-100 text-red-600 hover:bg-red-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {isFavorite ? "❤️ Saved" : "🤍 Save"}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {attraction.name}
          </h1>

          <div className="flex items-center gap-4 mb-2">
            <StarRating rating={attraction.rating || 4} />

            {/* <span className="text-gray-600">
              ({attraction.reviews || 0} reviews)
            </span> */}
          </div>

          <p className="text-gray-600 flex items-center">
            <span className="mr-1">📍</span>
            {attraction.location}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-6">
        <img
  src={gallery[activeImage] || attraction.images?.[0]?.imageUrl}
  alt={`${attraction.name} - Tourist Attraction in Nashik`}
  loading="eager"
  decoding="async"
  className="w-full h-96 object-cover rounded-lg shadow-lg"
/>
        </div>

        {/* Gallery */}
        {gallery.length > 1 && (
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {gallery.map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                  i === activeImage ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
alt={`${attraction.name} - Image ${i + 1}`}
loading="lazy"
decoding="async"
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {attraction.timings && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Timings</div>
              <div className="font-medium">{attraction.timings}</div>
            </div>
          )}

          {attraction.entryFee && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Entry Fee</div>
              <div className="font-medium">{attraction.entryFee}</div>
            </div>
          )}

          {attraction.distance && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Distance</div>
              <div className="font-medium">
                {attraction.distance} km (From CBS, Nashik)
              </div>
            </div>
          )}
          {attraction.contact && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Contact</div>
              <div className="font-medium">{attraction.contact}</div>
            </div>
          )}

          {attraction.cuisine?.length > 0 && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Cuisine</div>
              <div className="font-medium">
                {attraction.cuisine?.join(", ")}
              </div>
            </div>
          )}

          {attraction.difficulty && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Difficulty</div>
              <div className="font-medium">{attraction.difficulty}</div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">About</h2>

          <p className="text-gray-700 leading-relaxed">
            {attraction.shortDescription || attraction.description}
          </p>
        </div>

        {/* Location */}
        {/* Location */}
        <div className="bg-white rounded-[20px] border border-gray-100 overflow-hidden mb-6">
          {/* Map Area */}
          <div className="relative h-48 bg-[#dce8f5] overflow-hidden">
            {/* Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,#b8cfe8 39px,#b8cfe8 40px),
          repeating-linear-gradient(90deg,transparent,transparent 39px,#b8cfe8 39px,#b8cfe8 40px)`,
              }}
            />
            {/* Roads */}
            <div
              className="absolute left-0 right-0 h-[10px] bg-white/60"
              style={{ top: "40%" }}
            />
            <div
              className="absolute left-0 right-0 h-[10px] bg-white/60"
              style={{ top: "70%" }}
            />
            <div
              className="absolute top-0 bottom-0 w-[10px] bg-white/60"
              style={{ left: "35%" }}
            />
            <div
              className="absolute top-0 bottom-0 w-[10px] bg-white/60"
              style={{ left: "65%" }}
            />

            {/* Pulse rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400/30 animate-ping w-16 h-16" />

            {/* Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex flex-col items-center z-10">
              <div className="w-9 h-9 bg-blue-600 rounded-[50%_50%_50%_0] -rotate-45 shadow-lg shadow-blue-400/40 relative">
                <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="w-4 h-1.5 bg-black/15 rounded-full mt-1" />
            </div>

            {/* Location badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1.5 flex items-center gap-2 border border-gray-100 whitespace-nowrap">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-xs font-medium text-gray-800">
                {attraction.location}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 bg-blue-50 rounded-[10px] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-0.5">
                  Location
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {attraction.location}
                  <br />
                  <span className="text-[11px] text-gray-300">
                    Tap below to open in Google Maps
                  </span>
                </p>
              </div>
            </div>
            <a
              href={attraction.mapLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium px-4 py-2.5 rounded-[10px] transition-colors shrink-0"
            >
              {/* <Map className="w-4 h-4" /> */}
              Directions
            </a>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          {/* <h2 className="text-xl font-semibold mb-4">
            Reviews
          </h2> */}

          {/* <div className="space-y-4">
            {displayedReviews.map(
              (review) => (
                <div
                  key={review.id}
                  className="border-b border-gray-100 pb-4"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">
                      {review.avatar}
                    </span>

                    <div>
                      <div className="font-medium text-gray-900">
                        {review.name}
                      </div>

                      <div className="text-sm text-gray-500">
                        {review.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    {review.comment}
                  </p>
                </div>
              )
            )}
          </div>

          {!showAllReviews &&
            dummyReviews.length > 2 && (
              <button
                onClick={() =>
                  setShowAllReviews(true)
                }
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Show All Reviews
              </button>
            )} */}
        </div>
      </div>
    </div>
    </>
  );
};

export default AttractionDetailPage;
