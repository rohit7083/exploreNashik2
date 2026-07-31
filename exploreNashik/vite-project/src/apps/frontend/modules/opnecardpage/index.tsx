import SEO from "@/components/seo/SEO";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { usePlace } from "../../../../api/usePlaces";

const FAVORITES_KEY = "favoritePlaces";

// Star Rating
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={`text-xl ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))}
    <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
  </div>
);

const InfoCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="text-sm text-gray-500 mb-1">{label}</div>
    <div className="font-medium text-gray-800">{value}</div>
  </div>
);

const AttractionDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { lang } = useLanguage();
  const { t } = useTranslation();

  const { data: attraction, isLoading } = usePlace(slug!, lang);
  const [activeImage, setActiveImage] = useState(0);

  // Favorite from localStorage
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    return saved.some((p: { slug: string }) => p.slug === slug);
  });

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    let updated;
    if (isFavorite) {
      updated = saved.filter((p: { slug: string }) => p.slug !== slug);
    } else {
      updated = [...saved, { slug, name: attraction?.name, image: attraction?.images?.[0]?.imageUrl }];
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("favoritesUpdated"));
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-2">😕</p>
          <h1 className="text-xl font-bold text-gray-800 mb-3">Place not found</h1>
          <button onClick={() => navigate(-1)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Data from DB
 
  const gallery = attraction.images?.map((img: { imageUrl: string }) => img.imageUrl) || [];
  const mapLink = Array.isArray(attraction.mapLocation?.[0])
    ? attraction.mapLocation[0]
    : attraction.mapLocation;

  const pageTitle = `${attraction.name} - ${attraction.location} | Explore Nashik`;
  const pageDescription = attraction.description || "";
  const pageImage = gallery[0] || "https://explorenashik.in/enCover.png";

  const touristSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: attraction.name,
    description: pageDescription,
    image: gallery,
    url: `https://explorenashik.in/open-card/${slug}`,
    touristType: attraction.category,
    address: {
      "@type": "PostalAddress",
      addressLocality: attraction.location,
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://explorenashik.in/" },
      { "@type": "ListItem", position: 2, name: "Explore", item: "https://explorenashik.in/explore" },
      { "@type": "ListItem", position: 3, name: attraction.name, item: `https://explorenashik.in/open-card/${slug}` },
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        url={`https://explorenashik.in/open-card/${slug}`}
        image={pageImage}
        schema={[touristSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← {t("detail.back") || "Back"}
            </button>
            <button
              onClick={toggleFavorite}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isFavorite
                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {isFavorite ? "❤️ Saved" : "🤍 Save"}
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6">

          {/* Title & Meta */}
          <div className="mb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full capitalize">
                {attraction.category}
              </span>
              {attraction.subcategory && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full capitalize">
                  {attraction.subcategory}
                </span>
              )}
              {attraction.difficulty && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  attraction.difficulty === "Hard"
                    ? "bg-red-100 text-red-600"
                    : attraction.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {attraction.difficulty}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {attraction.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1 text-sm">
              <MapPin size={14} /> {attraction.location}
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-3 rounded-xl overflow-hidden shadow-lg">
            <img
              src={gallery[activeImage] || gallery[0]}
              alt={`${attraction.name} - Tourist Attraction in Nashik`}
              loading="eager"
              decoding="async"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>

          {/* Gallery Thumbnails */}
          {gallery.length > 1 && (
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
              {gallery.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeImage ? "border-blue-500 scale-105" : "border-gray-200 opacity-70"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${attraction.name} ${i + 1}`}
                    loading="lazy"
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {attraction.timings && (
              // <InfoCard label={t("detail.timings") || "Timings"} value={attraction.timings} />
                            <InfoCard label={"Timings"} value={attraction.timings} />

            )}
            {attraction.entryFee && (
              // <InfoCard label={t("detail.entryFee") || "Entry Fee"} value={attraction.entryFee} />
                          <InfoCard label= "Entry Fee" value={attraction.entryFee} />

            )}
            {attraction.distance && (
              // <InfoCard
              //   label={t("detail.distance") || "Distance"}
              //   value={`${attraction.distance} km from CBS`}
              // />
               <InfoCard
                label= "Distance"
                value={`${attraction.distance} km from CBS`}
              />
            )}
            {attraction.difficulty && (
              // <InfoCard label={t("detail.difficulty") || "Difficulty"} value={attraction.difficulty} />
                         <InfoCard label= "Difficulty" value={attraction.difficulty} />

           )}


          </div>

          {/* Description */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            About
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-sm">
              {attraction.description}
            </p>
          </div>

          {/* Services */}
          {attraction.services?.length > 0 && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Services</h2>
              <div className="flex flex-wrap gap-2">
                {attraction.services.map((s: string, i: number) => (
                  <span key={i} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          {attraction.facilities?.length > 0 && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Facilities</h2>
              <div className="flex flex-wrap gap-2">
                {attraction.facilities.map((f: string, i: number) => (
                  <span key={i} className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full">
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Cuisine */}
          {attraction.cuisine?.length > 0 && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {/* {t("detail.cuisine") || "Cuisine"} */}
                              { "Cuisine"}

              </h2>
              <div className="flex flex-wrap gap-2">
                {attraction.cuisine.map((c: string, i: number) => (
                  <span key={i} className="text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Location Map */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden mb-6">
            {/* Decorative Map */}
            <div className="relative h-44 bg-[#dce8f5] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,#b8cfe8 39px,#b8cfe8 40px),
                    repeating-linear-gradient(90deg,transparent,transparent 39px,#b8cfe8 39px,#b8cfe8 40px)`,
                }}
              />
              <div className="absolute left-0 right-0 h-[10px] bg-white/60" style={{ top: "40%" }} />
              <div className="absolute left-0 right-0 h-[10px] bg-white/60" style={{ top: "70%" }} />
              <div className="absolute top-0 bottom-0 w-[10px] bg-white/60" style={{ left: "35%" }} />
              <div className="absolute top-0 bottom-0 w-[10px] bg-white/60" style={{ left: "65%" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400/30 animate-ping w-16 h-16" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex flex-col items-center z-10">
                <div className="w-9 h-9 bg-blue-600 rounded-[50%_50%_50%_0] -rotate-45 shadow-lg shadow-blue-400/40 relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="w-4 h-1.5 bg-black/15 rounded-full mt-1" />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1.5 flex items-center gap-2 border border-gray-100 whitespace-nowrap max-w-[80%]">
                <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                <span className="text-xs font-medium text-gray-800 truncate">{attraction.name}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-blue-50 rounded-[10px] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-0.5">
                    {/* {t("detail.location") || "Location"} */}
                    Location
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {attraction.location}
                  </p>
                </div>
              </div>
              {mapLink ? (
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2.5 rounded-[10px] transition-colors shrink-0"
                >
                  {/* {t("detail.directions") || "Directions"} */}
                  Directions
                </a>
              ) : (
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(attraction.name + " " + attraction.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2.5 rounded-[10px] transition-colors shrink-0"
                >
                  {/* {t("detail.directions") || "Directions"} */}
               Directions
                </a>

              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AttractionDetailPage;
