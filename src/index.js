import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar>
        <Toolbar>Mi Espacio</Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={true}>
        Menu
      </Drawer>
      <main>
        <Container />
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
