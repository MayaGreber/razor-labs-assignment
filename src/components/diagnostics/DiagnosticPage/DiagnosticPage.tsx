import React, { useState } from "react";
import CardBox from "../../ui/CardBox/CardBox";
import Modal from "../../ui/Modal/Modal";
import Loading from "../../ui/Loading/Loading";
import FusionTrendChart from "../FusionTrendChart/FusionTrendChart";
import DiagnosticForm from "../DiagnosticForm/DiagnosticForm";
import DiagnosticsTableHeader from "../DiagnosticsTable/DiagnosticsTableHeader";
import DiagnosticsTableRow from "../DiagnosticsTable/DiagnosticsTableRow";
import { ReactComponent as TrendsIcon } from "../../../assets/icons/chart-line.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { useDiagnostics } from "../../../hooks/useDiagnostics";
import { DiagnosticEntry } from "../../../data/mockData";
import "./DiagnosticPage.scss";

const DiagnosticPage = () => {
  const [firstDate, setFirstDate] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { diagnostics, isLoading, addDiagnostic } = useDiagnostics();

  const handleAdd = (newDiagnostic: Omit<DiagnosticEntry, "id">) => {
    addDiagnostic(newDiagnostic);
    setIsModalOpen(false);
  };

  if (isLoading) return <Loading />;

  return (
    <main className="diagnostic-page">
      <div className="main-body">
        <CardBox
          header={
            <div className="fusionTrand-header">
              <div className="fusionTrand-title">
                <TrendsIcon />
                <span>Fusion trend</span>
              </div>
              <div className="fusionTrand-calendar">
                <CalendarIcon />
                <span>From {firstDate}</span>
              </div>
            </div>
          }
        >
          <FusionTrendChart
            data={diagnostics}
            onFirstDateChange={setFirstDate}
          />
        </CardBox>

        <header className="section-header">
          <h1 className="header-text">Diagonostics</h1>
          <button
            className="header-button"
            onClick={() => setIsModalOpen(true)}
          >
            <span><span className="btn-sign"></span> Add new</span>
          </button>
        </header>

        <CardBox className="card-diagnostics-table" header={<DiagnosticsTableHeader />} wrapSections>
          {diagnostics.map((d) => (
            <DiagnosticsTableRow key={d.id} diagnostic={d} />
          ))}
        </CardBox>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DiagnosticForm
          onSave={handleAdd}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </main>
  );
};

export default DiagnosticPage;
