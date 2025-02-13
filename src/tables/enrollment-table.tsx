import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Enrollment } from "../hooks/useDashboardData";
import { epochToRelativeDate } from "../utils/helpers";

interface Props {
  rows: Enrollment[];
}

export default function EnrollmentTable({ rows }: Props) {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table sx={{ minWidth: 650 }} aria-label="enrollment table">
        <TableHead>
          <TableRow>
            <TableCell>Department</TableCell>
            <TableCell>Quality</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last Updated</TableCell>
            <TableCell>Total </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.department ?? "N/A"}
              </TableCell>
              <TableCell component="th" scope="row">
                {row?.quality ?? "N/A"}
              </TableCell>
              <TableCell>{epochToRelativeDate(row?.firstUpdated)}</TableCell>
              <TableCell>{epochToRelativeDate(row?.lastUpdated)}</TableCell>
              <TableCell>{row?.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
