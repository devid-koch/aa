import * as XLSX from "xlsx";

export const handleDownloadReport = (columns, data) => {
    const columnMapping = columns.reduce((acc, col) => {
      acc[col.field] = col.headerName;
      return acc;
    }, {});
  
    // Extract only the required fields and rename headers
    const formattedData = data.map(row => {
      const formattedRow = {};
      Object.keys(columnMapping).forEach(key => {
        if (row[key] !== undefined) {
          formattedRow[columnMapping[key]] = row[key]; // Rename headers
        }
      });
      return formattedRow;
    });
  
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
  
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Report.xlsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };