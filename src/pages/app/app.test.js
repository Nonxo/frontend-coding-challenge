import React from "react";

import AppComponent from "./app.component";
import { unmountComponentAtNode } from "react-dom";
import { act, getByTestId, render, within } from "@testing-library/react";

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

it("renders className in App component", () => {
  act(() => {
    render(<AppComponent />, container);
  });
  expect(container.firstChild.classList.contains("app-container")).toBe(true);
});

test("Contains all Child components", () => {
  const { getAllByTestId, getByTestId } = render(<AppComponent />);
  const childComponent = getByTestId("child-component");
  const componentsInAppComponent = within(childComponent).getAllByTestId(
    "child-component"
  );
  expect(componentsInAppComponent.length).toBe(6);
});

test("Total count is zero on app component load", () => {
  const { getByTestId } = render(<AppComponent />);

  const count = getByTestId("count");

  expect(count.textContent).toEqual(0);
});
