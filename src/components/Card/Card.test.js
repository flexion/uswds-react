import React from "react";
import { shallow } from "enzyme";
import Card from "components/Card";

describe("<Card />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = shallow(<Card title="Test" />);
      expect(wrapper.find(".usa-card")).toBeTruthy();
    });
  });
});
