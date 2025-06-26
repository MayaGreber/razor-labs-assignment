import { sortDiagnostics } from "./diagnosticUtils";
import { DiagnosticEntry } from "../data/mockData";

describe("sortDiagnostics utility", () => {
  const baseDate = "2025-06-25T10:00:00Z";

  const entries: DiagnosticEntry[] = [
    {
      id: "1",
      created_at: baseDate,
      type: "bearing",
      severity: "alarm",
    },
    {
      id: "2",
      created_at: baseDate,
      type: "gear",
      severity: "critical",
    },
    {
      id: "3",
      created_at: "2025-06-26T09:00:00Z",
      type: "motor",
      severity: "healthy",
    },
  ];

  test("sorts by date descending and severity ascending", () => {
    const sorted = sortDiagnostics(entries);
    expect(sorted[0].id).toBe("3"); 
    expect(sorted[1].id).toBe("2");
    expect(sorted[2].id).toBe("1");
  });
});
