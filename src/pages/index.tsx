import React, { useEffect, useContext } from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout/Layout";
import { Journal } from "../components/Journal";
import { Reusable1, Reusable2 } from "../components/Reusable";
import { Locations } from "../components/Locations";
import { Video } from "../components/Video";
import { OpeningAnimation } from "../components/OpeningAnimation";
import { SideToSide } from "../components/SideToSide";
import { SEO } from "../components/Seo";

import { InitialRenderContext } from "../utils/context";
import { useIsDesktop } from "../utils/utils";

import main4mp4 from "../assets/main4.mp4";
import main4webm from "../assets/main4.webm";

const IndexPage: React.FC<PageProps> = () => {
  const { initialRender, toggleInitialRender } =
    useContext(InitialRenderContext);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      toggleInitialRender(false);
    }, 10000);
    const nav = document?.getElementById("Nav");
    if (nav) {
      nav?.classList.add("absolute", "opacity-0");

      if (isDesktop !== undefined) {
        initialRender && isDesktop === true
          ? nav.setAttribute("style", "animation: show-nav 1s 4s forwards;")
          : nav.setAttribute("style", "opacity: 1;");
      }
    }
    return () => clearTimeout(timeOut);
  }, [isDesktop]);

  return (
    <Layout>
      <main>
        {initialRender && isDesktop && <OpeningAnimation />}
        <StaticImage
          alt="background"
          src="../images/main1.jpg"
          className="min-h-[75vh] max-h-[90vh]"
          loading="eager"
          objectPosition={"bottom"}
        />
        <SideToSide />
        <div className="flex flex-col lg:justify-center mx-4 lg:w-[50%] lg:mx-auto lg:min-h-[30vh] text-justify my-16 lg:my-24">
          <h1 className="text-3xl lg:text-4xl font-bold">Quality of Living</h1>
          <p className="text-justify my-8">
            Take time for life's little moments. Sinking in your favourite
            wardrobe.
            <br />
            At OHMYCOTTON, your daily rituals are at the heart of our design. We
            make clothing to give you your best day, every day. Our goal is to
            make people proud and happy to live with our products.
          </p>
          <Link to="/our-story" className="underline">
            Our story
          </Link>
        </div>
        <div className="relative min-h-[75vh] max-h-[90vh]">
          <Video sourceMp4={main4mp4} sourceWebm={main4webm} minHeight />
          <div className="text-center absolute inset-x-0 bottom-[10%] lg:bottom-[7%] white">
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
      <title>Oh My Cotton</title>
      <SEO />
    </>
  );
};
