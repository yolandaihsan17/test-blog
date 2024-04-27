import { Grid, Stack, Typography } from "@mui/material";
import PostForm from "@/components/dashboard/form/form";

export default async function EditPost({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getPostDetail(id);
  return (
    <Grid container padding={"4rem 0"}>
      <Grid item xs={0} md={3}></Grid>
      <Grid item xs={12} md={6}>
        <Stack gap={4}>
          <Typography variant="h2">Edit post</Typography>
          <PostForm defaultData={data} />
        </Stack>
      </Grid>
      <Grid item xs={0} md={3}></Grid>
    </Grid>
  );
}

async function getPostDetail(id: string) {
  const response = await fetch(`http://127.0.0.1/api/posts/${id}`);
  return response.json();
}
