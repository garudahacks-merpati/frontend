import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});

function GridListTileLink(props) {
  const classes = useStyles();
  const { tile, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <GridListTile component={renderLink}>
      <img src={tile.image} alt={tile.name} />
      <GridListTileBar
        title={tile.name}
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
      />
    </GridListTile>
  );
}

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CoursesData: [],
    };
  }

  async componentWillMount() {
    const result = await fetch(
      `https://merpati-backend.azurewebsites.net/api/course`,
      {
        method: "GET",
      }
    );
    const courses = await result.json();
    this.setState({
      CoursesData: courses,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {this.state.CoursesData.map((tile) => (
            <GridListTileLink
              tile={tile}
              to={`/course/` + tile.id}
              key={tile.id}
            ></GridListTileLink>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(useStyles)(CourseList);
