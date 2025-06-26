import { useEffect, useState } from "react";
import { diagnosticsMockData, DiagnosticEntry } from "../data/mockData";
import { sortDiagnostics } from "../utils/diagnosticUtils";

export const useDiagnostics = () => {
  const [diagnostics, setDiagnostics] =
    useState<DiagnosticEntry[]>(diagnosticsMockData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const addDiagnostic = (newDiagnostic: Omit<DiagnosticEntry, "id">) => {
    const newEntry: DiagnosticEntry = {
      id: crypto.randomUUID(),
      ...newDiagnostic,
    };
    setDiagnostics((prev) => [newEntry, ...prev]);
  };

  return {
    diagnostics: sortDiagnostics(diagnostics),
    isLoading,
    addDiagnostic,
  };
};
