import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LessonList from "../components/LessonList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = (theme) => ({
  section: {
    "margin-top": "25px",
  },

  contentTitle: {
    "margin-bottom": "10px",
  },
});

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "...",
      activeTabIndex: 0,
      courseId: "",
    };
  }

  async componentWillMount() {
    const {
      match: { params },
    } = this.props;
    const result = await fetch(
      `https://merpati-backend.azurewebsites.net/api/course/${params.courseId}`,
      {
        method: "GET",
      }
    );
    const course = await result.json();
    console.log(course);
    this.setState({
      name: course.name,
      courseId: params.courseId,
    });
  }

  handleChange = (event, value) => {
    this.setState({ activeTabIndex: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar name={"Course: " + this.state.name}></NavBar>
        <Container maxWidth="lg">
          <Tabs
            value={this.state.activeTabIndex}
            onChange={this.handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
          >
            <Tab label="Lesson" {...a11yProps(0)} />
            <Tab label="Assignment" {...a11yProps(1)} />
            <Tab label="Exam" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={this.state.activeTabIndex} index={0}>
            <LessonList courseId={this.state.courseId}></LessonList>
          </TabPanel>
          <TabPanel value={this.state.activeTabIndex} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={this.state.activeTabIndex} index={2}>
            Item Three
          </TabPanel>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(CourseDetail);