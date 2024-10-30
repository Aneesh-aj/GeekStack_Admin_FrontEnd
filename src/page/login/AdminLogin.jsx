import { useSelector } from "react-redux";
import AdminLoginSection from "../../component/login/AdminLoginSection";
import React from "react";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
    const admin = useSelector((state) => state.adminData.admin);
    
    // If logged in, redirect to admin home
    return admin ? <Navigate to="/admin/business" /> : <AdminLoginSection />;
};

export default AdminLogin;
