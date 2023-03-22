import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
      <StaticImage alt="background" src="../images/backgroundMain.jpeg" />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <body className="smooth-scroll" />
      <title>Home Test</title>
    </>
  );
};
