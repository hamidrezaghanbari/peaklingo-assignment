import { useContext } from "react";
import styled from "styled-components";
import type { NavigationPropType } from "../@types/Navigation";
import { IconMenu } from "../assets/icons";
import { CounterContext } from "../context";
import type { CounterContextType } from "../context/@types";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

const NavWrapper = styled.ul<{ open?: boolean }>`
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 0;

  @media (max-width: 650px) {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
  }

  & > li:not(:first-child) {
    @media (max-width: 650px) {
      display: ${({ open }) => (open ? "flex" : "none")};
    }
  }
`;

const NavItem = styled.li<{ open?: boolean }>`
  display: flex;
  padding-right: 2rem;

  &:first-child {
    display: none;
    margin: ${({ open }) => (open ? "0" : "auto")};
    @media (max-width: 650px) {
      display: flex;
    }

    & > svg {
      transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0)")};
      transition: 0.7s;
    }
  }

  &:hover {
    cursor: pointer;
  }
  & > a {
    color: black;
    text-decoration: none;
  }
  & > a:hover {
    color: #6b9bd2;
    text-decoration: underline;
  }
`;
export const Navigation = ({ open, setOpen }: NavigationPropType) => {
  const {
    counter: { time },
  } = useContext(CounterContext) as CounterContextType;

  return (
    <Nav>
      <NavWrapper open={open}>
        <NavItem open={open} onClick={() => setOpen((prev: boolean) => !prev)}>
          <IconMenu style={{ color: "#000" }} />
        </NavItem>

        <NavItem>
          <a href="#">Menu 1</a>
        </NavItem>
        <NavItem>
          <a href="#">timer: {time}s</a>
        </NavItem>
        <NavItem>
          <a href="#">Menu 3</a>
        </NavItem>
      </NavWrapper>
    </Nav>
  );
};
