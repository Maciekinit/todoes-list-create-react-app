import { NavLink } from "react-router-dom";
const activeClassName = "active";

export const styledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
  &.${activeClassName} {
    color: red;
  }
`;
