import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PortfolioPage from "./portfolio/PortfolioPage";
import ClientPage from "./mern-crud/ClientPage";
import AddUser from "./mern-crud/components/AddUser";
import EditUser from "./mern-crud/components/EditUser";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="crud-mern" element={<ClientPage />} />
            <Route path="crud-mern/add" element={<AddUser />} />
            <Route path="crud-mern/edit" element={<EditUser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
