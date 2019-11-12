// Test away
import React from "react";
import { render } from "@testing-library/react"
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

