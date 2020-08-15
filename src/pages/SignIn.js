import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Cotter from "cotter";
import { Redirect } from "react-router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [payload, setpayload] = useState(null);

  useEffect(() => {
    var cotter = new Cotter("6b7d016a-1510-4454-b74c-83d3a5b47f5c"); // 👈 Specify your API KEY ID here
    cotter
      .signInWithLink() // use .signInWithOTP() to send an OTP
      .showEmailForm() // use .showPhoneForm() to send magic link to a phone number
      .then(async (response) => {
        setpayload(response); // show the response in our state
        props.history.push("/home");
        const result = await fetch(
          `https://merpati-backend.azurewebsites.net/api/user/login`,
          {
            method: "POST",
            body: {
              email: response.email,
            },
          }
        );

        const auth = await result.json();
        console.log(auth);
        window.userId = response.email;
        if (auth) props.history.push("/home");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div id="cotter-form-container" />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
