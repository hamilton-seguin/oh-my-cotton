import React from "react";
import { Footer } from "./layout/Footer";
import { Navigation } from "./layout/Navigation";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
