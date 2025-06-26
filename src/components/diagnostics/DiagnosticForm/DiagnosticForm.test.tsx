import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DiagnosticForm from "./DiagnosticForm";

describe("DiagnosticForm basic tests", () => {
  const onSave = jest.fn();
  const onCancel = jest.fn();

  beforeEach(() => {
    onSave.mockClear();
    onCancel.mockClear();
  });

  test("does NOT call onSave when submitting empty form", () => {
    render(<DiagnosticForm onSave={onSave} onCancel={onCancel} />);
    fireEvent.click(screen.getByText(/save/i));
    expect(onSave).not.toHaveBeenCalled();
  });

  test("calls onSave with correct data when form is valid", () => {
    render(<DiagnosticForm onSave={onSave} onCancel={onCancel} />);

    fireEvent.change(screen.getByLabelText(/fault type/i), {
      target: { value: "bearing" },
    });

    fireEvent.change(screen.getByLabelText(/severity/i), {
      target: { value: "alarm" },
    });

    fireEvent.click(screen.getByText(/save/i));

    expect(onSave).toHaveBeenCalledTimes(1);

    const savedData = onSave.mock.calls[0][0];
    expect(savedData.type).toBe("bearing");
    expect(savedData.severity).toBe("alarm");
    expect(savedData.created_at).toBeTruthy();
  });

  test("calls onCancel when cancel button clicked", () => {
    render(<DiagnosticForm onSave={onSave} onCancel={onCancel} />);
    fireEvent.click(screen.getByText(/cancel/i));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
