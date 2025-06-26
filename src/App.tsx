import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import TopSection from "./components/header/TopSection";
import DiagnosticPage from "./components/diagnostics/DiagnosticPage/DiagnosticPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <TopSection />
        <DiagnosticPage />
      </div>
    </div>
  );
}

export default App;