import { createContext } from "react";

export interface ContextProps {
  sidemenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding:boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
