import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Journal from "../components/Journal";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <StaticImage
          alt="background"
          src="../images/backgroundMain.jpeg"
          className=""
        />
        <Journal />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Home Test</title>
    </>
  );
};
