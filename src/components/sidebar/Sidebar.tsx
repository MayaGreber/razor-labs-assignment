import SidebarHeader from "./SidebarHeader";
import NavMenu from "./NavMenu";
import SidebarFooter from "./SidebarFooter";
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <NavMenu />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
