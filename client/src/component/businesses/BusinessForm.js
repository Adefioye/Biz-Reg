import React from "react";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  BusinessForm: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.card.background,
  },
  textField: {
    width: "80%",
  },
  submitButton: {
    width: "10em",
    height: "3em",
    borderRadius: 50,
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  button: {
    width: "10em",
    height: "3em",
    borderRadius: 50,
  },
}));

function BusinessForm({ title, onSubmit, formValues, setFormValues, error }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const { name, industry, sector, headquarter, year, dateAdded, notes } =
    formValues;

  const convertToDefEventParams = (id, value) => ({ target: { id, value } });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  return (
    <Paper elevation={3} className={classes.BusinessForm}>
      <Grid container alignItems="center" direction="column">
        {/*Title of form*/}
        <Grid item style={{ marginTop: "2em" }}>
          <Typography variant="h4" align="center">
            {title}
          </Typography>
          <Typography variant="h6" align="center">
            {error}
          </Typography>
        </Grid>
        {/* form content*/}
        <Grid item style={{ marginTop: "3em" }}>
          {/* First half of the form */}

          <Grid
            item
            style={{
              marginBottom: "1em",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Name</Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              id="name"
              value={name}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </Grid>
          <Grid item style={{ marginBottom: "1em", textAlign: "center" }}>
            <Typography variant="h6">Industry</Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              id="industry"
              value={industry}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item style={{ marginBottom: "1em", textAlign: "center" }}>
            <Typography variant="h6">Sector</Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              id="sector"
              value={sector}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item style={{ marginBottom: "1em", textAlign: "center" }}>
            <Typography variant="h6">Headquarter</Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              id="headquarter"
              value={headquarter}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>

          {/* Second half of the form */}

          <Grid item style={{ marginBottom: "1em", textAlign: "center" }}>
            <Typography variant="h6">Founded (year)</Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              type="number"
              id="year"
              value={year}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item style={{ marginBottom: "1em", textAlign: "center" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Typography variant="h6">Date Added</Typography>
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
                  handleInputChange(convertToDefEventParams("dateAdded", date))
                }
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item style={{ marginBottom: "1em", textAlign: "center" }}>
            <Typography variant="h6">Notes</Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              id="notes"
              value={notes}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>

          {/* Action buttons */}
          <Grid
            item
            container
            alignItems={matchesXS ? "center" : null}
            justifyContent="center"
            direction={matchesXS ? "column" : "row"}
            style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
          >
            <Grid item style={{ marginBottom: matchesXS ? "2em" : "inherit" }}>
              <Button
                // disabled={
                //   name.length === 0 ||
                //   industry.length === 0 ||
                //   sector.length === 0 ||
                //   headquarter.length === 0 ||
                //   year.length === 0 ||
                //   notes.length === 0
                // }
                variant="contained"
                type="submit"
                onClick={onSubmit}
                className={classes.submitButton}
              >
                Submit
              </Button>
            </Grid>
            <Grid item style={{ marginLeft: matchesXS ? 0 : "5em" }}>
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
