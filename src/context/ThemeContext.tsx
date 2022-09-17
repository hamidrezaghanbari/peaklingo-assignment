import { createContext, useState } from "react";
import type { ReactElement } from "react";
import type {
  ThemeContextType,
  ThemeProviderPropsType,
  ThemeType,
} from "./@types/ThemeContext";

const defaultTheme = "light";
export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderPropsType): ReactElement => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
