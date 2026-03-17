export async function getBlogs(username) {
  const res = await fetch(`https://dev.to/api/articles?username=${username}`);
  if (!res.ok) throw new Error("Failed to fetch blog posts");

  const blogs = await res.json();
  return blogs;
}
