import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createBusiness } from "../../actions";
import BusinessForm from "./BusinessForm";

function BusinessCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    industry: "",
    sector: "",
    headquarter: "",
    year: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBusiness(state));
    navigate("/");
  };

  return (
    <>
      <BusinessForm
        title="Create a Business"
        onSubmit={handleSubmit}
        formValues={state}
        setFormValues={setState}
      />
    </>
  );
}

export default BusinessCreate;
