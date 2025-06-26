import "./DiagnosticsTable.scss";

const DiagnosticsTableHeader = () => (
  <div className="diagnostics-header-row diagnostics-row ">
    <div className="diagnostics-cell">Diagnostic date</div>
    <div className="diagnostics-cell">Fault type</div>
    <div className="diagnostics-cell">Severity</div>
  </div>
);

export default DiagnosticsTableHeader;