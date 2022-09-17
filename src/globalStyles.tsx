import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import type { GlobalStyleProp } from "./@types/GlobalStyle";
import { ThemeContext } from "./context";
import type { ThemeContextType } from "./context/@types/ThemeContext";

const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};
const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

const GlobalStyle = createGlobalStyle<GlobalStyleProp>`
    body {
      position: relative;
      margin: 0;
      padding: 1rem;
      background: palegoldenrod;
      font-family: Open-Sans, Helvetica, Sans-Serif;
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }
`;

const GlobalStyleComponent = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return <GlobalStyle theme={theme === "dark" ? darkTheme : lightTheme} />;
};

export default GlobalStyleComponent;
