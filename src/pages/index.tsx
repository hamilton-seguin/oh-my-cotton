import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { Journal } from "../components/Journal";
import { Reusable1, Reusable2 } from "../components/Reusable";
import video1 from "../assets/main4.mp4";
import video2 from "../assets/main4.webm"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <StaticImage alt="background" src="../images/backgroundMain.jpeg" />
        <div className="flex justify-between my-16">
          <StaticImage
            src="../images/main2.jpeg"
            alt="ohmycotton"
            className="max-w-[49.4%]"
          />
          <StaticImage
            src="../images/main3.jpeg"
            alt="ohmycotton"
            className="max-w-[49.4%]"
          />
        </div>
        <div className="flex flex-col justify-center w-[50%] mx-auto min-h-[30vh] text-justify my-24">
          <h1 className="text-3xl lg:text-4xl font-bold">Quality of Living</h1>
          <p className="text-justify my-8">Take time for life's little moments. Sinking in your favourite wardrobe. At OHMYCOTTON, your daily rituals are at the heart of our design. We make clothing to give you your best day, every day. Our goal is to make people proud and happy to live with our products.</p>
          <Link to="/our-story">Our story</Link>
        </div>
        <video autoPlay loop muted preload="auto" className="w-full aspect-video">
          <source src={video1} type="video/mp4" />
          <source src={video2} type="video/webm" />
        </video>
        <Reusable1 />
        <Journal />
        <Reusable2 />
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
      <body className="2xl:mx-auto max-w-screen-2xl" />
    </>
  );
};
