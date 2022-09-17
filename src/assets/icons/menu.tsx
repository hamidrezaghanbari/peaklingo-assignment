import { memo } from "react";
import type { FC } from "react";

import type { IconType } from "../../@types/Icon";
import { IconWrapper } from "./IconWrapper";

export const IconMenu: FC<IconType> = memo(
  ({ className, style, onClick }: IconType) => {
    return (
      <IconWrapper style={style} viewBox="0 0 32 32" className={className} onClick={onClick}>
        <path
          d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
          id="XMLID_314_"
        />
        <path
          d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
          id="XMLID_315_"
        />
        <path
          d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
          id="XMLID_316_"
        />
      </IconWrapper>
    );
  }
);

IconMenu.displayName = "IconMenu";
