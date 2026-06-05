import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://hostmetricpro.com";
  const currentDate = new Date();

  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/airbnb-roi-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/cap-rate-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/cash-flow-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
        {
      url: `${siteUrl}/occupancy-rate-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/rental-property-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/airbnb-profit-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/airbnb-investment-analysis`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
  url: `${siteUrl}/airbnb-expense-calculator`,
  lastModified: currentDate,
  changeFrequency: "weekly",
  priority: 0.8,
  },
  {
  url: `${siteUrl}/airbnb-revenue-calculator`,
  lastModified: currentDate,
  changeFrequency: "weekly",
  priority: 0.8,
  },
  {
  url: `${siteUrl}/noi-calculator`,
  lastModified: currentDate,
  changeFrequency: "weekly",
  priority: 0.8,
  },
  {
  url: `${siteUrl}/dscr-calculator`,
  lastModified: currentDate,
  changeFrequency: "weekly",
  priority: 0.8,
  },
  {
  url: `${siteUrl}/real-estate-roi-calculator`,
  lastModified: currentDate,
  changeFrequency: "weekly",
  priority: 0.8,
  },
  {
  url: `${siteUrl}/investment-property-calculator`,
  lastModified: currentDate,
  changeFrequency: "weekly",
  priority: 0.8,
  },
  {
  url: `${siteUrl}/cash-on-cash-return-calculator`,
  lastModified: currentDate,
  changeFrequency: "weekly",
  priority: 0.8,
  },
  {
  url: `${siteUrl}/rental-yield-calculator`,
  lastModified: currentDate,
  changeFrequency: "weekly",
  priority: 0.8,
  },
    {
      url: `${siteUrl}/refund`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}