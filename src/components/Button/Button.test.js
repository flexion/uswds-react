import React from "react";
import { render } from "@testing-library/react";
import Button from "components/Button";
import Provider from "test/TestProvider";

describe("<Button />", () => {
  describe("default render", () => {
    it("should render", () => {
      const { getByText } = render(
        <Provider>
          <Button>Test</Button>
        </Provider>
      );
      expect(getByText("Test")).toBeTruthy();
    });
  });
});
