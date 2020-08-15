import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default class LessonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [],
      courseId: this.props.courseId,
      expanded: "panel1",
    };
  }

  async componentWillMount() {
    const result = await fetch(
      `https://merpati-backend.azurewebsites.net/api/course/${this.state.courseId}/lesson`,
      {
        method: "GET",
      }
    );
    const courseLessons = await result.json();
    console.log(this.props.courseId);
    console.log(courseLessons);
    this.setState({
      lessons: courseLessons,
    });
  }

  handleChange = (panel) => (event, newExpanded) => {
    this.setState({
      expanded: newExpanded ? panel : false,
    });
  };

  render() {
    return <div></div>;
  }
}
