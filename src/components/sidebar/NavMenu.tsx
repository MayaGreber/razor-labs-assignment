import { ReactComponent as InfoIcon } from "../../assets/icons/sidebar/circle-info.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/sidebar/bell.svg";
import { ReactComponent as FileIcon } from "../../assets/icons/sidebar/file.svg";
import { ReactComponent as GearIcon } from "../../assets/icons/sidebar/gear.svg";

const navItems = [
  { href: "/", icon: <InfoIcon />, label: "Info" },
  { href: "/", icon: <BellIcon />, label: "Notifications" },
  { href: "/", icon: <FileIcon />, label: "Files" },
  { href: "/", icon: <GearIcon />, label: "Settings" },
];

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul>
        {navItems.map(({ href, icon, label }, index) => (
          <li key={index} className="nav-item">
            <a href={href} aria-label={label}>
              <span className="nav-icon">{icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
