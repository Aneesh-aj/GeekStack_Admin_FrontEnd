import { useSelector } from "react-redux";
import AdminLoginSection from "../../component/login/AdminLoginSection";
import React from "react";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
    const admin = useSelector((state) => state.adminData.admin);
    
    console.log(admin,"dd")
    // If logged in, redirect to admin home
    return admin.id ? <Navigate to="/admin/business" /> : <AdminLoginSection />;
};

export default AdminLogin;
