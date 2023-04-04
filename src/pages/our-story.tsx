import React from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout/Layout";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SEO } from "../components/Seo";

const OurStory = () => {
  return (
    <Layout>
      <main>
        <Breadcrumbs url="" text="our story" />
        <div className="flex mt-8 lg:mt-10 flex-col lg:flex-row min-h-min mx-4 lg:mx-0">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min lg:min-h-[49vw]">
            <h1 className="text-3xl lg:text-4xl font-bold lg:px-16 xl:px-[8%] text-start">
              About the designers
            </h1>
            <h2 className="lg:col-start-1 font-bold text-2xl lg:px-16 xl:px-[8%] my-8">
              Candelaria Castano
            </h2>
            <div className="lg:col-start-1 order-last lg:px-16 xl:px-[8%] my-8 lg:my-0">
              <p>
                Her work explores the relationship between gender politics and
                romance tourism. With influences as diverse as Machiavelli and
                Roy Lichtenstein, new synergies are generated from both
                traditional and modern meanings.
              </p>
              <p className="my-8">
                Ever since she was a child she has been fascinated by the
                theoretical limits of meaning. What starts out as yearning soon
                becomes debased into a hegemony of greed, leaving only a sense
                of nihilism and the prospect of a new synthesis.
              </p>
              <p>
                As shifting phenomena become clarified through frantic and
                repetitive practice, the viewer is left with a hymn to the
                possibilities of our condition.
              </p>
            </div>
            <div className="lg:order-last lg:flex lg:absolute lg:right-0 min-h-fit -mx-4 lg:mx-0">
              <StaticImage
                src="../images/designer1.jpeg"
                alt="ohmycotton designer Candelaria Castano"
                aspectRatio={1 / 1}
                className="max-h-[70vh] lg:max-h-fit lg:max-w-[49vw]"
                placeholder={"none"}
                objectPosition={"top"}
              />
            </div>
          </div>
        </div>
        <div className="flex lg:mt-10 flex-col lg:flex-row min-h-min mx-4">
          <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min flex flex-col text-justify leading-7 min-h-fit lg:max-h-min lg:min-h-[49vw]">
            <div className="lg:flex lg:absolute lg:left-0 min-h-fit -mx-4 lg:mx-0 lg:order-first">
              <StaticImage
                src="../images/designer3.jpeg"
                alt="ohmycotton designer Miyashiro Aiko"
                aspectRatio={1 / 1}
                className="max-h-[70vh] lg:max-h-fit lg:max-w-[49vw]"
                objectPosition={"top"}
              />
            </div>
            <h2 className="lg:col-start-2 font-bold text-2xl lg:px-16 xl:px-[8%] mb-8 order-first">Miyashiro Aiko</h2>
            <div className="lg:col-start-2 lg:px-16 xl:px-[8%] my-8 lg:my-0">
              <p>
                Hiking addict, self-starter, band member, Japanese fashion
                designer. Acting at the junction of simplicity and mathematics
                to save the world from bad design. Spanish award-winning
                designer raised and graduated in Tokyo at the School of Fashion
                & currently living in New York City.
              </p>
              <p className="my-8">
                Ever since she was a postgraduate she has been fascinated by the
                ephemeral nature of the universe.
              </p>
              <p>
                Her work explores the relationship between the universality of
                myth and recycling culture.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-evenly h-60 mx-4">
            <h1 className="text-4xl font-bold text-center break-words">
              Smooth textures feel cool on bare feet and skin.
            </h1>
            <p className="text-center">
              We create what feels just right since 2016.
            </p>
          </div>
          <StaticImage
            src="../images/our-storylong.jpeg"
            alt="artisan working with a sewing machine"
            className="max-h-[40vh] xl:max-h-[25vh] 2xl:max-h-[40vh]"
            imgStyle={{ objectPosition: "bottom 11% left 0px"}}
            aspectRatio={16 / 9}
          />
        </div>
      </main>
    </Layout>
  );
};

export default OurStory;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <SEO title="Our Story" description="Learn about our designers and their art" pathname="https://ohmycotton.gatsbyjs.io/our-story/"/>
    </>
  );
};
