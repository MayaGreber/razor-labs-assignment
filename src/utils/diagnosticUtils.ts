import { DiagnosticEntry, SeverityType } from "../data/mockData";

export const severityOrder: Record<SeverityType, number> = {
  critical: 0,
  alarm: 1,
  healthy: 2,
};


export const sortDiagnostics = (entries: DiagnosticEntry[]): DiagnosticEntry[] => {
  return [...entries].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();

    if (dateA !== dateB) {
      return dateB - dateA; 
    }

    return severityOrder[a.severity] - severityOrder[b.severity];
  });
};


export type DailyMaxSeverity = {
  date: string;
  severity: SeverityType;
  type: DiagnosticEntry["type"];
};

export const getMostSeverePerDay = (
  diagnostics: DiagnosticEntry[]
): DailyMaxSeverity[] => {
  const grouped: Record<string, DiagnosticEntry[]> = {};

  diagnostics.forEach((diag) => {
    const date = diag.created_at.split("T")[0];
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(diag);
  });

  const result: DailyMaxSeverity[] = [];

  Object.entries(grouped).forEach(([date, diags]) => {
    const mostSevere = diags.reduce((max, curr) =>
      severityOrder[curr.severity] < severityOrder[max.severity] ? curr : max
    );

    result.push({
      date,
      severity: mostSevere.severity,
      type: mostSevere.type,
    });
  });

  return result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
