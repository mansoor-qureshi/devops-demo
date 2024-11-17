import React, { useState } from "react";
import { SearchInput } from "../common/searchInput";
import { Button } from "@mui/material";
import { allMedicineList } from "../components/medicine/getData";
import { inventoryCatagory } from "../components/medicine/getData";
import InventoryList from "../components/inventory/InventoryList";
import { useSelector } from "react-redux";
import CreateInventoryForm from "../components/inventory/CreateInventoryForm";
const baseStyle =
  "border rounded-full cursor-pointer min-w-36 px-1 min-h-9 text-center flex items-center justify-center font-sans capitalize";
const Inventory = () => {
  const [open, setOpen] = useState(false);
  // const [isAllCatagoryList, setIsAllCatagoryList] = useState(allMedicineList);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState("all");
  const { categoryList } = useSelector((store) => store.category);
  const handleSelectedItem = (id) => {
    setSelectedItem(id);
  };
  const handleCreateFields = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const filteredDataList =
    selectedItem === "all"
      ? categoryList
      : categoryList.filter((item) => item.id === selectedItem);
  return (
    <div className="w-full h-full p-3 border bg-[#ffffff] ">
      <div className="p-3 flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="relative">
            <SearchInput />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateFields}
          >
            Create New Inventory
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <div
              className={`${baseStyle} ${
                selectedItem === "all"
                  ? "bg-blue-500 text-white border-blue-800"
                  : ""
              }`}
              onClick={() => handleSelectedItem("all")}
            >
              All
            </div>

            {categoryList.map((eachItem, index) => (
              <div
                className={`${baseStyle} ${
                  selectedItem === index
                    ? "bg-blue-500 text-white border-blue-800"
                    : ""
                }`}
                key={eachItem.id}
                onClick={() => handleSelectedItem(index)}
              >
                {eachItem.name}
              </div>
            ))}
          </div>
          <InventoryList
            isAllCatagoryList={filteredDataList}
            isLoading={isLoading}
          />
        </div>
        {open && <CreateInventoryForm open={open} handleClose={handleClose} />}
      </div>
    </div>
  );
};

export default Inventory;
