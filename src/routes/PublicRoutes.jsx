import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
    const admin = useSelector((state) => state.adminData.admin);
    console.log("public admin ______", admin);
    
    return admin ? <Navigate to="/admin/home" /> : <Outlet />;
};

export default PublicRoutes;
