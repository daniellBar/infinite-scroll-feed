import { NavLink } from "react-router-dom";
import { NavigationItem } from "./types";
import message from "../../assets/icons/message.svg";
import bell from "../../assets/icons/bell.svg";

interface Props {
  items: NavigationItem[];
}

export const Navbar = ({ items }: Props) => {
  return (
    <div className="flex space-x-6 p-4">
      {items.map(({ title, path, icon }) => (
        <div key={title} className="relative">
          <NavLink
            to={path}
            className={({ isActive }) =>
              `flex items-center space-x-2 ${
                isActive ? "text-navbar" : "text-greys-50"
              }`
            }
          >
            <img src={icon} alt={title} />
            <span className="font-medium text-[16px]">{title}</span>
          </NavLink>
          <div
            className={`absolute left-0 right-0 bottom-[-17px] h-0.5 ${
              path === window.location.pathname ? "bg-navbar" : "hidden"
            }`}
          />
        </div>
      ))}

      {/* dummy messaging and notifications */}
      <div className="flex items-center space-x-2 cursor-not-allowed">
        <img src={message} alt="messages" />
        <span className="font-medium text-greys-50 text-[16px]">Messaging</span>
      </div>

      <div className="flex items-center space-x-2 cursor-not-allowed">
        <img src={bell} alt="notifications" />
        <span className="font-medium text-greys-50 text-[16px]">
          Notifications
        </span>
      </div>
    </div>
  );
};
