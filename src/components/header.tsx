import { Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo from "../assets/ASDM_logo.png";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} color="inherit">
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" py={1} gap={1}>
            <img src={Logo} alt="ASDM Logo" width={70} />
            <Stack>
              <Typography variant="h6">
                Assam Skill Development Mission
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Convergence Dashboard
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </Box>
  );
}
