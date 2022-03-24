import React from "react";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// import { Field, reduxForm } from "redux-form";

const useStyles = makeStyles((theme) => ({
  BusinessForm: {
    paddingTop: theme.spacing(10),
    // width: "100wh",
  },
}));

function BusinessForm({ title, onSubmit, formValues, setFormValues }) {
  const classes = useStyles();

  const { name, industry, sector, headquarter, year, dateAdded, notes } =
    formValues;

  const convertToDefEventParams = (id, value) => ({ target: { id, value } });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.BusinessForm}
    >
      <Grid item>{title}</Grid>
      <Grid item>
        <form onSubmit={onSubmit}>
          <TextField
            label="Name"
            id="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <TextField
            label="Industry"
            id="industry"
            value={industry}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <TextField
            label="Sector"
            id="sector"
            value={sector}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <TextField
            label="Headquarter"
            id="headquarter"
            value={headquarter}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <TextField
            label="Year"
            type="number"
            id="year"
            value={year}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              margin="normal"
              id="dateAdded"
              variant="inline"
              label="Date Added"
              format="MM/dd/yyyy"
              value={dateAdded}
              onChange={(date) =>
                handleInputChange(convertToDefEventParams("dateAdded", date))
              }
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <br />
          <TextField
            label="Notes"
            id="notes"
            value={notes}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <Button
            disabled={
              name.length === 0 ||
              industry.length === 0 ||
              sector.length === 0 ||
              headquarter.length === 0 ||
              year.length === 0 ||
              notes.length === 0
            }
            variant="contained"
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default BusinessForm;
