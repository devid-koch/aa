export const infoTextMap = {
    schemes : "Duplicate records are checked using 'Scheme Name' and 'Scheme Code' across multiple logins. These fields are the minimum required to identify duplicates.",
    courses :  "Duplicate records are checked using 'Course Name' and 'Course Code' across multiple logins. These fields are the minimum required to identify duplicates.",
    TP : "Duplicate records are checked using 'Training Partner Name' and 'PAN NO' across multiple logins. These fields are the minimum required to identify duplicates.",
    candidates : "Duplicate records are checked using 'Candidate Name', 'Date Of Birth', ''Phone No' and 'Aadhar Last 4 digit' across multiple logins. These fields are the minimum required to identify duplicates.",
    assessors :  "Duplicate records are checked using 'PAN NO' across multiple logins. These field is the minimum required to identify duplicates.",
    trainers :  "Duplicate records are checked using 'PAN NO' across multiple logins. These field is the minimum required to identify duplicates.",
    placements : "Duplicate records are checked using 'Candidate Name/ID' across multiple logins. These field is the minimum required to identify duplicates.",
};


export const typeColumnsMap = {
    "courses": ["vsCourseName", "vsCourseCode"],
    "schemes": ["vsSchemeName", "vsSchemeType"],
    "candidates": ["vsCandidateName", "vsDOB","vsUUID","vsMobile"],
    "trainers" : ["TrainerName","vsPan"],
    "sectors" : ["pklSectorId","vsSectorName"],
    "Training Partner": ["vsTpName", "vsPan"],
    "Training Center": ["pklTcId","vsTcName","vsTcCode"],
    "batchs": ["pklBatchId","SDMSid","fklCourseId","QPNOS"],
    "assessors":["pklConvAssessorId","vsAssosserName","vsEmail"],
    "assessements":["batchId","SDMSBatchId","vsAgency"],
    "placements":["batchId","candidateId"]
  };



export const columnDisplayMap = {
    vsCourseName: "Course Name",
    pklConvAssessorId:"Conv Assessor Id",
    vsUUID:"UUID",
    vsMobile:"Mobile",
    SDMSBatchId:"SDMS Batch Id",
    vsAgency:"Agency",
    vsEmail:"Email",
    vsAssosserName:"Assosser Name",
    pklBatchId:"Batch Id",
    batchId:"Batch Id",
    candidateId:"Candidate Id",
    pklSectorId: "Sector ID",
    QPNOS:"QPNOS",
    SDMSid:"SDMS Id",
    fklCourseId:"Course Id",
    pklTcId: "TC Id",
    vsTcName: "TC Name",
    vsTcCode:"TC Code",
    vsCourseCode: "Course Code",
    vsSchemeName: "Scheme Name",
    vsSchemeType: "Scheme Type",
    vsCandidateName:"Candidate Name",
    vsDOB:"DOB",
    TrainerName:"Trainer Name",
    vsSectorName:"Sector Name",
    vsTpName:"Tp Name",
    vsPan:"PAN",
    

    
  };
  