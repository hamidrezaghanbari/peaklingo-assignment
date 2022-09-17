import type { ReactNode } from "react";

// @types.ThemeContext.tsx
export type ThemeType = "light" | "dark";
export interface ThemeContextType {
  theme: ThemeType;
  changeTheme: (theme: Theme) => void;
}
export interface ThemeProviderPropsType {
  children: ReactNode | ReactNode[];
}
