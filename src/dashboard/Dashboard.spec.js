// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react"
import Dashboard from "./Dashboard";

test("app renders correctly", () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})

test('state is unlocked and open', () => {
    const dashboard = render(<Dashboard />);

    const lockBtn = dashboard.getByText('Lock Gate');
    const closeBtn = dashboard.getByText('Close Gate');

    expect(lockBtn.disabled).toBe(true);
    expect(closeBtn.disabled).toBe(false);
})
//BUT... How do you make it based on a snapshot === onLoad?

test("cannot be closed or opened if it is locked", async () => {
    const { getByText } = render(<Dashboard />);

    const button1 = getByText("Close Gate");
    const button2 = getByText("Lock Gate");
    fireEvent.click(button1);
    await fireEvent.click(button2);
    expect(button1.disabled).toBe(true);
})

test("shows the controls and display", () => {
    const { getByText } = render(<Dashboard />);
    const display = getByText("Unlocked");
    const controls = getByText("Lock Gate");

    expect(display && controls).toBeDefined();


})