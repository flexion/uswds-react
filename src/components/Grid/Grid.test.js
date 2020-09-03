import React from "react";
import { render } from "@testing-library/react";
import { Grid, Row, Col } from "./index.js";

describe("<Grid />", () => {
  describe("default render", () => {
    it("should render", () => {
      const { getByText } = render(
        <Grid>
          <Row>
            <Col>Test</Col>
          </Row>
        </Grid>
      );
      expect(getByText("Test")).toBeTruthy();
    });
  });
});
