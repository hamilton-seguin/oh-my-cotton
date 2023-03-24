import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { Journal } from "../components/Journal";

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
        <p className="text-4xl font-bold text-center">Quality</p>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <title>Home Test</title>
    </>
  );
};
