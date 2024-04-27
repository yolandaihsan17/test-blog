import { Box, Button, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage:
            "url(https://images.pexels.com/photos/7001094/pexels-photo-7001094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          component={"h1"}
          fontWeight={"900"}
          fontSize={"100px"}
        >
          Blog
        </Typography>
        <Typography>Find everything that you need here.</Typography>
        <Button href="/blog" variant="contained" sx={{ marginTop: 2 }}>
          Check Our Posts
        </Button>
      </Box>
    </main>
  );
}
