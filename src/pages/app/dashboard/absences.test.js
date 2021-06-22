import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act, render } from "@testing-library/react";
import Absences from "./absences";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("change filter value when clicked", async () => {
  const onChange = jest.fn();
  act(() => {
    render(<Absences />);
  });
});
