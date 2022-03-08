import React from "react";
import useIsMobile from "@lib/hooks/useIsMobile";
import DesktopNavbar from "./Desktop";
import MobileNavbar from "./MobileNavbar";

const Navbar = (): JSX.Element => {
  const { isMobile } = useIsMobile();

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
