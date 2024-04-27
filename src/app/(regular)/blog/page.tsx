import { Stack } from "@mui/material";
import PostList from "./post-list/post-list";

export default async function BlogPage() {
  const data = await getData();
  return (
    <Stack gap={4} paddingTop={8}>
      <PostList title="Latest Post" posts={data.slice(0, 5)} />
      <PostList title="Older Post" posts={data.slice(5, data.length - 1)} />
    </Stack>
  );
}

export async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
