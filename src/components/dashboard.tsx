import { Button, Container, Grid, Stack, Typography } from "@mui/material";
// import TotalCard from "./cards/total-card";
import useDashboardData from "../hooks/useDashboardData";
import Enrollments from "./enrollments";
import DashboardSkeleton from "./dashboard-skeleton";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Dashboard() {
  const { data, isLoading, refetch } = useDashboardData("payload");

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <Container component="main" maxWidth="xl" sx={ { py: 2 } }>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={ 500 } pb={ 2 }>
          Dashboard
        </Typography>
        <Button startIcon={ <RefreshIcon /> } onClick={ refetch }>
          Refresh
        </Button>
      </Stack>

      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } md={ 4 }>
          { isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            ""
            // <TotalCard header="Total Enrollments" value={data?.total} />
          ) }
        </Grid>
        <Grid item xs={ 12 } md={ 4 }>
          { isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            ""
            // <TotalCard header="Total Departments" value={data?.department} />
          ) }
        </Grid>
      </Grid>

      <Enrollments enrollments={ data?.departmentWiseEnrollment } />
    </Container>
  );
}
