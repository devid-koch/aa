import { Box, Stack, Typography } from "@mui/material";
import EnrollmentTable from "../tables/enrollment-table";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Enrollment } from "../hooks/useDashboardData";

interface Props {
  enrollments: Enrollment[] | undefined;
}

export default function Enrollments({ enrollments }: Props) {
  return (
    <Box py={3}>
      <Typography fontWeight={500} pb={2}>
        Enrollment by Departments
      </Typography>

      {enrollments && enrollments?.length ? (
        <EnrollmentTable rows={enrollments} />
      ) : (
        <Stack alignItems="center" justifyContent="center" p={12}>
          <SupportAgentIcon sx={{ fontSize: 60 }} />
          <Typography variant="body2" color="text.secondary">
            No data found!
          </Typography>
        </Stack>
      )}
    </Box>
  );
}
