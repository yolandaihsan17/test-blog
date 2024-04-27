import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      color={"white"}
      sx={{
        backgroundColor: "#111827",
        padding: {
          md: "8rem 0",
          xs: "4rem 1rem",
        },
      }}
    >
      <Grid container>
        <Grid item xs={0} md={2}></Grid>

        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Stack gap={2}>
                <Typography fontWeight={"bold"} variant="h5">
                  SAT NUSAPERSADA
                </Typography>
                <Typography>
                  Jl. Pelita VI No.99, Kp. Pelita, Kec. Lubuk Baja, Kota Batam,
                  Kepulauan Riau 29443
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2}>
              <Stack paddingTop={4} gap={1}>
                <Typography fontWeight={"bold"} variant="h6">
                  Tentang
                </Typography>
                <Typography variant="body2">Tujuan kami</Typography>
                <Typography variant="body2">Misi kami</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2}>
              <Stack paddingTop={4} gap={1}>
                <Typography fontWeight={"bold"} variant="h6">
                  Social Media
                </Typography>
                <Stack direction={"row"} gap={1}>
                  <Instagram />
                  <Facebook />
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2}>
              <Stack paddingTop={4} gap={1}>
                <Typography fontWeight={"bold"} variant="h6">
                  Hubungi Kami
                </Typography>
                <Stack direction={"row"} gap={1}>
                  <WhatsApp />
                  <Typography>+62 778 5708888</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Box>
  );
}
