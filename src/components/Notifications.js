import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

export default function Notifications() {
  return (
    <div>
      <Tooltip title="Notifications" arrow>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
}
