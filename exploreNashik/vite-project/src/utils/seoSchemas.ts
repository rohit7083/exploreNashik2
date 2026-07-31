// SEO Schema generators for different page types

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateLocalBusinessSchema = (place: {
  name: string;
  address: string;
  phone?: string;
  image?: string;
  description?: string;
  latitude?: number;
  longitude?: number;
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  category?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: place.name,
    description: place.description || "",
    image: place.image || "https://explorenashik.in/enCover.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
      streetAddress: place.address,
    },
    ...(place.phone && { telephone: place.phone }),
    ...(place.latitude &&
      place.longitude && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: place.latitude,
          longitude: place.longitude,
        },
      }),
    ...(place.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: place.rating,
        reviewCount: place.reviewCount || 1,
      },
    }),
    url: "https://explorenashik.in",
  };
};

export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image || "https://explorenashik.in/enCover.png",
    author: {
      "@type": "Organization",
      name: article.author || "Explore Nashik",
    },
    datePublished: article.publishedDate || new Date().toISOString(),
    dateModified: article.modifiedDate || new Date().toISOString(),
    url: article.url,
  };
};

export const generateEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    image: event.image || "https://explorenashik.in/enCover.png",
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    url: event.url,
  };
};

export const generateFAQSchema = (
  faqs: { question: string; answer: string }[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};
