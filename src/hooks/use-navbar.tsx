import { ReactNode, createContext, useContext, useState } from "react";

interface navbarActions {
  isVisible: boolean;
  onCloseOrOpen?: () => void;
}
const initialValue: navbarActions = {
  isVisible: false,
};
const NavBarContext = createContext(initialValue);

export default function NavBarContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toggle, setToggle] = useState(false);
  const onCloseOrOpen = () => {
    setToggle(!toggle);
    console.log("sssss");
  };

  return (
    <NavBarContext.Provider value={{ isVisible: toggle, onCloseOrOpen }}>
      {children}
    </NavBarContext.Provider>
  );
}

export function useNavBar() {
  return useContext(NavBarContext);
}
