import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const admin = useSelector((state) => state.adminData.admin);
    
    return admin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
