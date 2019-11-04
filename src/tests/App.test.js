import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../components/Counter";
import Todos from "../components/Todos";

describe("<Counter />", () => {
    it("properly increments and decrements the counter", () => {
        const { getByText } = render(<Counter />);
        const counter = getByText("0");
        const incrementButton = getByText("+");
        const decrementButton = getByText("-");

        fireEvent.click(incrementButton);
        expect(counter).toHaveTextContent("1");

        fireEvent.click(decrementButton);
        expect(counter).toHaveTextContent("0");
    });
});

test("adds a new to-do", () => {
    const { getByPlaceholderText, getByText } = render(<Todos />);
    const input = getByPlaceholderText(/add something/i);
    const todo = "Read Master React Testing";

    getByText("No to-dos!");

    fireEvent.change(input, { target: { value: todo } });
    fireEvent.keyDown(input, { key: "Enter" });

    getByText(todo);
    expect(input).toHaveValue("");
});
