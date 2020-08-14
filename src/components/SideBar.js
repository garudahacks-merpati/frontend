import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ChatIcon from "@material-ui/icons/Chat";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    active: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, active: open });
  };

  const content = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemLink
          to="/home"
          primary="Home"
          icon={<HomeIcon />}
        ></ListItemLink>

        <ListItemLink
          to="/profile"
          primary="Profile"
          icon={<AccountCircleIcon />}
        ></ListItemLink>

        <Divider />

        <ListItemLink
          to="/resource"
          primary="Resource"
          icon={<SlideshowIcon />}
        ></ListItemLink>

        <ListItemLink
          to="/homework"
          primary="Homework"
          icon={<HomeWorkIcon />}
        ></ListItemLink>

        <ListItemLink
          to="/exam"
          primary="Exam"
          icon={<AssignmentIcon />}
        ></ListItemLink>

        <ListItemLink
          to="/chat"
          primary="Chat"
          icon={<ChatIcon />}
        ></ListItemLink>
      </List>
    </div>
  );

  return (
    <div>
      <Tooltip title="Menu" arrow>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>

      <Drawer anchor={"left"} open={state.active} onClose={toggleDrawer(false)}>
        {content}
      </Drawer>
    </div>
  );
}
