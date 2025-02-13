import { format } from "date-fns";

export const getColumns = (dataType,type) => {
  if (dataType === "duplicate") {
    switch (type) {
      case "candidates":
        return candidateDuplicateColumns;
      case "schemes":
        return schemeDuplicateColumns;
      case "departments":
        return departmentDuplicateColumns;
      case "sectors":
        return duplicateSectorColumns;
      case "courses":
        return coursesDuplicateColumns;
      case "tps":
        return tpsDuplicateColumns;
      case "tcs":
        return tcsDuplicateColumns
      case "batchs":
        return batchsDuplicateColumns;
      case "trainers":
        return trainersDuplicateColumns;
      case "assessors":
        return assessorsDuplicateColumns;
      case "assessements":
        return assessementsDuplicateColumns
      case "placements":
        return placementsDuplicateColumns;
      default:
        return schemeColumns;
    }
  }

  switch (type) {
    case "candidates":
      return CandidateColumns;
    case "schemes":
      return schemeColumns;
    case "departments":
      return departmentColumns;
    case "sectors":
      return sectorsColumns;
    case "courses":
      return coursesColumns;
    case "tps":
      return tpsColumns;
    case "tcs":
      return tcsColumns;
    case "batchs":
      return batchsColumns;
    case "trainers":
      return trainersColumns;
    case "assessors":
      return assessorsColumns;
    case "assessements":
      return assessementsColumns;
    case "placements":
      return placementsColumns;
    default:
      return schemeColumns;
  }
};


const sectorsColumns = [
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
  {
      field: "pklSectorId",
      headerName: "Sector Id",
      flex: 0.5,
      width: 80,
    },
    {
      field: "vsSectorName",
      headerName: "Sector Name",
      flex:0.5,
      width: 80,
  },
    {
      field: "vsSectorName",
      headerName: "Sector Name",
      flex:0.5,
      width: 80,
    },
  {
      field: "dtCreatedAt",
    headerName: "Created At",
      flex:0.5,
    width: 80,
      valueFormatter: (params) => {
        if (params) {
          return format(params, "dd/MM/yyyy");
        }
        return "";
      },
    },
]

