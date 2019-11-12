// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react"
import Display from "./Display";

test("app renders correctly", () => {
    expect(render(<Display />)).toMatchSnapshot();
})

test("display green-led class for unlocked and open state", () => {
    const display = render(<Display closed={false} locked={false} />)

    const lockState = display.getByText(/unlocked/i);
    const openState = display.getByText(/open/i);

    expect(lockState.className).toBe("led green-led");
    expect(openState.className).toBe("led green-led");

})


test("display red-led class for locked and closed state", () => {
    const display = render(<Display closed={true} locked={true} />)

    const lockState = display.getByText(/locked/i);
    const openState = display.getByText(/closed/i);

    expect(lockState.className).toBe("led red-led");
    expect(openState.className).toBe("led red-led");

})