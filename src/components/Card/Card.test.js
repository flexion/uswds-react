import React from "react";
import { render } from "@testing-library/react";
import Card from "components/Card";

describe("<Card />", () => {
  describe("default render", () => {
    it("should render", () => {
      const { getByText } = render(<Card title="Test" />);
      expect(getByText("Test")).toBeTruthy();
    });
  });
});
