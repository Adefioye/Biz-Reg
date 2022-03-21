import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";

import { fetchBusinesses } from "../../actions";

const useStyles = makeStyles((theme) => ({
  businessList: {
    paddingTop: theme.spacing(10),
    // width: "90wh",
  },
  addIcon: {
    position: "absolute",
    bottom: "2em",
    right: "2em",
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

  const businessHeading = [
    "Name",
    "Industry",
    "Sector",
    "Headquarters",
    "Founded",
    "Notes",
    "Actions",
  ];

  const renderTable = () => {
    if (businesses.length !== 0) {
      return (
        <>
          <TableContainer component={Paper}>
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
                            onClick={() =>
                              navigate(`/business/edit/${business.id}`)
                            }
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
          </TableContainer>
          ;
        </>
      );
    } else {
      return <CircularProgress />;
    }
  };

  return (
    <Grid container className={classes.businessList} direction="column">
      <Grid item>
        <Typography align="center" variant="h2">
          {" "}
          List of Businesses in Nigeria
        </Typography>
      </Grid>
      <Grid
        item
        container
        position="relative"
        style={{ height: "50vh" }}
        justifyContent="center"
        alignItems="center"
      >
        {renderTable()}
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
