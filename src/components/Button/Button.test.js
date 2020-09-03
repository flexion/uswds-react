import React from "react";
import { shallow } from "enzyme";
import Button from "components/Button";
import Provider from "test/TestProvider";

describe("<Button />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = shallow(
        <Provider>
          <Button>Test</Button>
        </Provider>
      );
      expect(wrapper.find(".usa-button")).toBeTruthy();
    });
  });
});
