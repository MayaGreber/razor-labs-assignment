import { ReactComponent as IndustryWindows } from "../../assets/icons/sidebar/industry-windows.svg";

const SidebarHeader = () => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <IndustryWindows />
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
