import React from "react";
import NavBar from "../components/NavBar";
import CourseList from "../components/CourseList";
import TaskList from "../components/TaskList";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
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
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <NavBar name="Home"></NavBar>

      <Container maxWidth="lg">
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.section}>
            <Typography variant="h6" className={classes.contentTitle}>
              Course List
            </Typography>
            <CourseList></CourseList>
          </div>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.section}>
            <Typography variant="h6" className={classes.contentTitle}>
              Task List
            </Typography>
            <TaskList></TaskList>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
