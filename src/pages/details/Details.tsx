// @ts-nocheck
import { useNavigate, useParams } from "react-router-dom";
import CustomizedDataGrid from "../../components/dashboard/CustomizedDataGrid";
import { useEffect, useState } from "react";
import { getDepartmentData } from "../../api";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { getColumns } from "./columns";

const Details = () => {
  const { department_name, type, id } = useParams();

  const [dataList, setDataList] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataType, setDataType] = useState("");
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [totalRows, setTotalRows] = useState(0);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      if (id) {
        const requestBody = {
          card: type,
          department: parseInt(id, 10),
          skip: skip,
          take: 50,
          data_type: dataType,
        };
        const response = await getDepartmentData(requestBody);
        setDataList(response);
      }
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, dataType, skip, take]);

  const handleDataTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDataType(event.target.value);
    setSkip(0); // Reset to first page when changing the filter
  };

  const handlePagination = (newSkip: number) => {
    setSkip(newSkip);
  };

  const columns = getColumns(dataType, type);

  //   fklDepartmentId
  // :
  // "3"
  // iUploadMethod
  // :
  // null
  // pklSchemeId
  // :
  // 83
  // sanctionOrderNo
  // :
  // "2"
  // vsFundName
  // :
  // null
  // vsSchemeCode
  // :
  // "22"
  // vsSchemeFUndingRatio
  // :
  // "2"
  // vsSchemeFundingType
  // :
  // "4"
  // vsSchemeName
  // :
  // "new"
  // vsSchemeType
  // :
  // "4"

  const handlePageSize = (item) => {
    console.log(item);

  }
  const handleNavigate = () => {
    navigate(-1);
  }

  const rows = dataList?.data ? dataList.data.map((row, index) => ({
    ...row,
    id: index + 1,
  })) : [];


  return (
    <div>
      <Box width={ 100 }>
        <Button
          size="large" variant="contained"
          onClick={ handleNavigate }
          color="primary" startIcon={ <ArrowBackIosNewIcon /> }
          fullWidth={ true }
        >
          Back
        </Button>
      </Box>
      <Typography
        component="h1"
        gutterBottom
        fontSize={ 20 }
        sx={ { textTransform: "capitalize", textAlign: "center" } }
      >
        { department_name } { type } Data ** <br />
        <p style={ { fontSize: 15 } }>Duplicate records are identified based on matching 'Candidate First Name', 'Date Of Birth', 'Phone No' and 'Aadhar Last 4 digit' across multiple logins, highlighting common entries found in different departments.</p>
      </Typography>
      <Stack width={ 200 } mb={ 5 }>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Select Filter Type
          </InputLabel>
          <Select
            value={ dataType }
            label="Select Filter Type"
            onChange={ handleDataTypeChange }
          >
            <MenuItem value={ "" }>All</MenuItem>
            <MenuItem value={ "duplicate" }>Duplicate</MenuItem>
          </Select>
        </FormControl>

      </Stack>
      {/* <div>
        <button
          onClick={() => handlePagination(skip - take)}
          disabled={skip <= 0}
        >
          Previous
        </button>
        <button onClick={() => handlePagination(skip + take)}>Next</button>
      </div> */}

      <CustomizedDataGrid
        loading={ loading }
        totalRows={ dataList?.total }
        Columns={ columns } Data={ rows } />
    </div>
  );
};

export default Details;
