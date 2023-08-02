import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  const tableData = [
    {
      id: 1,
      first_name: "Marylin",
      last_name: "Goman",
      email: "mgoman0@prweb.com",
      gender: "Female",
      ip_address: "175.91.184.247",
    },
    {
      id: 2,
      first_name: "Lenna",
      last_name: "Vereker",
      email: "lvereker1@yale.edu",
      gender: "Female",
      ip_address: "223.223.49.30",
    },
    {
      id: 3,
      first_name: "Arel",
      last_name: "Gregorin",
      email: "agregorin2@soup.io",
      gender: "Male",
      ip_address: "19.48.43.135",
    },
    {
      id: 4,
      first_name: "Rosabella",
      last_name: "Apple",
      email: "rapple3@yellowpages.com",
      gender: "Female",
      ip_address: "60.60.254.16",
    },
    {
      id: 5,
      first_name: "Berkley",
      last_name: "Colnett",
      email: "bcolnett4@bizjournals.com",
      gender: "Non-binary",
      ip_address: "97.62.82.153",
    },
    {
      id: 6,
      first_name: "Cully",
      last_name: "Elce",
      email: "celce5@tmall.com",
      gender: "Male",
      ip_address: "0.154.253.198",
    },
    {
      id: 7,
      first_name: "Dall",
      last_name: "Robke",
      email: "drobke6@wired.com",
      gender: "Male",
      ip_address: "158.132.252.124",
    },
    {
      id: 8,
      first_name: "Baxy",
      last_name: "Wear",
      email: "bwear7@soup.io",
      gender: "Male",
      ip_address: "219.108.44.138",
    },
    {
      id: 9,
      first_name: "Lemmy",
      last_name: "Thurstan",
      email: "lthurstan8@typepad.com",
      gender: "Male",
      ip_address: "159.155.25.16",
    },
    {
      id: 10,
      first_name: "Alvera",
      last_name: "Cockshut",
      email: "acockshut9@hc360.com",
      gender: "Agender",
      ip_address: "218.229.170.150",
    },
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "300px", borderTop: "1px solid #333" }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableCell>Id</TableCell>
          <TableCell>FirstName</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell align="center">Email</TableCell>
          <TableCell>Gender</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRow
              key={item?.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{item?.id}</TableCell>
              <TableCell>{item?.first_name}</TableCell>
              <TableCell>{item?.last_name}</TableCell>
              <TableCell align="center">{item?.email}</TableCell>
              <TableCell>{item?.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
