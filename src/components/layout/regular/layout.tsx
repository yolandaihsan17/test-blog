import { Box, Grid } from "@mui/material";
import ResponsiveAppBar from "./app-bar";
import Footer from "./footer";

export function RegularLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <ResponsiveAppBar />
      <section>
        <Box component={"section"} paddingBottom={8}>
          <Grid container>
            <Grid item xs={0} md={2}></Grid>
            <Grid item xs={12} md={8}>
              {children}
            </Grid>
            <Grid item xs={0} md={2}></Grid>
          </Grid>
        </Box>
      </section>
      <Footer />
    </main>
  );
}
