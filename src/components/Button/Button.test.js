import React from "react";
import { render } from "@testing-library/react";
import Button from "./index.js";
import Provider from "test/TestProvider";

describe("<Button />", () => {
  describe("default render", () => {
    it("should render", () => {
      const { getByText, container } = render(
        <Provider>
          <Button>Test</Button>
        </Provider>
      );
      console.log("CONTAINER", container);
      expect(getByText("Test")).toBeTruthy();
    });
  });
});
