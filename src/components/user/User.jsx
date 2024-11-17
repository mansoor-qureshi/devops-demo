import React from 'react';
import { useState, useEffect } from "react"
import Profile from "./Profile"
import { useLocation } from 'react-router-dom';
import DoctorAppointemts from "../doctor_components/DoctorAppointments";
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [userId, setUserId] = useState('')
    const navigate = useNavigate()

    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const param1 = searchParams.get('id');
        if (!param1) {
            navigate(`/page-not-found`)  // routes to /*
        }
        setUserId(param1)
    }, [location]);

    return (
        <div className="flex flex-col justify-between">
            <Profile userId={userId} role="doctor" />
            {/* {role === 'doctor' && <div className="border border-gray-300 shadow-lg p-3 rounded-lg mt-4 mb-4">
                <div className="border-b border-gray-300 p-4">
                    <span className="font-bold">Appointments</span>
                </div>
                <DoctorAppointemts userId={userId} />
            </div>} */}
        </div>
    )
}

export default User