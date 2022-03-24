import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import { fetchBusinesses } from "../../actions";

const useStyles = makeStyles((theme) => ({
  businessList: {
    paddingTop: theme.spacing(10),
    // width: "90wh",
  },
  addIcon: {
    position: "fixed",
    bottom: "2em",
    right: "2em",
  },
  filterBar: {
    marginLeft: "3em",
    marginRight: "1em",
    marginTop: "2.5em",
  },
  clearButton: {
    alignSelf: "flex-end",
    marginRight: "2.2em",
    marginTop: "2em",
    marginBottom: "2em",
  },
  mainContent: {
    padding: "1em",
    marginTop: "1em",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  businessContent: {
    marginLeft: "2em",
    maxWidth: "40em",
  },
  businessId: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  formControl: {
    width: "90%",
    height: 57,
  },
}));

function BusinessList({ setOpenDialog }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector((state) => state.auth);
  const currentUserId = useSelector((state) => state.auth.userId);
  const { businesses } = useSelector((state) => state.business);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, [dispatch]);

  const businessHeadings = [
    "name",
    "industry",
    "sector",
    "headquarter",
    "year",
    "dateAdded",
    "notes",
  ];

  const options = { year: "numeric", month: "long", day: "numeric" };

  const renderContent = () => {
    if (businesses.length !== 0) {
      return (
        <>
          {businesses.map((business) => (
            <Paper
              elevation={3}
              key={business.id}
              className={classes.mainContent}
            >
              <Grid item container alignItems="center" direction="row">
                <Grid item>
                  <Avatar className={classes.avatar}>{business.name[0]}</Avatar>
                </Grid>
                <Grid item className={classes.businessContent}>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h6">{business.name}</Typography>
                      <Typography variant="body1">
                        Founded: {business.year}
                      </Typography>
                      <Typography variant="body1">
                        Date Added:{" "}
                        {new Date(business.dateAdded).toLocaleDateString(
                          undefined,
                          options
                        )}
                      </Typography>
                      <Typography variant="body1">
                        Headquarter: {business.headquarter}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        Description: This business is in the {business.industry}
                        industry and {business.sector} sector. {business.notes}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{ marginLeft: "auto" }}>
                  <Avatar className={classes.businessId}>{business.id}</Avatar>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </>
      );
    } else {
      return <CircularProgress />;
    }
  };

  return (
    <Grid container className={classes.businessList} direction="column">
      <Grid item container direction="row">
        <Grid
          item
          container
          direction="column"
          md={3}
          className={classes.filterBar}
        >
          <Paper elevation={3}>
            <Grid item container direction="column">
              <Grid item style={{ marginLeft: "2em" }}>
                <Typography variant="h6">Filter Results:</Typography>
              </Grid>
              <Grid item style={{ marginLeft: "2em" }}>
                <Typography>Filter by name</Typography>
                <TextField variant="outlined" className={classes.formControl} />
              </Grid>
              <Grid item style={{ marginLeft: "2em" }}>
                <Typography>Order by fields</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel></InputLabel>
                  <Select>
                    <option value="">Please select a value</option>
                    {businessHeadings.map((heading) => (
                      <option key={heading} value={heading}>
                        {heading}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item className={classes.clearButton}>
                <Button variant="outlined">Clear</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid
          item
          container
          direction="column"
          style={{ marginRight: "2em" }}
          md={8}
        >
          <Grid item>
            <Typography align="center">
              List of Businesses in Nigeria
            </Typography>
          </Grid>
          <Grid item container direction="column">
            {renderContent()}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {isSignedIn && (
          <Tooltip title="Create a business" aria-label="add a new business">
            <Fab
              color="primary"
              className={classes.addIcon}
              // component={Link}
              // to="/business/new"
              onClick={() => navigate("/business/new")}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        )}
      </Grid>
    </Grid>
  );
}

export default BusinessList;

{
  /* <TableContainer component={Paper}>
  <Table aria-label="businesses table">
    <TableHead>
      <TableRow>
        {businessHeading.map((title) => (
          <TableCell key={title}>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {businesses.map((business) => (
        <TableRow key={business.name}>
          <TableCell>{business.name}</TableCell>
          <TableCell>{business.industry}</TableCell>
          <TableCell>{business.sector}</TableCell>
          <TableCell>{business.headquarter}</TableCell>
          <TableCell>{business.year}</TableCell>
          <TableCell>{business.notes}</TableCell>
          <TableCell>
            {currentUserId === business.userId ? (
              <ButtonGroup>
                <Button
                  onClick={() => navigate(`/business/edit/${business.id}`)}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    navigate(`/business/delete/${business.id}`);
                    setOpenDialog(true);
                  }}
                >
                  Delete
                </Button>
              </ButtonGroup>
            ) : (
              <Button>No action</Button>
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>; */
}
