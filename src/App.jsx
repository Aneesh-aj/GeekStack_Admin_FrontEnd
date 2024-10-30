import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './page/login/AdminLogin';
import React from 'react';
import ProtectedRoutes from './routes/ProtectedRoutes';
import DashBoard from './page/login/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/" element={<AdminLogin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/business" element={<DashBoard selectedOptionProp="Business" />} />
          <Route path="/admin/categories" element={<DashBoard selectedOptionProp="Categories" />} />
          <Route path="/admin/ads-manager" element={<DashBoard selectedOptionProp="Ads Manager" />} />
          <Route path="/admin/badge-manager" element={<DashBoard selectedOptionProp="Badge Manager" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
