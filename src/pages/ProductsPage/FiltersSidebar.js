import React from "react";
import { slide as Menu } from "react-burger-menu";
import Filters from "./Filters";

const FiltersSidebar = ({
  isOpen,
  setSideNavOpen,
  filterProducts,
  ...props
}) => (
  <Menu
    isOpen={isOpen}
    customBurgerIcon={false}
    onClose={() => setSideNavOpen(false)}
    {...props}
  >
    <Filters customId="mobile" filterProducts={filterProducts} />
  </Menu>
);
export default FiltersSidebar;
