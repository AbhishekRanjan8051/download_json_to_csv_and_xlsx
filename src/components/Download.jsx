import React from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";

import { JsonData } from "./Data";
import { ExportToExcel } from "./Xlsx";
import { Popup } from "./Popup";
const fileName = "persons";
const headers = [
  { label: "First Name", key: "first_name" },
  { label: "Last Name", key: "last_name" },
  { label: "Email", key: "email" },
];
const csvReport = {
  filename: "persons.csv",
  header: headers,
  data: JsonData,
};

const DownloadButton = styled.button`
  background-color: lightblue;
  ${"" /* font-size: 12px; */}
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;
const DataFormat = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

function Download() {
  const [isOpen, setIsOpen] = React.useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h1>Download JSON to CSV and XLSX</h1>
      <DownloadButton onClick={togglePopup}>DOWNLOAD</DownloadButton>
      <br />
      <br />
      <DataFormat>
        <table border="1" style={{ alignItems: "center" }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {JsonData.map((user) => (
            <tbody>
              <tr>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </DataFormat>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Download the Data</b>
              <br />
              <br />
              <ButtonDiv>
                <DownloadButton>
                  <CSVLink
                    style={{ textDecoration: "none", color: "black" }}
                    {...csvReport}
                  >
                    CSV
                  </CSVLink>
                </DownloadButton>

                <ExportToExcel apiData={JsonData} fileName={fileName} />
              </ButtonDiv>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export { Download };
