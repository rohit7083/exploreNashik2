import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  schema?: object | object[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
};

export default function SEO({
  title,
  description,
  url,
  keywords = "Nashik, tourism, travel, temples, places to visit",
  author = "Explore Nashik",
  publishedDate,
  modifiedDate,
  image = "https://explorenashik.in/enCover.png",
  schema,
  canonical = url,
  noindex = false,
  nofollow = false,
}: SEOProps) {

  const websiteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Explore Nashik",
      url: "https://explorenashik.in",
      description,
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://explorenashik.in/explore?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Explore Nashik",
      url: "https://explorenashik.in",
      logo: "https://explorenashik.in/logo.png",
      image: "https://explorenashik.in/enCover.png",
      sameAs: [
        "https://www.facebook.com/explorenashik",
        "https://twitter.com/explorenashik",
        "https://www.instagram.com/explorenashik",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        url: "https://explorenashik.in",
      },
    },
  ];

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      <meta 
        name="robots" 
        content={`index, ${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`} 
      />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <meta name="theme-color" content="#f97316" />

      {/* Published & Modified Dates */}
      {publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Explore Nashik" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@explorenashik" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://api.open-meteo.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || websiteSchema)}
      </script>
    </Helmet>
  );
}