import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const medicineListHeaders = [
  {
    label: "Category Id",
    id: "id",
  },
  {
    label: "Category Name",
    id: "categoryname",
  },
  {
    label: "Created Date",
    id: "date",
  },
  {
    label: "Created By",
    id: "createdby",
  },
];

const MedicineList = (props) => {
  const { isLoading } = props;
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { categoryList } = useSelector((store) => store.category);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedCampaigns = categoryList?.slice(startIndex, endIndex);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {medicineListHeaders.map((data) => (
                <TableCell sx={{ fontWeight: "bold" }} key={data.id}>
                  {data.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading
              ? Array.from(new Array(rowsPerPage)).map((_, index) => (
                  <TableRow key={`${index}-skeleton-campaign`}>
                    <TableCell colSpan={medicineListHeaders?.length}>
                      <Skeleton height={20} />
                    </TableCell>
                  </TableRow>
                ))
              : paginatedCampaigns?.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>{campaign?.id ?? ""}</TableCell>
                    <TableCell>{campaign?.name ?? ""}</TableCell>
                    <TableCell>
                      {campaign.created_at
                        ? new Date(campaign.created_at).toLocaleDateString()
                        : ""}
                    </TableCell>
                    <TableCell>{campaign.created_by?.username ?? ""}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(categoryList?.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default MedicineList;
