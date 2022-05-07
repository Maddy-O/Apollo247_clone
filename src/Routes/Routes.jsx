import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Pharmacy from "../components/Pharmacy/Pharmacy";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/pharmacy" element={<Pharmacy />} />
      </Routes>
    </>
  );
};
