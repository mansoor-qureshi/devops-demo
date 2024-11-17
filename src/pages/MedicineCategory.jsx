import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryList,
  addCategory,
  setNewCategoryName,
} from "../redux/catagorySlice";
import MedicineList from "../components/medicine/MedicineList";
import { toast } from "react-toastify";
import axios from "axios";
import { ngrokPath } from "../constants/ApiPaths";
import Spinner from "../custom/Spinner";
import { getAccessToken } from "../common/businesslogic";

const MedicineCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { categoryList, newCategoryName } = useSelector(
    (store) => store.category
  );
  const dispatch = useDispatch();
  const maxLength = 40;
  const handleAddCategory = async () => {
    if (newCategoryName.trim() === "") {
      toast.warn("Enter Medicine name");
      return;
    }
    dispatch(addCategory());
  };
  const handleInputChange = (e) => {
    if (e.target.value.length <= maxLength) {
      dispatch(setNewCategoryName(e.target.value));
    } else {
      toast.warn(`Maximum length is ${maxLength} characters`);
    }
  };
  return (
    <div className="w-full h-full p-3 border bg-[#ffffff]">
      <div className="p-3 flex flex-col gap-10"></div>
      {isLoading && <Spinner />}
      <span className="font-bold text-lg">Medicine Category</span>
      <div className="flex justify-end items-center gap-5">
        <input
          type="text"
          className="border h-10 rounded-md w-80 px-3"
          placeholder="Enter Medicine Name"
          value={newCategoryName}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddCategory}>
          Add category
        </Button>
      </div>
      <div className="mt-5">
        {categoryList.length > 0 ? (
          <MedicineList />
        ) : (
          <div className="font-bold text-[18px] flex justify-center mt-5">
            <p>No Category added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineCategory;
