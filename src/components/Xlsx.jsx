import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import styled from "styled-components";

const DownloadButton = styled.button`
  background-color: lightblue;
  ${"" /* font-size: 12px; */}
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;
export const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <DownloadButton onClick={(e) => exportToCSV(apiData, fileName)}>
      XLSX
    </DownloadButton>
  );
};
