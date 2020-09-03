import React from "react";
import { shallow } from "enzyme";
import { Grid, Row, Col } from "components/Grid";

describe("<Grid />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = shallow(
        <Grid>
          <Row>
            <Col>Test</Col>
          </Row>
        </Grid>
      );
      expect(wrapper.find(".grid-container")).toBeTruthy();
    });
  });
});
