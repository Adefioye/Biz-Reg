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
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";

// import { Field, reduxForm } from "redux-form";

const useStyles = makeStyles((theme) => ({
  BusinessForm: {
    width: "80vw",
    position: "fixed",
    top: "13%",
    left: "10%",
  },
  textField: {
    width: "80%",
  },
  button: {
    width: "10em",
    height: "3em",
    borderRadius: 50,
  },
}));

function BusinessForm({ title, onSubmit, formValues, setFormValues }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const { name, industry, sector, headquarter, year, dateAdded, notes } =
    formValues;

  const convertToDefEventParams = (id, value) => ({ target: { id, value } });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  return (
    <Paper elevation={3} className={classes.BusinessForm}>
      <Grid container direction="column">
        {/*Title of form*/}
        <Grid item style={{ marginTop: "2em" }}>
          <Typography align="center">{title}</Typography>
        </Grid>
        {/* form content*/}
        <Grid
          item
          container
          justifyContent="center"
          direction="row"
          style={{ marginTop: "3em" }}
        >
          <Grid
            item
            container
            direction="column"
            style={{ marginLeft: "9%" }}
            md
          >
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography gutterButtom>Name</Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                id="name"
                value={name}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography gutterButtom>Industry</Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                id="industry"
                value={industry}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography gutterButtom>Sector</Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                id="sector"
                value={sector}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography gutterButtom>Headquarter</Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                id="headquarter"
                value={headquarter}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography>Founded (year)</Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                type="number"
                id="year"
                value={year}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "1em" }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography>Date Added</Typography>
                <KeyboardDatePicker
                  className={classes.textField}
                  disableToolbar
                  margin="normal"
                  id="dateAdded"
                  variant="inline"
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  value={dateAdded}
                  onChange={(date) =>
                    handleInputChange(
                      convertToDefEventParams("dateAdded", date)
                    )
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography>Notes</Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                id="notes"
                value={notes}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
          </Grid>
          {/* Action buttons */}
          <Grid
            item
            container
            justifyContent="center"
            direction="row"
            style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
          >
            <Grid item>
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
                onClick={onSubmit}
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
            <Grid item style={{ marginLeft: "5em" }}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default BusinessForm;
