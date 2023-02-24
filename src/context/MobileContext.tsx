import { createContext, Dispatch, useState } from 'react';

interface IMobileContext {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<React.SetStateAction<boolean>>;
}

interface IMobileContextProps {
  children: React.ReactNode;
}

export const MobileContext = createContext<IMobileContext>(
  {} as IMobileContext,
);

export const MobileProvider = ({ children }: IMobileContextProps) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <MobileContext.Provider value={{ mobileMenu, setMobileMenu }}>
      {children}
    </MobileContext.Provider>
  );
};
