import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DiagnosticType,SeverityType,DiagnosticEntry,} from "../../../data/mockData";
import { formatDateToDDMMYYYY } from "../../../utils/dateUtils";
import "./DiagnosticForm.scss";

interface Props {
  onSave: (entry: Omit<DiagnosticEntry, "id">) => void;
  onCancel: () => void;
}

const DiagnosticForm: React.FC<Props> = ({ onSave, onCancel }) => {
  const [diagnosticDate, setDiagnosticDate] = useState(() => new Date().toISOString());
  const [faultType, setFaultType] = useState<DiagnosticType | "">("");
  const [severity, setSeverity] = useState<SeverityType | "">("");
  const [errors, setErrors] = useState<{date?: string; faultType?: string; severity?: string;}>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    const selectedDate = new Date(diagnosticDate);

    if (!diagnosticDate) {
      newErrors.date = "Date is required.";
    } else if (isNaN(selectedDate.getTime())) {
      newErrors.date = "Invalid date.";
    } else if (selectedDate > new Date()) {
      newErrors.date = "Date cannot be in the future.";
    }
    if (!faultType) {
      newErrors.faultType = "Fault type is required.";
    }
    if (!severity) {
      newErrors.severity = "Severity is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onSave({
      created_at: diagnosticDate,
      type: faultType as DiagnosticType,
      severity: severity as SeverityType,
    });
  };

  return (
    <div className="diagnostic-form">
      <h2>Add new diagnostic</h2>
      <div className="form-field">
        <label htmlFor="diagnostic-date">
          Diagnostic date
          {errors.date && <span className="error"> - {errors.date}</span>}
        </label>
        <div className="custom-wrapper">
          <DatePicker
            id="diagnostic-date"
            selected={diagnosticDate ? new Date(diagnosticDate) : null}
            onChange={(date: Date | null) => {
              if (date) {
                const isoDate = date.toISOString();
                setDiagnosticDate(isoDate);
                if (!isNaN(new Date(isoDate).getTime())) {
                  setErrors((prev) => ({ ...prev, date: undefined }));
                }
              }
            }}
            dateFormat="dd.MM.yyyy"
            showIcon={false}
            className="custom-datepicker-as-select"
            value={diagnosticDate ? formatDateToDDMMYYYY(diagnosticDate) : ""}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="fault-type">
          Fault type
          {errors.faultType && (
            <span className="error"> - {errors.faultType}</span>
          )}
        </label>
        <div className="custom-wrapper">
          <select
            id="fault-type"
            value={faultType}
            onChange={(e) => {
              const val = e.target.value as DiagnosticType;
              setFaultType(val);
              if (val) {
                setErrors((prev) => ({ ...prev, faultType: undefined }));
              }
            }}
          >
            <option value="" disabled hidden>
              Select type
            </option>
            <option value="bearing">Bearing</option>
            <option value="gear">Gear</option>
            <option value="motor">Motor</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="severity">
          Severity
          {errors.severity && (
            <span className="error"> - {errors.severity}</span>
          )}
        </label>
        <div className="custom-wrapper">
          <select
            id="severity"
            value={severity}
            onChange={(e) => {
              const val = e.target.value as SeverityType;
              setSeverity(val);
              if (val) {
                setErrors((prev) => ({ ...prev, severity: undefined }));
              }
            }}
          >
            <option value="" disabled hidden>
              Select severity
            </option>
            <option value="healthy">Healthy</option>
            <option value="alarm">Alarm</option>
            <option value="critical">Critical</option>
          </select>
        </div>
      </div>

      <div className="modal-actions">
        <button className="action-close" onClick={onCancel}>
          Cancel
        </button>
        <button className="action-save" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default DiagnosticForm;
