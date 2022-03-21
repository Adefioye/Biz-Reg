import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import BusinessList from "./businesses/BusinessList";
import BusinessCreate from "./businesses/BusinessCreate";
import BusinessShow from "./businesses/BusinessShow";
import BusinessEdit from "./businesses/BusinessEdit";
import BusinessDelete from "./businesses/BusinessDelete";

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<BusinessList setOpenDialog={setOpenDialog} />}
          />
          <Route path="/business/new" element={<BusinessCreate />} />
          <Route path="/business/:id" element={<BusinessShow />} />
          <Route path="/business/edit/:id" element={<BusinessEdit />} />
          <Route
            path="/business/delete/:id"
            element={
              <BusinessDelete
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
