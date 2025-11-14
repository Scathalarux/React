import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<div>Test orders page</div>} />
      <Route path="/tracking" element={<div>Test tracking page</div>} />
    </Routes>
  );
}

export default App;
