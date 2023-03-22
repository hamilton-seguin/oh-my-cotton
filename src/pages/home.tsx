import { PageProps, HeadFC, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";


const Home = () => {
  return (
    <Layout>
      <div className="ml-10 flex-auto">
        <h1 className="lowercase"> TEST</h1>
        <Link to="/">Main</Link>
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Home</title>;
export default Home;
