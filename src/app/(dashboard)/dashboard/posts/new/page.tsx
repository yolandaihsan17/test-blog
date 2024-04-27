import { Grid, Stack, Typography } from "@mui/material";
import PostForm from "@/components/dashboard/form/form";

export default function NewPost() {
  return (
    <Grid container padding={"4rem 0"}>
      <Grid item xs={0} md={3}></Grid>
      <Grid item xs={12} md={6}>
        <Stack gap={4}>
          <Typography variant="h2">Add new post</Typography>
          <PostForm />
        </Stack>
      </Grid>
      <Grid item xs={0} md={3}></Grid>
    </Grid>
  );
}
