import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";

import { fetchBusiness, deleteBusiness } from "../../actions";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  businessDelete: {
    paddingTop: theme.spacing(10),
    width: "100wh",
  },
  deleteIconContainer: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  deleteIcon: {
    fontSize: "8rem",
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

  return (
    <Dialog
      onClose={() => setOpenDialog(false)}
      open={openDialog}
      onClick={() => navigate("/")}

    >
      <DialogTitle style={{ textAlign: "center" }}>
        <IconButton className={classes.deleteIconContainer}>
          <NotListedLocationIcon className={classes.deleteIcon} />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ textAlign: "center" }}>
        {business[0] ? (
          <Typography variant="h5">
            Are you sure you want to delete
            <span style={{ fontWeight: 700, color: "#5692e8" }}>
              {" "}
              {business[0].name}?
            </span>{" "}
            business{" "}
          </Typography>
        ) : (
          <Typography variant="body1">
            Are you sure you want to delete business?{" "}
          </Typography>
        )}

        <Typography>You can't undo the delete operation</Typography>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center", marginBottom: "2em" }}>
        <Button variant="contained" onClick={() => navigate("/")}>
          Cancel
        </Button>
        <Button
          className={classes.deleteButton}
          variant="contained"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BusinessDelete;
