import React from "react";

import AppComponent from "./app.component";
import { unmountComponentAtNode } from "react-dom";
import { act, render } from "@testing-library/react";

let container = null;
beforeEach(() => {
  // setup DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with child components", () => {
  act(() => {
    render(<AppComponent />, container);
  });
  expect(container.firstChild.classList.contains("app-container")).toBe(true);
});
