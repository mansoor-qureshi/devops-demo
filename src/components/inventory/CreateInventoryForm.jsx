import React, { useState } from "react";
import Spinner from "../../custom/Spinner";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setFieldList, updateFormData } from "../../redux/catagorySlice";

const CreateInventoryForm = (props) => {
  const { open, handleClose, refresh, doctorInfo = null } = props;
  const [isLoading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // Initialize formErrors
  const { categoryList, formData } = useSelector((store) => store.category);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }

    let updatedValue = value;
    let errorMessage = "";

    // Handle validation for specific fields
    if (name === "category") {
      const selectedCategory = categoryList.find(
        (eachCategory) => eachCategory.id === value
      );
      updatedValue = selectedCategory ? selectedCategory.name : value;
    } else if (name === "product_id" || name === 'name') {
      if(/[^a-zA-Z0-9]/.test(value)){
        errorMessage = `${name === "product_id" ? "Product ID" : "Name"} should contain only letters and numbers.`;
        updatedValue = value.replace(/[^a-zA-Z0-9]/g, "");
      } else {
        updatedValue = value;
      }
    } else if (name === "unit_price" || name === 'quantity') {
      if (/[^0-9]/.test(value)) {  
        errorMessage = `${name === "unit_price" ? "Price" : "Quantity"} should contain only numbers.`;
        updatedValue = value.replace(/[^0-9]/g, "");
      } else {
        updatedValue = value;
      }
    }

    if(errorMessage){
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    dispatch(updateFormData({ [name]: updatedValue }));
  };

  // Validate the form fields before submission
  const validateCreateFieldForm = () => {
    const errors = {};
    let requiredFields = [
      "category",
      "product_id",
      "name",
      "unit_price",
      "expiry_date",
      "quantity",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        errors[field] = "This field is required";
      }
    });

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateCreateFieldForm(); // Call validation before submission

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); // Set errors to the state if there are validation issues
      return;
    }
    dispatch(setFieldList());

    
    // If no errors, reset form data
    dispatch(
      updateFormData({
        category: "",
        product_id: "",
        name: "",
        drug: "",
        dosage: "",
        unit_price: "",
        expiry_date: "",
        side_effects: "",
        quantity: "",
        reorder_level: "",
      })
    );
    
    handleClose();
  };

  return (
    <div>
      {isLoading && <Spinner />}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <div className="flex justify-between items-center">
            <span>Create New Field</span>
            <IoMdClose onClick={handleClose} className="cursor-pointer" />
          </div>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} className="py-5">
              {/* Category Field */}
              <Grid item xs={4} sm={6}>
                <TextField
                  select
                  label="Category"
                  fullWidth
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  error={!!formErrors.category}
                  helperText={formErrors.category}
                  required
                >
                  {categoryList.map((eachCategory) => (
                    <MenuItem key={eachCategory.id} value={eachCategory.id}>
                      {eachCategory.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Product Id */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Product Id"
                  fullWidth
                  name="product_id"
                  value={formData.product_id}
                  onChange={handleChange}
                  error={!!formErrors.product_id}
                  helperText={formErrors.product_id}
                  required
                />
              </Grid>

              {/* Name */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Name"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                  required
                />
              </Grid>

              {/* Drug */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Drug"
                  fullWidth
                  name="drug"
                  value={formData.drug}
                  onChange={handleChange}
                  error={!!formErrors.drug}
                  helperText={formErrors.drug}
                />
              </Grid>

              {/* Dosage */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Dosage"
                  fullWidth
                  name="dosage"
                  value={formData.dosage}
                  onChange={handleChange}
                  error={!!formErrors.dosage}
                  helperText={formErrors.dosage}
                />
              </Grid>

              {/* Price */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Price / Tablet"
                  fullWidth
                  name="unit_price"
                  value={formData.unit_price}
                  onChange={handleChange}
                  error={!!formErrors.unit_price}
                  helperText={formErrors.unit_price}
                  required
                />
              </Grid>

              {/* Expiry Date */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Expiry Date"
                  fullWidth
                  name="expiry_date"
                  type="date"
                  value={formData.expiry_date}
                  onChange={handleChange}
                  error={!!formErrors.expiry_date}
                  helperText={formErrors.expiry_date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>

              {/* Side Effects */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Side Effects"
                  fullWidth
                  name="side_effects"
                  value={formData.side_effects}
                  onChange={handleChange}
                  error={!!formErrors.side_effects}
                  helperText={formErrors.side_effects}
                />
              </Grid>

              {/* Quantity */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Quantity"
                  fullWidth
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  error={!!formErrors.quantity}
                  helperText={formErrors.quantity}
                  required
                />
              </Grid>

              {/* Reorder Level */}
              <Grid item xs={4} sm={6}>
                <TextField
                  label="Reorder Level"
                  fullWidth
                  name="reorder_level"
                  value={formData.reorder_level}
                  onChange={handleChange}
                  error={!!formErrors.reorder_level}
                  helperText={formErrors.reorder_level}
                />
              </Grid>
            </Grid>
            <DialogActions className="justify-end">
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateInventoryForm;
