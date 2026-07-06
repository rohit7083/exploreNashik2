const { SitemapStream, streamToPromise } = require("sitemap");
const Place = require("../models/allPlaces");

exports.generateSitemap = async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://explorenashik.in",
    });

    // Static Pages
    smStream.write({ url: "/", changefreq: "daily", priority: 1.0 });
    smStream.write({ url: "/explore", changefreq: "daily", priority: 0.9 });
    smStream.write({ url: "/tourism", changefreq: "weekly", priority: 0.9 });
    smStream.write({ url: "/history", changefreq: "monthly", priority: 0.8 });
    smStream.write({ url: "/about", changefreq: "yearly", priority: 0.5 });
    smStream.write({ url: "/travel-info", changefreq: "monthly", priority: 0.8 });
    smStream.write({ url: "/nearby-place", changefreq: "weekly", priority: 0.8 });
    smStream.write({ url: "/kumbh-mela", changefreq: "weekly", priority: 0.9 });

    // Dynamic Pages
    const places = await Place.find().select("slug updatedAt");

    places.forEach((place) => {
      smStream.write({
        url: `/open-card/${place.slug}`,
        lastmod: place.updatedAt,
        changefreq: "weekly",
        priority: 0.8,
      });
    });

    smStream.end();

    const sitemap = await streamToPromise(smStream);

    res.header("Content-Type", "application/xml");
    res.send(sitemap.toString());

  } catch (err) {
    console.error(err);

    res.status(500).send("Sitemap Error");
  }
};