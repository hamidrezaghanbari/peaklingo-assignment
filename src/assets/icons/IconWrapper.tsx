import { memo } from "react";
import type { FC } from "react";
import type { IconWrapperType } from "../../@types/Icon";
import styled from "styled-components";

const Wrapper = styled.svg`
  z-index: 2;
`;

export const IconWrapper: FC<IconWrapperType> = memo(
  ({
    children,
    onClick,
    className,
    role,
    id,
    viewBox,
    width = "20px",
    height = "20px",
    style,
  }: IconWrapperType) => {
    return (
      <Wrapper
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={className}
        viewBox={`${viewBox ? viewBox : "0 0 16 16"}`}
        onClick={onClick}
        role={role}
        id={id}
        {...(width && { width: width })}
        {...(height && { height: height })}
        {...(style && { style: style })}
      >
        {children}
      </Wrapper>
    );
  }
);

IconWrapper.displayName = "IconWrapper";
