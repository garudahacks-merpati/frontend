import React from "react";
import NavBar from "../components/NavBar";
import CourseList from "../components/CourseList";
import TaskList from "../components/TaskList";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  section: {
    "margin-top": "25px",
  },

  contentTitle: {
    "margin-bottom": "10px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <NavBar name="Home"></NavBar>

      <Container maxWidth="lg">
        <div className={classes.section}>
          <Typography variant="h6" className={classes.contentTitle}>
            Course List
          </Typography>
          <CourseList></CourseList>
        </div>

        <div className={classes.section}>
          <Typography variant="h6" className={classes.contentTitle}>
            Task List
          </Typography>
          <TaskList></TaskList>
        </div>

        <div className={classes.section}>
          <Typography variant="h6" className={classes.contentTitle}>
            Latest Topic
          </Typography>
          <CourseList></CourseList>
        </div>
      </Container>
    </div>
  );
}
