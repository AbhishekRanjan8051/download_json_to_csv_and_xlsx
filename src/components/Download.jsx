import React from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";

import { JsonData } from "./Data";
import { ExportToExcel } from "./Xlsx";
import { Popup } from "./Popup";
import { ShowData } from "./ShowData";
const fileName = "persons";
// const headers = [
//   { label: "First Name", key: "first_name" },
//   { label: "Last Name", key: "last_name" },
//   { label: "Email", key: "email" },
// ];
const csvReport = {
  filename: "persons.csv",
  // header: headers,
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
      <ShowData />
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
