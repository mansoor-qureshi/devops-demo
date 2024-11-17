import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const catagoryTable = [
  { label: "category name", value: "categoryname" },
  // { label: "category id", value: "categoryid" },
  { label: "product id", value: "id" },
  { label: "Medicine Name", value: "medicinename" },
  { label: "dosage", value: "dosage" },
  { label: "price / Tablet", value: "price" },
  { label: "expiry date", value: "expirydate" },
];
const InventoryList = ({ isAllCatagoryList, isLoading }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { fieldList } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedFieldList = fieldList?.slice(startIndex, endIndex);
  return (
    <div className="max-h-screen">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {catagoryTable.map((row) => {
                return (
                  <TableCell
                    key={row.value}
                    sx={{ fontWeight: "bold" }}
                    className="capitalize"
                  >
                    {row.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading
              ? Array.from(new Array(rowsPerPage)).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={catagoryTable?.length}>
                      <Skeleton height={20} />
                    </TableCell>
                  </TableRow>
                ))
              : paginatedFieldList.map((eachField) => (
                  <TableRow key={eachField.category}>
                    <TableCell>{eachField.category}</TableCell>
                    <TableCell>{eachField.product_id}</TableCell>
                    <TableCell>
                      <Link to={`/details?id=${eachField.product_id}`} className="text-blue-500">{eachField.name}</Link>
                    </TableCell>
                    <TableCell>{eachField.dosage}</TableCell>
                    <TableCell>{eachField.unit_price}</TableCell>
                    <TableCell>{eachField.expiry_date}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InventoryList;
