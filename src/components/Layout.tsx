import React from "react";

import Meta from "@/layout/Meta";

import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
