import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button,
    Grid, MenuItem, Typography
} from '@mui/material';
import { IoClose } from "react-icons/io5";
import { basePath } from '../../constants/ApiPaths'
import { toast } from 'react-toastify'
import Spinner from '../../custom/Spinner'



const BuyForm = ({ open, handleClose, appointmentId, refreshList }) => {

    const [formData, setFormData] = useState({
        amount: '',
        days: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        return () => {
            clearForm()
        }
    }, [])

    const clearForm = () => {
        setFormData({
            amount: '',
            days: ''
        })
    }


    const handleChange = (event) => {
        let { name, value } = event.target;
        let containsNonDigits = /\D/.test(value);

        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: "" })
        }

        if (name == 'amount' && !containsNonDigits && value.length <= 4) {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        if (name == 'days' && !containsNonDigits && value.length <= 2) {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const validatePurchaseForm = () => {
        const errors = {};

        let requiredFields = Object.entries(formData).map(([key, value]) => key)

        requiredFields.forEach((field) => {
            if (formData[field] == '') {
                errors[field] = 'This field is required'
            }
        })

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let errors = validatePurchaseForm()
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        console.log(formData)

        try {
            setIsLoading(true)
            const response = await axios.post(`${basePath}/patient/update-prescription-bought/`, {
                appointment_id: appointmentId,
                days: formData.days,
                cost: formData.amount
            })
            toast.success('Prescription bought successfully')
            handleClose()
            refreshList()
        } catch (error) {
            console.error(`error in buying prescription`, error)
            if (error.response.status === 400) {
                toast.error(error.response.data?.[0])
            } else {
                toast.error('something went wrong')
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            {isLoading && <Spinner />}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className='flex justify-between'>
                    <span>Prescription Purchase</span>
                    <IoClose
                        size={24}
                        onClick={handleClose}
                        className='cursor-pointer'
                    />
                </DialogTitle>
                <DialogContent className='mt-3'>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Amount"
                                    fullWidth
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    error={!!formErrors.amount}
                                    helperText={formErrors.amount}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Days"
                                    fullWidth
                                    name="days"
                                    value={formData.days}
                                    onChange={handleChange}
                                    error={!!formErrors.days}
                                    helperText={formErrors.days}
                                    required
                                />
                            </Grid>

                        </Grid>
                        <DialogActions className='flex justify-end mt-3'>
                            <Button onClick={handleClose} color="secondary">Cancel</Button>
                            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>purchase</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div >
    );
};

export default BuyForm;
