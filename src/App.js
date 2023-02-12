import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PortalListingComment from "./pages/PortalListingComment";
import EditComment from "./pages/EditComment";

function App() {
  return (
    // <body className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comments" element={<PortalListingComment />} />
          <Route path="/edit-comments/:id" element={<EditComment />} />
        </Routes>
      </BrowserRouter>
    // </body>
  );
}

export default App;
