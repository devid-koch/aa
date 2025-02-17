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
    "candidates": ["vsCandidateName", "vsDOB"],
    "trainers" : ["TrainerName",],
    "sectors" : ["pklSectorId","vsSectorName"],
    "tps": ["vsTpName", "vsPan"],
    "tcs": ["pklTcId","vsTcName","vsTcCode"]
  };



export const columnDisplayMap = {
    vsCourseName: "Course Name",
    pklSectorId: "Sector ID",
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
  