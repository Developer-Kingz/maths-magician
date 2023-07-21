import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom/extend-expect";

describe("Button", () => {
    it("renders button text correctly", () => {
        const buttonText = "Click Me";
        const { getByText } = render(<Button text={buttonText} />);
        const buttonElement = getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
    });

    it("triggers onClick function when clicked", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button text="Click Me" onClick={onClickMock} />
        );
        const buttonElement = getByText("Click Me");
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });

    it("applies className correctly", () => {
        const { container } = render(
            <Button text="Click Me" className="custom-button" />
        );
        const buttonElement = container.querySelector("button");
        expect(buttonElement).toHaveClass("custom-button");
    });

    // Add more test cases here as needed.
});
