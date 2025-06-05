import { getCollection } from "astro:content";

export async function getCategories() {
  const posts = await getCollection("blog");
  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat()),
  ];

  return categories;
}

export async function getPosts(lang?: string) {
  const posts = (await getCollection("blog")).filter(item => item.data.lang === lang).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getBlogPosts(lang?: string) {
  const posts = (await getCollection("blogPosts")).filter(item => item.data.lang === lang).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getTailorMadePosts(lang?: string) {
  const posts = (await getCollection("tailor-made")).filter(item => item.data.lang === lang).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.category.includes(category))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}

export async function getGuides() {
  const guides = (await getCollection("guides"))
    .filter((guide) => guide.data.published)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}
