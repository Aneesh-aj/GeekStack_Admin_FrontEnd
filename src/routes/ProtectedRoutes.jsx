import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const admin = useSelector((state) => state.adminData.admin);
    
    return admin.id ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
