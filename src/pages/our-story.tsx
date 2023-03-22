import React from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const OurStory = () => {
  return (
    <Layout>
      <main>
        <div>BREADCRUMBS</div>
        <div className="flex justify-between mt-10">
          <div className="flex flex-col max-w-md mx-auto px-5 justify-evenly">
            <h1 className="text-3xl font-bold"> About the designers </h1>
            <h2 className="font-bold">Candelaria Castano</h2>
            <p>
              Her work explores the relationship between gender politics and
              romance tourism. With influences as diverse as Machiavelli and Roy
              Lichtenstein, new synergies are generated from both traditional
              and modern meanings. Ever since she was a child she has been
              fascinated by the theoretical limits of meaning. What starts out
              as yearning soon becomes debased into a hegemony of greed, leaving
              only a sense of nihilism and the prospect of a new synthesis. As
              shifting phenomena become clarified through frantic and repetitive
              practice, the viewer is left with a hymn to the possibilities of
              our condition.
            </p>
          </div>
          <StaticImage
            src="../images/designer1.jpeg"
            alt="ohmycotton designer Candelaria Castano"
            aspectRatio={1 / 1}
            width={710}
          />
        </div>
        <div className="flex justify-between mt-10">
          <StaticImage
            src="../images/designer2.jpeg"
            alt="ohmycotton designer Miyashiro Aiko"
            aspectRatio={1 / 1}
            width={710}
          />
          <div className="flex flex-col max-w-md mx-auto px-5 justify-evenly">
            <h2 className="text-3xl font-bold">Miyashiro Aiko</h2>
            <p>
              Hiking addict, self-starter, band member, Japanese fashion
              designer. Acting at the junction of simplicity and mathematics to
              save the world from bad design. Spanish award-winning designer
              raised and graduated in Tokyo at the School of Fashion & currently
              living in New York City. Ever since she was a postgraduate she has
              been fascinated by the ephemeral nature of the universe. Her work
              explores the relationship between the universality of myth and
              recycling culture.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default OurStory;

export const Head: HeadFC = () => {
  return (
    <>
      <body className="smooth-scroll" />
      <title>Our Story</title>
    </>
  );
};
