// Test away
import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react"
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

test("app renders correctly", () => {
    expect(render(<Controls />)).toMatchSnapshot();
})

test("button text changes based on current state", async () => {
    // const [locked, setLocked] = useState(false);
    // const [closed, setClosed] = useState(false);
    let locked = false;
    let closed = false;
    const setLocked = () => (locked = !locked);
    const setClosed = () => (closed = !closed);
    const controls = render(<Controls closed={closed} locked={locked} />);
    const lockBtn = controls.getByText("Lock Gate");
    const closeBtn = controls.getByText("Close Gate");
    lockBtn.onClick = setLocked((locked) => !locked);
    closeBtn.onClick = setClosed((closed) => (!closed));
    expect(lockBtn).toBeDefined;
    expect(closeBtn).toBeDefined;
    fireEvent.click(closeBtn);
    await fireEvent.click(lockBtn);
    expect(lockBtn).not.toBeDefined;
    expect(closeBtn).not.toBeDefined;
})


test("cannot be closed or opened if it is locked", async () => {
    const { getByText } = render(<Dashboard />);

    const button1 = getByText("Close Gate");
    const button2 = getByText("Lock Gate");
    fireEvent.click(button1);
    await fireEvent.click(button2);
    expect(button1.disabled).toBe(true);
})