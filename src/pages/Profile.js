import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = (theme) => ({
  section: {
    margin: "20px",
  },

  contentTitle: {
    "margin-bottom": "10px",
  },

  paper: {
    padding: "5px 0",
    margin: "25px 0",
  },
});

class Profile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar name="Profile"></NavBar>
        <Container maxWidth="lg">
          <Paper elevation={3} className={classes.paper}>
            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            <Typography variant="body1">Welcome, User</Typography>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(Profile);
