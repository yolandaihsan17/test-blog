import { Button, Stack, Typography } from "@mui/material";
import PostTable from "./components/post-table/post-table";

export default async function DashboardPosts() {
  const posts = await getPost();
  return (
    <Stack gap={2} padding={"4rem 2rem"}>
      <Stack
        flexDirection={"row"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Typography variant="h2">Posts List</Typography>
        <Button variant="contained" href="/dashboard/posts/new">
          Add New
        </Button>
      </Stack>

      <PostTable initialData={posts} />
    </Stack>
  );
}

async function getPost() {
  const response = await fetch("http://localhost:3000/api/posts");
  const jsonified = await response.json();
  return jsonified;
}
