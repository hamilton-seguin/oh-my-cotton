import { HeadFC } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";
import { Video } from "../../components/Video";
import { Logo } from "../../components/Logo";
import { Breadcrumbs } from "../../components/Breadcrumbs";

import selfVideo1Mp4 from "../../assets/selfVideo1.mp4";
import selfVideo1Webm from "../../assets/selfVideo1.webm";
import selfVideo2Mp4 from "../../assets/selfVideoTrim2.mp4";
import selfVideo2Webm from "../../assets/selfVideo2.webm";

const SelfConfidence = () => {
  return (
    <Layout>
      <main>
        <Breadcrumbs text="tribute to self-confidence" />
        <Video sourceMp4={selfVideo1Mp4} />
        <div className="relative w-full mt-8" id="absoluteDiv">
          <div className="image1 w-[49%] absolute z-10">
            <StaticImage src="../../images/self1.jpeg" alt="how to care" />
            <p className="text-center absolute inset-x-0 bottom-[6%] white underline">
              How to care
            </p>
          </div>
          <div id="thisImage" className="image2 absolute">
            <StaticImage src="../../images/self2.jpeg" alt="Ode to the sun" />
            <p className="text-center absolute inset-x-0 bottom-[25%] white underline">
              Ode to the sun
            </p>
          </div>
          <div id="videoDiv" className="image3 absolute">
            <Video sourceMp4={selfVideo2Mp4} />
            <p className="text-center absolute inset-x-0 bottom-[4%] white underline">
              Go green
            </p>
          </div>
          <div className="image4 absolute">
            <StaticImage
              src="../../images/self3.jpeg"
              alt="We design for you"
            />
            <p className="text-center absolute inset-x-0 bottom-[6%] white underline">
              We design for you
            </p>
          </div>
        </div>
        <div className="" id="secondDiv">
          <div className="relative">
            <StaticImage src="../../images/self4.jpeg" alt="oh my cotton" />
            <Logo
              className="offset-text-middle bottom-[5%] mx-auto"
              hexColor="white"
              width="65vw"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SelfConfidence;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <title>Self Confidence</title>
    </>
  );
};
