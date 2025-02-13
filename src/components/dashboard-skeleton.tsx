import { Container, Grid, Skeleton } from "@mui/material";

export default function DashboardSkeleton() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ pt: 2 }}>
        <Grid item xs={12} md={4}>
          <Skeleton height={200} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Skeleton height={200} />
        </Grid>
      </Grid>

      <Skeleton height={806} sx={{ marginTop: -20 }} />
    </Container>
  );
}
