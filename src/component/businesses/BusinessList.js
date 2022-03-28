import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { fetchBusinesses, searchByName, sortByField } from "../../actions";

const useStyles = makeStyles((theme) => ({
  businessList: {
    paddingTop: theme.spacing(10),
  },
  addIcon: {
    position: "fixed",
    bottom: "2em",
    right: "2em",
    backgroundColor: theme.palette.common.purple,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  filterBar: {
    marginLeft: "3em",
    marginRight: "1em",
    marginTop: "3.7em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  filterCard: {
    backgroundColor: theme.card.background,
    border: `5px ${theme.card.background} solid`,
  },
  clearButtonContainer: {
    marginRight: "2.2em",
    marginTop: "2em",
    marginBottom: "2em",
    alignSelf: "flex-end",
    [theme.breakpoints.down("md")]: {
      alignSelf: "center",
      marginRight: 0,
    },
  },
  clearButton: {
    ...theme.typography.button,
    color: "#ffffff",
    backgroundColor: theme.palette.common.purple,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  mainContent: {
    padding: "1em",
    marginTop: "1em",
    backgroundColor: theme.card.background,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    backgroundColor: theme.palette.common.purple,
    fontSize: "5em",
  },
  businessContent: {
    marginLeft: "2em",
    maxWidth: "50em",
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
    },
  },
  businessId: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: theme.palette.common.purple,
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
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));


  const [searchName, setSearchName] = useState("");
  // const [sortField, setSortField] = useState("name");

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

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
    dispatch(searchByName(searchName));
  };

  // const handleSortByField = (e) => {
  //   setSortField(e.target.value);
  //   console.log(sortField);
  //   dispatch(sortByField(sortField));
  // };

  const handleClearButton = () => {
    dispatch(fetchBusinesses());
  };

  // const handleDeletePage = (business) => {
  //   navigate(`business/delete/${business.id}`);
  //   setOpenDialog(true);
  // };

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
              <Grid
                item
                container
                alignItems="center"
                direction={matchesMD ? "column" : "row"}
              >
                <Grid item>
                  <Avatar className={classes.avatar}>{business.name[0]}</Avatar>
                </Grid>
                <Grid item className={classes.businessContent}>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        align={matchesMD ? "center" : "inherit"}
                        variant="h4"
                      >
                        {business.name}
                      </Typography>
                      <Typography
                        align={matchesMD ? "center" : "inherit"}
                        variant="body1"
                      >
                        Founded: {business.year}
                      </Typography>
                      <Typography
                        align={matchesMD ? "center" : "inherit"}
                        variant="body1"
                      >
                        Date Added:{" "}
                        {new Date(business.dateAdded).toLocaleDateString(
                          undefined,
                          options
                        )}
                      </Typography>
                      <Typography
                        align={matchesMD ? "center" : "inherit"}
                        variant="body1"
                      >
                        Headquarter: {business.headquarter}
                      </Typography>
                    </Grid>
                    <Grid item style={{ marginTop: "2em" }}>
                      <Typography
                        align={matchesMD ? "center" : "inherit"}
                        variant="h5"
                      >
                        Description: This business is in the {business.industry}{" "}
                        industry and {business.sector} sector. {business.notes}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container={matchesMD ? true : false}
                  justifyContent={matchesMD ? "center" : null}
                  alignItems={matchesMD ? "center" : null}
                  style={{ marginLeft: "auto" }}
                >
                  <Avatar className={classes.businessId}>{business.id}</Avatar>
                  {currentUserId === business.userId ? (
                    <>
                      <Avatar
                        className={classes.businessId}
                        style={{
                          marginTop: "1em",
                          marginBottom: "1em",
                          cursor: "pointer",
                          marginRight: matchesMD ? "1em" : "inherit",
                          marginLeft: matchesMD ? "1em" : "inherit",
                        }}
                        onClick={() =>
                          navigate(`/business/edit/${business.id}`)
                        }
                      >
                        <EditIcon />
                      </Avatar>
                      <Avatar
                        className={classes.businessId}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(`business/delete/${business.id}`);
                          setOpenDialog(true);
                        }}
                      >
                        <DeleteIcon />
                      </Avatar>
                    </>
                  ) : null}
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
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
      >
        <Grid
          item
          container
          direction="column"
          sm={10}
          md={matchesMD ? 8 : 3}
          className={classes.filterBar}
          style={{ marginBottom: "3em" }}
        >
          <Paper elevation={6} className={classes.filterCard}>
            <Grid item container direction="column">
              <Grid
                item
                style={{ marginLeft: matchesMD ? 0 : "2em", marginTop: "2em" }}
              >
                <Typography
                  variant="h4"
                  align={matchesMD ? "center" : "inherit"}
                >
                  Filter Results:
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesMD ? 0 : "2em",
                  marginTop: "1.5em",
                  marginBottom: "1.5em",
                }}
              >
                <Typography
                  variant="h6"
                  align={matchesMD ? "center" : "inherit"}
                >
                  Full Search
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.formControl}
                  value={searchName}
                  onChange={(e) => handleSearchName(e)}
                />
              </Grid>
              <Grid item style={{ marginLeft: matchesMD ? 0 : "2em" }}>
                <Typography
                  variant="h6"
                  align={matchesMD ? "center" : "inherit"}
                >
                  Order By
                </Typography>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    native
                    onChange={(e) => dispatch(sortByField(e.target.value))}
                  >
                    <option
                      style={{ backgroundColor: "#182c47", color: "#ffffff" }}
                      value=""
                    >
                      {" "}
                      None
                    </option>
                    {businessHeadings.map((heading) => (
                      <option
                        style={{ backgroundColor: "#182c47", color: "#ffffff" }}
                        key={heading}
                        value={heading}
                      >
                        {heading}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item className={classes.clearButtonContainer}>
                <Button
                  className={classes.clearButton}
                  variant="outlined"
                  onClick={handleClearButton}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid
          item
          container
          direction="column"
          style={{ marginRight: "2em" }}
          md={matchesMD ? 10 : 8}
        >
          <Grid item>
            <Typography variant="h2" align="center">
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
