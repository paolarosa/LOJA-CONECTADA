import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DetailPage from "../pages/DetailPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/car/:id" element={<DetailPage />} />
    </Routes>
  );
};
