import { SearchBar } from "../../components/Search/Search";
import logo from "../../assets/logo.svg";
import fakeUserAvatar from "../../assets/fakeUser.svg";
import { Navbar } from "../../components/Navbar/Navbar";
import { navigationItems } from "../../components/Navbar/consts";

export const Header = () => {
  return (
    <div className="fixed z-50 box-border px-[10%] top-0 left-0 h-header w-full bg-white shadow-header flex items-center justify-between">
      <div className="flex gap-3">
        <img src={logo} alt="logo" />
        <SearchBar width="216px" />
      </div>

      <div className="flex gap-3 items-center">
        <Navbar items={navigationItems} />
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={fakeUserAvatar}
          alt="user"
        />
      </div>
    </div>
  );
};
