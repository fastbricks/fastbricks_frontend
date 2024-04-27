import GetBlogs from "@/lib/getBlogs";

const URL = "https://blog.fastbricks.in";

export default async function Sitemap() {
  try {
    // Fetch blog posts
    let blogs = await GetBlogs();

    // Define additional URLs
    const additionalUrls = [
      {
        url: "https://fastbricks.in",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://fastbricks.in/about",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://fastbricks.in/privacy-policy",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://fastbricks.in/cancellation-return",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://fastbricks.in/bookings",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://fastbricks.in/terms",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://fastbricks.in/faqs",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://fastbricks.in/payment",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://fastbricks.in/contact",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      {
        url: "https://fastbricks.in/community",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      {
        url: "https://fastbricks.in/account",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      {
        url: "https://fastbricks.in/account/login",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      {
        url: "https://seller.fastbricks.in/",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      {
        url: "https://careers.fastbricks.in/",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      {
        url: "https://blog.fastbricks.in/",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      {
        url: "https://blog.fastbricks.in",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/login",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read?cat=services",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read?cat=rentals",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read?cat=building-materials",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read?cat=house-construction",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read?cat=design",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read?cat=tips-and-tricks",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read?cat=fastrbicks-updates",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://blog.fastbricks.in/read?cat=general",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
    ];

    // Concatenate all URLs
    const allUrls = [...additionalUrls, ...blogs];

    return allUrls;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Failed to generate sitemap");
  }
}
