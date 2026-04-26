import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// ✅ Types
interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface Attraction {
  id: number;
  name: string;
  category: string;
  tags: string[];
  rating: number;
  reviews?: number;
  location: string;
  description: string;
  tips?: string[];
  timings?: string;
  entryFee?: string;
  duration?: string;
  bestTime?: string;
  nearbyPlaces?: number[];
  gallery?: string[];
  image: string;
}

// Static Data
const staticAttractions: Attraction[] = [
  {
    id: 1,
    name: "Triveni Sangam",
    category: "Religious",
    tags: ["Holy", "River", "Pilgrimage"],
    rating: 4.8,
    reviews: 1250,
    location: "Prayagraj, Uttar Pradesh",
    description:
      "The sacred confluence of three rivers - Ganga, Yamuna, and the mythical Saraswati. This is the most important bathing ghat during Kumbh Mela.",
    tips: [
      "Best visited during sunrise",
      "Carry water bottles",
      "Respect local customs",
    ],
    timings: "24 hours",
    entryFee: "Free",
    duration: "2-3 hours",
    bestTime: "Early morning (5-8 AM)",
    nearbyPlaces: [2, 3],
    gallery: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    ],
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
  },
  {
    id: 2,
    name: "Akshayavat",
    category: "Religious",
    tags: ["Sacred Tree", "Ancient", "Spiritual"],
    rating: 4.5,
    reviews: 890,
    location: "Allahabad Fort, Prayagraj",
    description:
      "The immortal banyan tree mentioned in ancient scriptures. Believed to be indestructible and a witness to countless Kumbh Melas.",
    timings: "6 AM - 6 PM",
    entryFee: "₹25",
    duration: "1-2 hours",
    bestTime: "Morning hours",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
  {
    id: 3,
    name: "Hanuman Mandir",
    category: "Temple",
    tags: ["Temple", "Hanuman", "Ancient"],
    rating: 4.6,
    reviews: 650,
    location: "Sangam Area, Prayagraj",
    description:
      "Famous underground Hanuman temple that gets submerged during floods. A unique architectural marvel and spiritual destination.",
    timings: "5 AM - 9 PM",
    entryFee: "Free",
    duration: "1 hour",
    bestTime: "Evening aarti time",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
  },
];

const dummyReviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "👩",
    rating: 5,
    date: "March 2025",
    comment:
      "An absolutely divine experience! The spiritual energy here is unmatched.",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    avatar: "👨",
    rating: 4,
    date: "February 2025",
    comment: "Breathtaking place with deep history. Must visit during Kumbh.",
  },
  {
    id: 3,
    name: "Anjali Gupta",
    avatar: "👩",
    rating: 5,
    date: "January 2025",
    comment: "Life-changing experience. The confluence is truly magical.",
  },
];

// Map Component
const MapPlaceholder: React.FC<{ location: string }> = ({ location }) => (
  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
    <div className="text-center">
      <div className="text-4xl mb-2">📍</div>
      <p className="text-gray-600 font-medium">{location}</p>
      <p className="text-sm text-gray-500 mt-1">Interactive map coming soon</p>
    </div>
  </div>
);

// Star Rating
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`text-xl ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ))}
    <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
  </div>
);

const AttractionDetailPage: React.FC = () => {
  const navigate = useNavigate();

  const [activeImage, setActiveImage] = useState<number>(0);
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const attraction: Attraction = staticAttractions[0];

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Attraction Not Found
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const nearbyAttractions: Attraction[] = attraction.nearbyPlaces
    ? staticAttractions.filter((a: Attraction) =>
        attraction.nearbyPlaces?.includes(a.id),
      )
    : [];

  const gallery: string[] = attraction.gallery || [attraction.image];
  const displayedReviews = showAllReviews
    ? dummyReviews
    : dummyReviews.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
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

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Title & Rating */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {attraction.name}
          </h1>
          <div className="flex items-center gap-4 mb-2">
            <StarRating rating={attraction.rating} />
            <span className="text-gray-600">
              ({attraction.reviews} reviews)
            </span>
          </div>
          <p className="text-gray-600 flex items-center">
            <span className="mr-1">📍</span> {attraction.location}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src={gallery[activeImage]}
            alt={attraction.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Gallery Thumbnails */}
        {gallery.length > 1 && (
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                  i === activeImage ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
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
          {attraction.duration && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Duration</div>
              <div className="font-medium">{attraction.duration}</div>
            </div>
          )}
          {attraction.bestTime && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Best Time</div>
              <div className="font-medium">{attraction.bestTime}</div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed">
            {attraction.description}
          </p>
        </div>

        {/* Tips */}
        {attraction.tips && attraction.tips.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-3">Tips</h2>
            <ul className="space-y-2">
              {attraction.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">💡</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Map */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">Location</h2>
          <MapPlaceholder location={attraction.location} />
        </div>

        {/* Reviews */}
        {/* <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <div className="space-y-4">
            {displayedReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{review.avatar}</span>
                  <div>
                    <div className="font-medium text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-700 ml-11">{review.comment}</p>
              </div>
            ))}
          </div>
          {!showAllReviews && dummyReviews.length > 2 && (
            <button 
              onClick={() => setShowAllReviews(true)}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Show All Reviews ({dummyReviews.length})
            </button>
          )}
        </div> */}

        {/* Nearby Places */}
        {nearbyAttractions.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4">Nearby Places</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {nearbyAttractions.map((place) => (
                <Link
                  key={place.id}
                  to={`/attraction/${place.id}`}
                  className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {place.name}
                      </h3>
                      <StarRating rating={place.rating} />
                      <p className="text-sm text-gray-600 mt-1">
                        {place.location}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttractionDetailPage;
