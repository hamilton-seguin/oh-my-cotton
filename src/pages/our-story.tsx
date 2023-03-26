import React from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { Breadcrumbs } from "../components/Breadcrumbs";

const OurStory = () => {
  return (
    <Layout>
      <main>
        <Breadcrumbs url="" text="our story" />
        <div className="flex justify-between relative right-0 max-w-screen-2xl mt-10 ml-auto">
          <div className="flex flex-col max-w-md mx-auto px-10 justify-evenly text-justify leading-7">
            <h1 className="text-4xl font-bold"> About the designers </h1>
            <h2 className="font-bold text-2xl">Candelaria Castano</h2>
            <p>
              Her work explores the relationship between gender politics and
              romance tourism. With influences as diverse as Machiavelli and Roy
              Lichtenstein, new synergies are generated from both traditional
              and modern meanings.
            </p>
            <p>
              Ever since she was a child she has been fascinated by the
              theoretical limits of meaning. What starts out as yearning soon
              becomes debased into a hegemony of greed, leaving only a sense of
              nihilism and the prospect of a new synthesis.
            </p>
            <p>
              As shifting phenomena become clarified through frantic and
              repetitive practice, the viewer is left with a hymn to the
              possibilities of our condition.
            </p>
          </div>
          <StaticImage
            src="../images/designer1.jpeg"
            alt="ohmycotton designer Candelaria Castano"
            aspectRatio={1 / 1}
            className="max-w-[49.5%]"
            placeholder={"none"}
          />
        </div>
        <div className="flex justify-between relative left-0 max-w-screen-2xl my-10 mr-auto">
          <StaticImage
            src="../images/designer3.jpeg"
            alt="ohmycotton designer Miyashiro Aiko"
            aspectRatio={1 / 1}
            className="max-w-[49.5%]"
          />
          <div className="flex flex-col max-w-md mx-auto px-10 justify-evenly text-justify leading-7">
            <h2 className="text-2xl font-bold">Miyashiro Aiko</h2>
            <p>
              Hiking addict, self-starter, band member, Japanese fashion
              designer. Acting at the junction of simplicity and mathematics to
              save the world from bad design. Spanish award-winning designer
              raised and graduated in Tokyo at the School of Fashion & currently
              living in New York City.
            </p>
            <p>
              Ever since she was a postgraduate she has been fascinated by the
              ephemeral nature of the universe.
            </p>
            <p>
              Her work explores the relationship between the universality of
              myth and recycling culture.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-evenly h-60">
            <h1 className="text-4xl font-bold text-center">
              Smooth textures feel cool on bare feet and skin.
            </h1>
            <p className="text-center">
              We create what feels just right since 2016.
            </p>
          </div>
          <StaticImage
            src="../images/our-story-long.jpeg"
            alt="artisan working with a sewing machine"
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
      <title>Our Story</title>
      <body className="2xl:mx-auto max-w-screen-2xl" />
    </>
  );
};
