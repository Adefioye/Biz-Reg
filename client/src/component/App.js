import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import BusinessList from "./businesses/BusinessList";
import BusinessCreate from "./businesses/BusinessCreate";
import BusinessShow from "./businesses/BusinessShow";
import BusinessEdit from "./businesses/BusinessEdit";
import BusinessDelete from "./businesses/BusinessDelete";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BusinessList />} />
          <Route path="/business/new" element={<BusinessCreate />} />
          <Route path="/business/:id" element={<BusinessShow />} />
          <Route path="/business/edit" element={<BusinessEdit />} />
          <Route path="/business/delete" element={<BusinessDelete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
