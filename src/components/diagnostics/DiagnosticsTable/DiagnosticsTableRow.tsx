
import React from "react";
import { DiagnosticEntry } from "../../../data/mockData";
import { formatDateToDDMMYYYY } from "../../../utils/dateUtils";
import "./DiagnosticsTable.scss";

interface Props {
  diagnostic: DiagnosticEntry;
}

const DiagnosticsTableRow: React.FC<Props> = ({ diagnostic }) => {
  return (
    <div className="diagnostics-row">
      <div className="diagnostics-cell">
       {formatDateToDDMMYYYY(diagnostic.created_at)}
      </div>
      <div className="diagnostics-cell">{diagnostic.type}</div>
      <div className="diagnostics-cell">{diagnostic.severity}</div>
    </div>
  );
};

export default DiagnosticsTableRow;
