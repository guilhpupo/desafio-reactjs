import { useState } from "react";

import { Wrapper, IconWrapper, MenuFull, MenuBar, DevLogin } from "./styles";

import { Menu as MenuIcon, X as CloseMenuIcon } from "@styled-icons/feather";
import LeftMenu, { UserProps } from "components/LeftMenu";

const FullScreenMenu = ({ ...props }: UserProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <MenuBar aria-hidden={isOpen} isOpen={!isOpen}>
        <IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </IconWrapper>
        <DevLogin>@{props.devLogin}</DevLogin>
      </MenuBar>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseMenuIcon
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <LeftMenu {...props} />
      </MenuFull>
    </Wrapper>
  );
};

export default FullScreenMenu;
