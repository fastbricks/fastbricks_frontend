// src/lib/getBlogs.js

export default async function getBlogs() {
  try {
    // Replace 'http://api.example.com/posts' with the URL of your API server
    const response = await fetch("https://blog.fastbricks.in/api/blog");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error fetching blog posts: ${response.statusText}`);
    }

    // Parse the JSON response
    const posts = await response.json();

    // Generate URLs for each blog post
    const urls = posts.map((post) => ({
      url: post,
      lastModified: post.createdAt,
      changeFrequency: "daily",
      priority: 0.7,
    }));

    // Return the array of URLs
    return urls;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Failed to fetch blog posts");
  }
}
