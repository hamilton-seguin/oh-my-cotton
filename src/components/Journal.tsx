import React, { useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Draggable } from "./Draggable";

export const Journal = () => {
  const journalRef = useRef<HTMLDivElement>(null);
  return (
    <div
      id="news"
      className="flex my-16 overflow-hidden min-w-2xl relative w-full will-change-auto hover:will-change-scroll"
    >
      <div className="flex flex-col px-36 pb-72 justify-center">
        <h1 className="text-3xl font-bold pb-10 px-1">Journal</h1>
        <Link to="/#" className="text-end">
          All news
        </Link>
      </div>
      <Draggable>
        <div className="w-full flex gap-3 snap-x overflow-y-auto scroll-smooth" ref={journalRef}>
          <div className="snap-start shrink-0">
            <StaticImage
              src="../images/journal1.jpeg"
              alt="ohmycotton vogue cover"
              width={400}
              draggable={false}
            />
            <p className="font-light text-sm py-8 text-center">
              OHMYCOTTON on the cover of Vogue Thailand
            </p>
          </div>
          <div className="snap-start shrink-0">
            <StaticImage
              src="../images/journal2.jpeg"
              alt="ohmycotton l'uomo cover"
              width={400}
              draggable={false}
            />
            <p className="font-light text-sm py-8 text-center">
              OHMYCOTTON on the cover of L'UOMO Vogue
            </p>
          </div>
          <div className="snap-start shrink-0">
            <StaticImage
              src="../images/journal3.jpeg"
              alt="donate and win visit the atelier"
              width={400}
              draggable={false}
            />
            <p className="font-light text-sm py-8 text-center">
              Donate and win a day at journal atelier
            </p>
          </div>
          <div className="snap-start shrink-0">
            <StaticImage
              src="../images/journal1.jpeg"
              alt="ohmycotton vogue cover"
              width={400}
              draggable={false}
            />
            <p className="font-light text-sm py-8 text-center">
              OHMYCOTTON on the cover of Vogue Thailand
            </p>
          </div>
          <div className="snap-start shrink-0">
            <StaticImage
              src="../images/journal2.jpeg"
              alt="ohmycotton l'uomo cover"
              width={400}
              draggable={false}
            />
            <p className="font-light text-sm py-8 text-center">
              OHMYCOTTON on the cover of L'UOMO Vogue
            </p>
          </div>
          <div className="snap-start shrink-0">
            <StaticImage
              src="../images/journal3.jpeg"
              alt="donate and win visit the atelier"
              width={400}
              draggable={false}
            />
            <p className="font-light text-sm py-8 text-center">
              Donate and win a day at journal atelier
            </p>
          </div>
          <div className="snap-end shrink-0 flex items-center pb-80">
            <a href="#" className="text-center px-36" draggable={false}>
              View all News
            </a>
          </div>
        </div>
      </Draggable>
    </div>
  );
};
