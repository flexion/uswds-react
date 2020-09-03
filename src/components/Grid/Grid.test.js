import React from "react";
import { render } from "@testing-library/react";
import { Grid, Row, Col } from "components/Grid";

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