const duplicateSectorColumns = [
    {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
  {
      field: "pklSectorId",
      headerName: "Sector Id",
      flex: 0.5,
      width: 80,
    },
    {
      field: "vsSectorName",
      headerName: "Sector Name",
      flex:0.5,
      width: 80,
  },
    {
      field: "vsSectorName",
      headerName: "Sector Name",
      flex:0.5,
      width: 80,
    },
  {
      field: "dtCreatedAt",
    headerName: "Created At",
      flex:0.5,
    width: 80,
      valueFormatter: (params) => {
        if (params) {
          return format(params, "dd/MM/yyyy");
        }
        return "";
      },
    },
]

const schemeColumns = [
    {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
    {
      field: "pklSchemeId",
      headerName: "Scheme Id",
      flex: 0.5,
      minWidth: 80,
    },
    {
      field: "vsSchemeCode",
      headerName: "Scheme Code",
      flex: 0.5,
      minWidth: 80,
    },
    {
      field: "vsSchemeName",
      headerName: "Scheme Name",
      headerAlign: "right",
      align: "right",
      flex: 1,
      minWidth: 80,
    },
    {
      field: "vsSchemeFundingType",
      headerName: "Scheme Funding Type",
      headerAlign: "right",
      align: "right",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "vsSchemeFUndingRatio",
      headerName: "Scheme Funding Ratio",
      headerAlign: "right",
      align: "right",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "sanctionOrderNo",
      headerName: "Sanction Order No",
      headerAlign: "right",
      align: "right",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "vsFundName",
      headerName: "Fund Name",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "dtSanctionDate",
      headerName: "Sanction Date",
      flex: 1,
      minWidth: 150,
      valueFormatter: (params) => {
        if (params) {
          return format(params, "dd/MM/yyyy");
        }
        return "";
      },
    },
];


const departmentColumns = []
const departmentDuplicateColumns=[]

const schemeDuplicateColumns = [
   {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
    {
      field: "vsSchemeName",
      headerName: "Scheme Name",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "vsSchemeType",
      headerName: "Scheme Type",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "departmentNames",
      headerName: "Department Names",
      flex: 1.5,
      minWidth: 200,
    },
]

const coursesDuplicateColumns = [
   {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
    {
      field: "vsCourseName",
      headerName: "Course Name",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "vsCourseCode",
      headerName: "Course Code",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "departmentNames",
      headerName: "Department Names",
      flex: 1.5,
      minWidth: 200,
    },
]

const coursesColumns = [
   {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
    {
      field: "pklCourseId",
      headerName: "Course Id",
      flex: 1.5,
      minWidth: 80,
    },
    {
      field: "vsCourseName",
      headerName: "Course Name",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "vsCourseCode",
      headerName: "Course Code",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "dtFromDate",
      headerName: "Start Date",
      flex: 1.5,
      minWidth: 80,
      valueFormatter: (params) => {
        if (params) {
          return format(params, "dd/MM/yyyy");
        }
        return "";
      },
    },
    {
      field: "dtToDate",
      headerName: "End Date",
      flex: 1.5,
      minWidth: 80,
      valueFormatter: (params) => {
        if (params) {
          return format(params, "dd/MM/yyyy");
        }
        return "";
      },
    },
    {
      field: "iTheoryDurationInHours",
      headerName: "Theory Duration In Hours",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "iPracticalDurationInHours",
      headerName: "Practical Duration In Hours",
      flex: 1.5,
      minWidth: 200,
  },
  {
    field: "vsSectorName",
    headerName: "Sector Name",
    flex: 1.5,
    minWidth: 80,
    }
]

const tpsColumns = [
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
  {
      field: "pklTpId",
      headerName: "TP ID",
      width: 80,
    },
  {
      field: "vsTpName",
      headerName: "TP Name",
      width: 150,
  },
    {
      field: "vsSpocName",
    headerName: "Spoc Name",
      flex:0.5,
      minWidth: 80,
    },
  {
      field: "vsSpocEmail",
      headerName: "Spoc Email",
      width: 150,
    },
  {
      field: "iSpocContactNum",
    headerName: "Spoc Contact Number",
      flex:0.5,
      minWidth: 80,
    },
  {
      field: "vsSmartId",
    headerName: "Smart Id",
      flex:0.5,
      minWidth: 80,
    },
  {
      field: "vsCity",
    headerName: "City",
      flex:0.5,
      minWidth: 80,
    },
]

const tpsDuplicateColumns = [
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
  },
  {
    field: "vsTpName",
    headerName: "Tp Name",
    flex: 0.5,
    minWidth:80
  },
  {
    field: "vsPan",
    headerName: "Pan",
    flex: 0.5,
    minWidth:80
  },
  {
    field: "departmentNames",
    headerName: "Department Names",
    flex: 0.5,
    minWidth:80
  },
]

const tcsColumns = [
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
  },
  {
    field: "pklTcId",
    headerName: "Tc Id",
    flex:0.5,
    minWidth:80
  },
  {
    field: "vsTcName",
    headerName: "Tc Name",
    flex:0.5,
    minWidth:80
  },
  {
    field: "vsTcCode",
    headerName: "Tc Code",
    flex:0.5,
    minWidth:80
  },
  {
    field: "pklTcId",
    headerName: "Tc Id",
    flex:0.5,
    minWidth:80
  },
]

const tcsDuplicateColumns =[
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
  },
  {
    field: "pklTcId",
    headerName: "Tc Id",
    flex:0.5,
    minWidth:80
  },
  {
    field: "vsTcName",
    headerName: "Tc Name",
    flex:0.5,
    minWidth:80
  },
  {
    field: "vsTcCode",
    headerName: "Tc Code",
    flex:0.5,
    minWidth:80
  },
  {
    field: "pklTcId",
    headerName: "Tc Id",
    flex:0.5,
    minWidth:80
  },
]
const trainersDuplicateColumns =[
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
]
const trainersColumns =[
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
]
const assessorsColumns =[
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
]

const assessementsColumns = [
  {
    field: "slNo",
    headerName: "Sl. No",
    width: 80,
    renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
  }
]
const assessementsDuplicateColumns = [
  {
    field: "slNo",
    headerName: "Sl. No",
    width: 80,
    renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
  }
]

const placementsColumns =[
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
]
const placementsDuplicateColumns =[
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
]
const assessorsDuplicateColumns =[
  {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
]

const batchsColumns = [
   {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
  },
  {
    field: "pklBatchId",
    headerName: "Batch Id",
    flex:0.5,
    minWidth:80
  },
  {
    field: "SDMSid",
    headerName: "SDMS Id",
    flex:0.5,
    minWidth:80
  },
  {
    field: "fklCourseId",
    headerName: "Course Id",
    flex:0.5,
    minWidth:80
  },
  {
    field: "QPNOS",
    headerName: "QPNOS",
    flex:0.5,
    minWidth:80
  },
  
]
const batchsDuplicateColumns = [
   {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
]
  
const CandidateColumns = [
   {
      field: "id",
      headerName: "Sl. No",
      width: 80,
   },
    {
      field: "vsCandidateName",
      headerName: "Candidate Name",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "vsDOB",
      headerName: "DOB",
      flex: 1.5,
      minWidth: 200,
      valueFormatter: (params) => {
        if (params) {
          return format(params, "dd/MM/yyyy");
        }
        return "";
      },
    },
    {
      field: "vsGenderName",
      headerName: "Gender Name",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "vsMobile",
      headerName: "Mobile Number",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "vsQualification",
      headerName: "Qualification",
      flex: 1.5,
      minWidth: 200,
    },
]

const candidateDuplicateColumns = [
   {
      field: "slNo",
      headerName: "Sl. No",
      width: 80,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
    {
      field: "candidateId",
      headerName: "Candidate Id",
      flex: 1.5,
      minWidth: 200,
    },
    {
        field: "vsCandidateName",
        headerName: "Candidate Name",
        flex: 1.5,
        minWidth: 200,
    },
    {
      field: "departmentNames",
      headerName: "Department Names",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "vsDOB",
      headerName: "DOB",
      flex: 1.5,
      minWidth: 200,
      valueFormatter: (params) => {
        if (params) {
          return format(params, "dd/MM/yyyy");
        }
        return "";
      },
    },
]