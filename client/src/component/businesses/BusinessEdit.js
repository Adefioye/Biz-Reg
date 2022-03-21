import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import BusinessForm from "./BusinessForm";
import { fetchBusiness, editBusiness } from "../../actions";

function BusinessEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { business } = useSelector((state) => state.business);


  const [state, setState] = useState({
    name: "",
    industry: "",
    sector: "",
    headquarter: "",
    year: "",
    notes: "",
  });

  useEffect(() => {
    dispatch(fetchBusiness(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (business[0]) {
      setState({...business[0]});
    }
  }, [business]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBusiness(id, state));
    navigate("/");
  };

  return (
    <>
      <BusinessForm
        title="Edit a business"
        formValues={state}
        onSubmit={handleSubmit}
        setFormValues={setState}
      />
    </>
  );
}

export default BusinessEdit;
