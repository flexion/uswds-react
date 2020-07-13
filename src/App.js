import React from "react";
import logo from "./logo.svg";
import { Grid, Row, Col } from "components/Grid";
import { Counter } from "./features/counter/Counter";
import "styles/index.scss";

function App() {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col size={12} className="text-center padding-y-6">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </Col>
        </Row>
      </Grid>
      <Counter />
    </div>
  );
}

export default App;
