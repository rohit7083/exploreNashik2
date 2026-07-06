import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
schema?: object | object[];};

export default function SEO({
  title,
  description,
  url,
  image = "https://explorenashik.in/enCover.png",
  schema,
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
    },
  ];

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || websiteSchema)}
      </script>
    </Helmet>
  );
}