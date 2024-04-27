import { ArrowCircleLeft } from "@mui/icons-material";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Comment } from "@/types/comment";
import { Suspense } from "react";

export default async function SinglePostPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  return (
    <Stack sx={{ padding: { xs: "8rem 1rem", md: "8rem 0" } }} gap={2}>
      <Link href={"/blog"} color="unset">
        <ArrowCircleLeft fontSize="large" />
      </Link>
      <Stack gap={1}>
        <Typography
          variant="h2"
          textTransform={"uppercase"}
          sx={{ wordBreak: "break-all" }}
        >
          {data.title}
        </Typography>
        <Typography variant="caption">by user: {data.userId}</Typography>
      </Stack>
      <Typography component={"p"}>{data.body}</Typography>

      <Suspense
        fallback={
          <CircularProgress
            variant="indeterminate"
            size={20}
            sx={{ marginTop: 2 }}
          />
        }
      >
        <CommentSection id={params.id} />
      </Suspense>
    </Stack>
  );
}

async function CommentSection({ id }: { id: string }) {
  const comments = await getComments(id);
  return (
    <Box component={"section"} marginTop={12}>
      <Typography component={"h4"} variant="h4">
        Comments ({comments.length})
      </Typography>

      <Stack gap={6} marginTop={4}>
        {comments.map((item: Comment) => (
          <Stack key={item.id}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">{item.email}</Typography>
            <Typography variant="body1" marginTop={2}>
              {item.body}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}

async function getComments(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return response.json();
}
