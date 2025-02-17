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
import { departmentColumnsMap, infoTextMap } from "./InfoData";

const Details = () => {
  const { department_name, type, id } = useParams();

  const [dataList, setDataList] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataType, setDataType] = useState("");
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectedColumns, setSelectedColumns] = useState([]);

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
          ...(selectedColumns.length > 0 && { duplicateQuery: selectedColumns })
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
  }, [id, dataType, skip, take, selectedColumns]);

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

  const columnsForCurrentDepartment = departmentColumnsMap[department_name] || [];

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

  // Handle checkbox toggle for rows
  const handleCheckboxToggle = (rowId) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelected = new Set(prevSelectedRows);
      if (newSelected.has(rowId)) {
        newSelected.delete(rowId);
      } else {
        newSelected.add(rowId);
      }
      return newSelected;
    });
  };

  // Handle checkbox toggle for API columns
  const handleColumnCheckboxToggle = (column) => {
    setSelectedColumns((prevSelectedColumns) => {
      if (prevSelectedColumns.includes(column)) {
        return prevSelectedColumns.filter((item) => item !== column);
      } else {
        return [...prevSelectedColumns, column];
      }
    });
  };

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

  const infoText = infoTextMap[type] || "";

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
        {infoText && <p style={ { fontSize: 15,backgroundColor:"#c4c920" } }>{infoText}</p>}
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
      <Box mb={3}>
        <Typography variant="h6">Select Duplicate Query Columns:</Typography>
        {columnsForCurrentDepartment.map((column) => (
          <label key={column} style={{ marginRight: "15px" }}>
            <Checkbox
              checked={selectedColumns.includes(column)}
              onChange={() => handleColumnCheckboxToggle(column)}
            />
            {column}
          </label>
        ))}
      </Box>
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
