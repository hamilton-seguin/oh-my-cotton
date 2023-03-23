import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

const SelfConfidence = () =>{
  return (
    <Layout>
    <h1> SelfConfidence </h1>
    </Layout>
  )
}

export default SelfConfidence;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Self Confidence</title>
    </>
  );
};
