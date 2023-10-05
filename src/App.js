import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PropertyCard from "./components/PropertyCard";
import Property from "./components/Property";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PropertyCard />} path="/" />
        <Route element={<Property />} path="/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
