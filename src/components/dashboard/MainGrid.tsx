import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChartUserByCountry from "./ChartUserByCountry";
import CustomizedTreeView from "./CustomizedTreeView";
import CustomizedDataGrid from "./CustomizedDataGrid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PageViewsBarChart from "./PageViewsBarChart";
import SessionsChart from "./SessionsChart";
import PersonIcon from "@mui/icons-material/Person";
import StatCard, { StatCardProps } from "./StatCard";
import useDashboardData from "../../hooks/useDashboardData";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import { departmentFetchCounts } from "../../api";
import HighlightedCard from "./HighlightedCard";
import { FormControl, Select } from "@mui/material";

const data: StatCardProps[] = [
  {
    title: "Candidate",
    value: "14,000",
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
    icon: <PersonIcon />,
  },
  {
    title: "Courses",
    value: "501",
    interval: "Last 30 days",
    trend: "down",
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600,
      820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 510, 400, 360, 300,
      220,
    ],
    icon: <PersonIcon />,
  },
  {
    title: "Training Centres",
    value: "200",
    interval: "Last 30 days",
    trend: "neutral",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
      530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
    icon: <PersonIcon />,
  },
  {
    title: "Training Partner",
    value: "950",
    interval: "Last 30 days",
    trend: "neutral",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
      530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
    icon: <PersonIcon />,
  },
];

export default function MainGrid() {

  const DEPARTMENT_ID_MAP: Record<string, string> = {
    "1012": "JJM",
    "1016": "HT&SH",
    "1017": "NULM",
    "1022": "ASDM"
  };
  const { data: fetchData, isLoading } = useDashboardData();
  const [tabs, setTabs] = useState("all");
  const [departmentName, setDepartmentName] = useState("");
  const [countData, setCountData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [integrationType, setIntegrationType] = useState("");

  const fetchCount = async (departmentId: string) => {
    try {
      setLoading(true);
      setError(null);
      const requestId = DEPARTMENT_ID_MAP[departmentId] || departmentId;
      if (departmentId !== "all") {
        const response = await departmentFetchCounts(requestId, integrationType ? Number(integrationType) : undefined)
        setCountData(response);
      } else {
        setCountData({});
      }
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCount(tabs);
  }, [tabs, integrationType]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabs(newValue);
    const selectedDepartment = fetchData?.department?.find(
      (item) => item.departmentId === newValue
    );

    setDepartmentName(selectedDepartment?.departmentFullName)
  };

  const handleChangeIntegration = (event: any) => {
    setIntegrationType(event.target.value)
  }

  const labels = Object.keys(tabs !== "all" ? countData ?? {} : fetchData?.count ?? {});
  const values = Object.values(tabs !== "all" ? countData ?? {} : fetchData?.count ?? {}).map(String);



  if (isLoading) return <p>Loading...</p>;

  return (
    <Box sx={ { width: "100%", maxWidth: { sm: "100%", md: "1700px" } } }>
      {/* cards */ }
      <Typography component="h2" variant="h6" sx={ { mb: 2 } }>
        Overview
      </Typography>
      { tabs !== "all" &&
        <>
          <FormControl sx={ { width: 200, padding: 2 } }>
            <InputLabel id="demo-simple-select-label">Integration Type</InputLabel>
            <Select
              value={ integrationType }
              label="Integration Type"
              onChange={ handleChangeIntegration }
            >
              <MenuItem value={ 1 }>Manual Upload</MenuItem>
              <MenuItem value={ 2 }>Bulk Upload (Excel Sheet)</MenuItem>
              <MenuItem value={ 3 }>API Integration</MenuItem>
            </Select>
          </FormControl>
        </>
      }
      <Grid
        container
        spacing={ 2 }
        columns={ 4 }
        sx={ { mb: (theme) => theme.spacing(2) } }
      >
        <Box sx={ { width: "100%", typography: "body1" } }>
          <TabContext value={ tabs }>
            <Box sx={ { borderBottom: 1, borderColor: "divider" } }>
              <TabList onChange={ handleChange }>
                <Tab
                  sx={ { textTransform: "capitalize" } }
                  key="static"
                  label="All"
                  value="all"
                />
                { fetchData?.department?.map((item, index) => (
                  <Tab
                    sx={ { textTransform: "capitalize" } }
                    key={ index }
                    label={ item.departmentName }
                    value={ item.departmentId }
                  />
                )) }
              </TabList>
            </Box>
            <TabPanel value="all">All Items</TabPanel>
            { fetchData?.department?.map((item, index) => (
              <TabPanel key={ index } value={ item.departmentId }>
                { item.departmentFullName } Data
              </TabPanel>
            )) }
          </TabContext>
        </Box>

        { tabs !== "all"
          ? Object.entries(countData ?? {}).map(([key, value], index) => (
            <Grid key={ index } size={ { xs: 12, sm: 4, lg: 1 } }>
              <StatCard
                title={ key === "tps" ? "Training Partner" : key === "tcs" ? "Training Center" : key }
                value={ value.toString() }
                isNavigate={ true }
                departmentId={ tabs }
                departmentName={ departmentName }
                isLoading={ loading }
              />
            </Grid>
          ))
          : Object.entries(fetchData?.count ?? {})?.map(
            ([key, value], index) => (
              <Grid key={ index } size={ { xs: 12, sm: 4, lg: 1 } }>
                <StatCard title={ key === "tps" ? "Training Partner" : key === "tcs" ? "Training Center" : key }
                value={ value.toString() } />
              </Grid>
            )
          ) }

        {/* <Grid size={ { xs: 12, sm: 6, lg: 3 } }>
          <HighlightedCard />
        </Grid> */}
        {/* <Grid size={ { xs: 12, md: 6 } }>
          <SessionsChart />
        </Grid> */}
        <Grid size={ { xs: 12, md: 6, lg: 2 } }>
          <PageViewsBarChart labels={ labels } values={ values } />
        </Grid>

      </Grid>
      {/* <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: "column", sm: "row", lg: "column" }}>
            <CustomizedTreeView />
          </Stack>
        </Grid>
      </Grid> */}
    </Box>
  );
}
