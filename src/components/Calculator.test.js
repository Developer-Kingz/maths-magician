import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Calculator from "./Calculator";

describe("Calculator", () => {
    it("renders correctly", () => {
        const { asFragment } = render(
            <Router>
                <Calculator />
            </Router>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    // Add more test cases here as needed.
});
