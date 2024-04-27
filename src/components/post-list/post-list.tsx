import { Post } from "@/types/post";
import { Card, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function PostList({
  title,
  posts,
}: {
  title: string;
  posts: Post[];
}) {
  return (
    <Stack flexDirection={"column"} gap={2} marginTop={2}>
      <Typography component={"h2"} variant="h2">
        {title}
      </Typography>

      <Grid container spacing={2} rowSpacing={2} padding={2}>
        {posts.map((item: Post) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Link href={`blog/${item.id}`} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  padding: 2,
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                }}
                elevation={4}
              >
                <Stack gap={1}>
                  <Typography
                    fontWeight={"bold"}
                    variant="h6"
                    textTransform={"uppercase"}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.body}</Typography>
                </Stack>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
