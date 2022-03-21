import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { fetchBusiness, deleteBusiness } from "../../actions";

const useStyles = makeStyles((theme) => ({
  businessDelete: {
    paddingTop: theme.spacing(10),
    width: "100wh",
  },
}));

function BusinessDelete({ openDialog, setOpenDialog }) {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { business } = useSelector((state) => state.business);

  useEffect(() => {
    dispatch(fetchBusiness(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteBusiness(id));
    navigate("/");
  };

  // const renderBusinessName = () => {
  //   return parse(`<span>${business[0].name}</span>`);
  // };

  return (
    <Dialog
      onClose={() => setOpenDialog(false)}
      open={openDialog}
      onClick={() => navigate("/")}
    >
      <DialogTitle>
        {business[0] ? (
          <div>
            Are you sure you want to delete{" "}
            <span style={{ fontWeight: 700, color: "#0000ff" }}>
              {business[0].name}
            </span>{" "}
            business{" "}
          </div>
        ) : (
          <div>Are you sure you want to delete business </div>
        )}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={() => navigate("/")}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default BusinessDelete;
