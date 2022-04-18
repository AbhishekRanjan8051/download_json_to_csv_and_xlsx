import React from "react";
import {JsonData} from "./Data";
import styled from "styled-components";
const DataFormat = styled.div`
  display: flex;
  justify-content: center;
`;
function ShowData() {
  return (
    <div>
      <DataFormat>
        <table border="3" style={{ alignItems: "center" }}>
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
    </div>
  );
}
export { ShowData };
