import { IconMoon, IconSun } from "../assets/icons";
import { ThemeContext } from "../context";
import { useContext } from "react";
import type {
  ThemeContextType,
  ThemeType,
} from "../context/@types/ThemeContext";
import styled from "styled-components";

const Button = styled.button`
  width: 75px;
  border-radius: 6px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  outline: none;
  position: relative;
  background-color: gray;
  &:hover {
    cursor: pointer;
  }

  &:before {
    position: absolute;
    opacity: 0.9;
    z-index: 1;
    content: "";
    height: 26px;
    width: 28px;
    transform: ${({theme}) => theme === 'light' ? 'translateX(40px)': ''};
    bottom: 3px;
    left: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.7s;
    border-radius: 6px;
  }
`;

export const ToggleTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleChangeTheme = () =>
    changeTheme((prev: ThemeType) => (prev === "light" ? "dark" : "light"));

  return (
    <Button theme={theme} onClick={handleChangeTheme}>
      <IconMoon style={{ color: "#bdc3c7" }} />
      <IconSun style={{ color: "#ffe100" }} />
    </Button>
  );
};
