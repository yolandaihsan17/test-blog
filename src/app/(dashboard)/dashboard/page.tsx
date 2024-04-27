import SampleChart from "@/components/chart/chart";
import { ArrowUpward } from "@mui/icons-material";
import { Card, Grid, Stack, Typography } from "@mui/material";

export default async function Dashboard() {
  const data = await getOverview();
  return (
    <Grid container spacing={3} padding={"4rem 2rem"}>
      <Grid item md={8} xs={12}>
        {OverviewCard({
          title: "Total Post All Time",
          data: data.totalPost,
          percentageString: `${data.increaseThisMonth}% compared to last month`,
        })}
      </Grid>

      <Grid item md={4} xs={12}>
        {OverviewCard({
          title: "Total Post This Month",
          data: data.postThisMonth,
          withoutPercentage: true,
        })}
      </Grid>

      <Grid item md={4} xs={12}>
        {OverviewCard({
          title: "Total Visits This Month",
          data: data.visitsThisMonth,
          percentageString: `${data.visitsIncrease}% compared to last month`,
        })}
      </Grid>

      <Grid item md={8} xs={12}>
        {OverviewCard({
          title: "Total Users This Month",
          data: data.usersThisMonth,
          percentageString: `${data.usersIncreaseThisMonth}% compared to last month`,
        })}
      </Grid>

      <Grid item xs={12}>
        <SampleChart />
      </Grid>
    </Grid>
  );
}

interface OverviewCardProps {
  title: string;
  withoutPercentage?: boolean;
  data: number;
  percentageString?: string;
}

function OverviewCard(props: OverviewCardProps) {
  const { title, withoutPercentage, data, percentageString = "" } = props;
  return (
    <Card
      sx={{
        padding: 2,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        height: "100%",
      }}
      elevation={4}
    >
      <Stack gap={1}>
        <Typography>{title}</Typography>
        <Typography variant="h2" fontSize={"84px"}>
          {data}
        </Typography>
        {!withoutPercentage && (
          <Stack flexDirection={"row"} gap={1}>
            <ArrowUpward color="success" />
            <Typography color={"success.light"} variant="body1">
              {percentageString}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Card>
  );
}

async function getOverview() {
  const response = {
    totalPost: 523,
    postThisMonth: 98,
    increaseThisMonth: 30,
    usersThisMonth: 100,
    usersIncreaseThisMonth: 34,
    visitsThisMonth: 2394,
    visitsIncrease: 40,
  };
  return response;
}
