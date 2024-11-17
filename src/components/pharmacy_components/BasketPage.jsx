import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const BasketPage = (props) => {
  const { open, handleClose } = props;
  const basket = useSelector((store) => store.category.basket);

  const totalAmount = Object.values(basket).reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div className="bg-[#ffffff] min-h-screen p-3">
      <h2>BASKET</h2>

      {basket.length === 0 && (
        <div className="font-bold text-[18px] flex justify-center mt-5">
          ...No Medicines added!
        </div>
      )}
      {/* <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <h2>Basket</h2>
        </DialogTitle>
        <DialogContent>
          {Object.keys(basket).length === 0 ? (
            <p>Your basket is empty.</p>
          ) : (
            <div>
              {Object.keys(basket).map((medicineId) => (
                <div key={medicineId}>
                  <p>Medicine ID: {medicineId}</p>
                  <p>Count: {basket[medicineId].count}</p>
                  <p>Total Price: {basket[medicineId].totalPrice}</p>
                </div>
              ))}
              <div>
                <h3>Total Amount: {totalAmount}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default BasketPage;
