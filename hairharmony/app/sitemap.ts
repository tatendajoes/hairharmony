import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hairharmonyus.com';

  // Static pages — only add pages you want Google to index
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // When you add a blog, extend this like:
  //
  // const posts = await getBlogPosts({ status: 'published' });
  // const blogRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));
  //
  // return [...staticRoutes, ...blogRoutes];

  return staticRoutes;
}
