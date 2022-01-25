import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox } from "@material-ui/core";
import { Fragment } from "react";
import { useState } from "react";
import { FormControlLabel } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";

import { Container } from "@material-ui/core";

import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #ebf8e1, #999)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
});

function ButtonStyle() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <Fragment>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => {
              console.log(e);
              setChecked(e.target.checked);
            }}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />
    </Fragment>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theaming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">Learn how to use MUI</Typography>
            <ButtonStyle />
            <Grid container spacing={2} justify="center">
              <Grid item xs={2} sm={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={2} sm={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={2} sm={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
            <TextField
              variant="filled"
              color="secondary"
              type="time"
              label="The Time"
            />
            <CheckBoxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
