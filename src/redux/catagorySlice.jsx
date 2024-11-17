import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryList: [],
  newCategoryName: "",
  fieldList: [],
  formData: {},
  // items: {},
  basket: [], 
};
const categorySlice = createSlice({
  name: "catagory",
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    setNewCategoryName: (state, action) => {
      state.newCategoryName = action.payload;
    },
    setFieldList: (state) => {
      state.fieldList.unshift(state.formData);
      state.formData = {};
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addCategory: (state) => {
      if (state.newCategoryName.trim()) {
        const newCategory = {
          id: Date.now(), // Assign a temporary ID for now
          created_by: {
            id: 1, // Example creator ID
            username: "johnwick", // Example creator username
          },
          name: state.newCategoryName,
          created_at: new Date().toISOString(),
        };
        state.categoryList.unshift(newCategory); // Add the complete category object
        state.newCategoryName = ""; // Clear the newCategoryName after adding
      }
    },

    updateMedicine: (state, action) => {
      const selectedMedicines = action.payload; // Array of selected medicine objects
      selectedMedicines.forEach((medicine) => {
        const existingItem = state.basket.find((item) => item.id === medicine.id);
        if (existingItem) {
          // Update count and totalPrice if item exists
          existingItem.count += medicine.count;
          existingItem.totalPrice += medicine.totalPrice;
        } else {
          // Add new item if not already in basket
          state.basket.push(medicine);
        }
      });
    },
    resetMedicine: (state) => {
      state.basket = [];
    },
    // resetMedicine: (state) => {
    //   state.items = {};
    // },
  },
});
export const {
  setNewCategoryName,
  setCategoryList,
  addCategory,
  setFieldList,
  updateFormData,
  updateMedicine,
  resetMedicine
} = categorySlice.actions;

export default categorySlice.reducer;
