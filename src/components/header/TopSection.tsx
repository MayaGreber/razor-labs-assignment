import { ReactComponent as LogoIcon } from "../../assets/icons/datamind-logo.svg";
import "./TopSection.scss";

const TopSection = () => {
  return (
    <div className="main-logo-wrapper">
      <div className="main-logo">
        <LogoIcon />
      </div>
    </div>
  );
};

export default TopSection;
