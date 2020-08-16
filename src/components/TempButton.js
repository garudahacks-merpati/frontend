import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export default function TempButton() {
  const [clicked, setClicked] = useState();

  return (
    <IconButton onClick={() => setClicked(true)}>
      {clicked ? <PlayCircleOutlineIcon /> : <CloudDownloadIcon />}
    </IconButton>
  );
}
