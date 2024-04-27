import { ArrowCircleLeft } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Comment } from "@/types/comment";

export default async function SinglePostPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const comments = await getComments(params.id);
  return (
    <Stack padding={"8rem 0"} gap={2}>
      <Link href={"/blog"} color="unset">
        <ArrowCircleLeft fontSize="large" />
      </Link>
      <Stack gap={1}>
        <Typography variant="h2" textTransform={"uppercase"}>
          {data.title}
        </Typography>
        <Typography variant="caption">by user: {data.userId}</Typography>
      </Stack>
      <Typography component={"p"}>{data.body}</Typography>

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
    </Stack>
  );
}

async function getData(id: string) {
  const response = await fetch(`http://127.0.0.1/api/posts/${id}`);
  return response.json();
}

async function getComments(id: string) {
  const response = await fetch(`http://127.0.0.1/api/posts/${id}/comments`);
  return response.json();
}
