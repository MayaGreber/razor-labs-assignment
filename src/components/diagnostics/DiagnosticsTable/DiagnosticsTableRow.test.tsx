import React from "react";
import { render, screen } from "@testing-library/react";
import DiagnosticsTableRow from "./DiagnosticsTableRow";
import { DiagnosticEntry } from "../../../data/mockData"; 

describe("DiagnosticsTableRow", () => {
  test("renders diagnostic data correctly", () => {
    const diagnostic: DiagnosticEntry = {
      id: "123",
      created_at: "2025-06-25T14:30:00Z",
      type: "motor",       
      severity: "critical" 
    };

    render(<DiagnosticsTableRow diagnostic={diagnostic} />);

    expect(screen.getByText("25.06.2025")).toBeInTheDocument();
    expect(screen.getByText("motor")).toBeInTheDocument();
    expect(screen.getByText("critical")).toBeInTheDocument();
  });
});
