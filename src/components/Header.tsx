import { useState } from "react";
import styled from "styled-components";
import { IconMenu } from "../assets/icons";
import { Navigation } from "./Navigation";
import { ToggleTheme } from "./ToggleTheme";

const HeaderWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  height: ${({ open }) => (open ? "200px" : "45px")};
  transition: height 0.15s ease-out;
  overflow: hidden;
  align-items: ${({ open }) => (open ? "flex-start" : "center")};
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: ${({ open }) => (open ? "1rem" : "0 1rem")}; ;
`;

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <HeaderWrapper open={open}>
      <Navigation open={open} setOpen={setOpen} />

      <span>
        <ToggleTheme />
      </span>
    </HeaderWrapper>
  );
};
