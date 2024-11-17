import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MedicineDetails from "./MedicineDetails";

const Details = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const param = searchParams.get("id");
    if (!param) {
      navigate(`/page-not-found`);
    }
    setUserId(param);
  }, [location]);
  return (
    <div className="flex flex-col justify-between">
      <MedicineDetails userId={userId} />
    </div>
  );
};

export default Details;
