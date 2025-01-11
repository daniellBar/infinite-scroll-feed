import { CLIENT_ROUTES } from "../../router/routes";
import home from "../../assets/icons/pages/home.svg";
import { NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    icon: home,
    path: CLIENT_ROUTES.Main,
  },
];
