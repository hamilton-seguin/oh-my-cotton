import React, { useEffect, useContext } from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { Journal } from "../components/Journal";
import { Reusable1, Reusable2 } from "../components/Reusable";
import { Locations } from "../components/Locations";
import { Video } from "../components/Video";
import { OpeningAnimation } from "../components/OpeningAnimation";

import { InitialRenderContext } from "../utils/context";

import main4mp4 from "../assets/main4.mp4";
import main4webm from "../assets/main4.webm";

const IndexPage: React.FC<PageProps> = () => {
  const { initialRender, toggleInitialRender } = useContext(InitialRenderContext);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      toggleInitialRender(false);
    }, 10000);
    const nav = document?.getElementById("Nav");
    if (nav) {
      nav?.classList.add("absolute");
      initialRender
        ? nav.setAttribute(
            "style",
            "opacity: 0; animation: show-nav 1s 4s forwards;"
          )
        : nav.setAttribute("style", "opacity: 1;");
    }
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <Layout>
      <main className="relative">
        {initialRender && (<OpeningAnimation />)}

        <StaticImage alt="background" src="../images/backgroundMain.jpeg" />
        <div className="flex justify-between my-16 relative">
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
          <div className="text-center offset-text-left bottom-[6%] white whitespace-nowrap">
            <Link to="/#" className="underline">
              Ode to the sun
            </Link>
          </div>
          <div className="text-center offset-text-right bottom-[6%] white whitespace-nowrap">
            <Link
              to="/projects/self-confidence"
              title="Projects"
              className="underline"
            >
              Tribute to Self-confidence
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[50%] mx-auto min-h-[30vh] text-justify my-24">
          <h1 className="text-3xl lg:text-4xl font-bold">Quality of Living</h1>
          <p className="text-justify my-8">
            Take time for life's little moments. Sinking in your favourite
            wardrobe. At OHMYCOTTON, your daily rituals are at the heart of our
            design. We make clothing to give you your best day, every day. Our
            goal is to make people proud and happy to live with our products.
          </p>
          <Link to="/our-story" className="underline">
            Our story
          </Link>
        </div>
        <div className="relative">
          <Video sourceMp4={main4mp4} sourceWebm={main4webm} />
          <div className="text-center absolute inset-x-0 bottom-[6%] white">
            <p>We sew, we customize</p>
            <p className="underline">For you</p>
          </div>
        </div>
        <Reusable1 />
        <Journal />
        <Reusable2 />
        <Locations />
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
      <body className="2xl:mx-auto max-w-screen-3xl max-w-screen" />
    </>
  );
};
