import { ReactComponent as LogOutIcon } from "../../assets/icons/sidebar/arrow-right-from-bracket.svg";

const SidebarFooter = () => {
  return (
    <>
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="logout">
            <LogOutIcon />
          </div>
          <div className="user-name">MG</div>
        </div>
      </div>
    </>
  );
};

export default SidebarFooter;
