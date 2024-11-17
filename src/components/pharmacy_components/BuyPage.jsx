import React, { useState, useEffect } from "react";
import { SearchInput } from "../../common/searchInput";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,

} from "@mui/material";
import Spinner from "../../custom/Spinner";
import { MedicineJson } from "./json";
import { useDispatch } from "react-redux";
import { updateMedicine } from "../../redux/catagorySlice";
import BasketPage from "./BasketPage";
import { useNavigate } from "react-router-dom";

const BuyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [counts, setCounts] = useState({});
  const [stock, setStock] = useState({});
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
const navigate = useNavigate()
  useEffect(() => {
    const initialStock = MedicineJson.reduce((acc, medicine) => {
      acc[medicine.id] = medicine.stock?.quantity || 0;
      return acc;
    }, {});
    setStock(initialStock);
  }, []);

  // const handleClose = () => setOpen(false);

  const handleIncrement = (medicineId, unitPrice) => {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[medicineId] || 0) + 1;
      setStock((prevStock) => ({
        ...prevStock,
        [medicineId]: Math.max(prevStock[medicineId] - 1, 0),
      }));
      return { ...prevCounts, [medicineId]: newCount };
    });
  };

  const handleDecrement = (medicineId) => {
    setCounts((prevCounts) => {
      const newCount = Math.max((prevCounts[medicineId] || 1) - 1, 0);
      setStock((prevStock) => ({
        ...prevStock,
        [medicineId]: Math.min(
          prevStock[medicineId] + 1,
          MedicineJson.find((med) => med.id === medicineId).stock?.quantity
        ),
      }));
      return { ...prevCounts, [medicineId]: newCount };
    });
  };

  const handleCountChange = (medicineId, event) => {
    const value = event.target.value;
    if (value === "") {
      setCounts((prevCounts) => ({ ...prevCounts, [medicineId]: 0 }));
      setStock((prevStock) => ({
        ...prevStock,
        [medicineId]: MedicineJson.find((med) => med.id === medicineId).stock
          ?.quantity,
      }));
    } else {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue) && parsedValue >= 0) {
        const stockDifference = stock[medicineId] - parsedValue;
        setCounts((prevCounts) => ({
          ...prevCounts,
          [medicineId]: parsedValue,
        }));
        setStock((prevStock) => ({
          ...prevStock,
          [medicineId]: Math.max(stockDifference, 0),
        }));
      }
    }
  };

 const handleAddAllToBasket = () => {
  const selectedMedicines = Object.keys(counts)
    .filter((id) => counts[id] && counts[id] > 0)
    .map((medicineId) => {
      const medicine = MedicineJson.find((med) => med.id === medicineId);
      return {
        id: medicineId,
        name: medicine.name,
        count: counts[medicineId],
        unitPrice: medicine.unit_price,
        totalPrice: counts[medicineId] * medicine.unit_price,
      };
    });

  // Dispatch the array of selected medicines
  dispatch(updateMedicine(selectedMedicines));

  // Navigate to the basket page
  navigate("/basket-page");
};


  return (
    <div className="bg-[#ffffff] p-3">
      <div className="p-3">
        <div className="flex">
          <div className="relative">
            <SearchInput />
          </div>
        </div>

        <div className="mt-10">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Medicine Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Price / Tablet
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Medicine Stock
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Required-Count
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading
                  ? Array.from(new Array(5)).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell colSpan={10}>
                          <Spinner height={20} />
                        </TableCell>
                      </TableRow>
                    ))
                  : MedicineJson.map((eachMedicine) => (
                      <TableRow key={eachMedicine.id}>
                        <TableCell>{eachMedicine.name}</TableCell>
                        <TableCell>{eachMedicine.unit_price}</TableCell>
                        <TableCell>
                          {stock[eachMedicine.id] > 0
                            ? stock[eachMedicine.id]
                            : "Out of Stock"}
                        </TableCell>
                        <TableCell>
                          {counts[eachMedicine.id] > 0 ? (
                            <div className="flex items-center space-x-2">
                              <Button
                                onClick={() => handleDecrement(eachMedicine.id)}
                              >
                                -
                              </Button>
                              <TextField
                                hiddenLabel
                                variant="filled"
                                type="text"
                                value={counts[eachMedicine.id] || ""}
                                onChange={(event) =>
                                  handleCountChange(eachMedicine.id, event)
                                }
                                className="w-14"
                                inputProps={{ min: 0 }}
                              />
                              <Button
                                onClick={() =>
                                  handleIncrement(
                                    eachMedicine.id,
                                    eachMedicine.unit_price
                                  )
                                }
                              >
                                +
                              </Button>
                            </div>
                          ) : (
                            <Button
                              onClick={() =>
                                handleIncrement(
                                  eachMedicine.id,
                                  eachMedicine.unit_price
                                )
                              }
                            >
                              +
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Sticky Add All to Basket Button */}
        <div className="sticky bottom-0 p-3 flex justify-end shadow-md">
          <Button
            variant="contained"
            color="primary"

            onClick={handleAddAllToBasket}
          >
            Add to Basket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
