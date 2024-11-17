import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

const textStyle = "font-bold text-[17px]";
const textValueStyle = "text-[17px]";
const DisplaySkeleton = ({ isLoading, children }) => {
  return isLoading ? (
    <>
      <Skeleton height={15} width={100} />
      <Skeleton height={15} width={100} />
      <Skeleton height={15} width={100} />
    </>
  ) : (
    children
  );
};

const MedicineInfo = React.memo(({ medicineInfo, isLoading }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <div className="flex">
          <span className={textStyle}>Category Name :</span>
          <span className={textValueStyle}>
            {" "}
            {medicineInfo.firstName ?? "-"}
          </span>
        </div>
       
        <div className="flex">
          <span className={textStyle}>product id :</span>
          <span className={textValueStyle}> {medicineInfo.gender ?? "-"}</span>
        </div>
        <div className="flex">
          <span className={textStyle}>Medicine Name :</span>
          <span className={textValueStyle}> {medicineInfo.dob ?? "-"}</span>
        </div>
        <div className="flex">
          <span className={textStyle}>dosage :</span>
          <span className={textValueStyle}> {medicineInfo.age ?? "-"}</span>
        </div>
        <div className="flex">
          <span className={textStyle}>price / Tablet :</span>
          <span className={textValueStyle}> {medicineInfo.role ?? "-"}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex">
          <span className={textStyle}>expiry date :</span>
          <span className={textValueStyle}>
            {" "}
            {medicineInfo.userName ?? "-"}
          </span>
        </div>
        <div className="flex">
          <span className={textStyle}>License No :</span>
          <span className={textValueStyle}>
            {" "}
            {medicineInfo.licenseNo ?? "-"}
          </span>
        </div>
        <div className="flex">
          <span className={textStyle}>Quantity :</span>
          <span className={textValueStyle}> {medicineInfo.opCount ?? "-"}</span>
        </div>
        <div className="flex">
          <span className={textStyle}>Experience :</span>
          <span className={textValueStyle}>
            {" "}
            {medicineInfo.experience ?? "-"}
          </span>
        </div>
        <div className="flex">
          <span className={textStyle}>Department :</span>
          <span className={textValueStyle}>
            {" "}
            {medicineInfo.department ?? "-"}
          </span>
        </div>
        <div className="flex">
          <span className={textStyle}>Specialization :</span>
          <span className={textValueStyle}>
            {" "}
            {medicineInfo.specialization ?? "-"}
          </span>
        </div>
      </div>
    </div>
  );
});

const MedicineDetails = ({ userId }) => {
  const [open, setOpen] = useState(false);
  const [medicineInfo, setMedicineInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="border bg-[#ffffff] shadow-lg p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <IoIosArrowRoundBack
          size={32}
          style={{ cursor: "pointer" }}
          onClick={handleBack}
        />
        <MdOutlineModeEditOutline
          size={20}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
      <div className="mt-6">
        <MedicineInfo medicineInfo={medicineInfo} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default MedicineDetails;
