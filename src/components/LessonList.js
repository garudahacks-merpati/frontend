import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TempButton from "./TempButton";

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
      expanded: "",
      iconState: {},
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
    return (
      <div>
        {this.state.lessons.length === 0 ? (
          <p>No Data</p>
        ) : (
          this.state.lessons.map((lesson, index) => (
            <Accordion
              square
              expanded={this.state.expanded === `panel${index}`}
              onChange={this.handleChange(`panel${index}`)}
            >
              <AccordionSummary
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
                expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
              >
                <div>
                  <TempButton></TempButton>
                  <Typography>{lesson.title}</Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{lesson.text}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </div>
    );
  }
}
