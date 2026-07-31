// Performance Optimization Meta Tags for faster loading
// Add this to index.html <head>

export const generatePerformanceMetaTags = () => {
  return `
    <!-- DNS Prefetch for third-party domains -->
    <link rel="dns-prefetch" href="//www.googletagmanager.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//api.open-meteo.com">

    <!-- Preconnect to critical domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://api.open-meteo.com">

    <!-- Resource hints -->
    <link rel="prefetch" href="/src/main.tsx">
    
    <!-- Performance meta tags -->
    <meta name="theme-color" content="#f97316">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    
    <!-- Preload critical resources -->
    <link rel="preload" href="/logo.png" as="image">
    <link rel="preload" href="/enCover.png" as="image">
  `;
};

export default generatePerformanceMetaTags;
