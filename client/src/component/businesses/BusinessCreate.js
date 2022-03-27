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
    dateAdded: new Date(2022, 2, 1),
    notes: "",
  });
  const [error, setError] = useState("");

  const { name, industry, sector, headquarter, year, dateAdded, notes } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      industry.length === 0 ||
      sector.length === 0 ||
      headquarter.length === 0 ||
      year.length === 0 ||
      notes.length === 0
    ) {
      setError("*** Please provide all values ***");
    } else {
      dispatch(createBusiness(state));
      navigate("/");
    }
  };

  return (
    <>
      <BusinessForm
        title="Create a Business"
        onSubmit={handleSubmit}
        formValues={state}
        setFormValues={setState}
        error={error}
      />
    </>
  );
}

export default BusinessCreate;
