import { HeadFC } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout/Layout";
import { Video } from "../../components/Video";
import { Logo } from "../../components/Logo";
import { Breadcrumbs } from "../../components/Breadcrumbs";

import selfVideo1Mp4 from "../../assets/selfVideo1.mp4";
import selfVideo2Mp4 from "../../assets/selfVideoTrim2.mp4";
import { SEO } from "../../components/Seo";


const SelfConfidence = () => {
  return (
    <Layout>
      <main>
        <Breadcrumbs text="tribute to self-confidence" />
        <div className="max-h-[80vh]">
          <Video sourceMp4={selfVideo1Mp4} minHeight />
        </div>
        <div
          className="relative w-full mt-16 text-base lg:text-lg"
          id="absoluteDiv"
        >
          <div className="image1 relative mr-4 lg:w-[49%] lg:absolute z-40">
            <StaticImage src="../../images/self1.jpeg" alt="how to care" />
            <p className="text-center absolute inset-x-0 bottom-[4%] lg:bottom-[6%] white underline">
              How to care
            </p>
          </div>
          <div
            id="thisImage"
            className="image2 ml-4 relative lg:absolute max-h-[75vh] lg:min-h-fit z-30 lg:z-0 -top-8 lg:top-0"
          >
            <div className="relative">
              <StaticImage
                src="../../images/self2.jpeg"
                alt="Ode to the sun"
                className="max-h-[75vh] lg:max-h-min min-h-[50vh]"
              />
              <p className="text-center absolute inset-x-0 bottom-[6%] lg:bottom-[25%] white underline">
                Ode to the sun
              </p>
            </div>
          </div>
          <div
            id="videoDiv"
            className="image3 relative mr-4 z-20 -top-16 lg:absolute"
          >
            <Video
              sourceMp4={selfVideo2Mp4}
              className="min-h-[75vh] max-h-[100vw] md:min-h-[76vh] lg:min-h-max object-top lg:object-contain"
            />
            <p className="text-center absolute inset-x-0 bottom-[4%] white underline">
              Go green
            </p>
          </div>
          <div className="image4 -top-20 ml-4 lg:z-30 relative lg:absolute">
            <StaticImage
              src="../../images/main3.jpeg"
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
      <SEO title="Self Confidence" description="A project all about revealing the strength of your personality through our cotton designs" pathname="https://ohmycotton.gatsbyjs.io/projects/self-confidence/"/>
    </>
  );
};
