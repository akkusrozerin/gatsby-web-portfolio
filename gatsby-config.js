module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Rozerin's Portfolio", // Used in manifest.json
          shortName: "Rozerin Akkus", // Used in manifest.json
          startUrl: "/home", // Used in manifest.json
          backgroundColor: "#301934", // Used in manifest.json
          themeColor: "#272733", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `./gatsby-config.js`,
      },
    }
  ],
  pathPrefix: "/gatsby-website",
};
