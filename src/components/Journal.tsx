import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Journal = () => {
  return (
    <div id="news" className="flex my-16 ml-10 overflow-auto">
      <div className="text-center flex flex-col w-52">
        <h1 className="text-3xl font-bold" >Journal</h1>
        <Link to="/#">All news</Link>
      </div>
      <div className="w-full flex gap-8 snap-x scroll-pl-6 overflow-x-auto">
        <div className="snap-start">
          <StaticImage src="../images/journal1.jpeg" alt="ohmycotton vogue cover" />
          <p>OHMYCOTTON on the cover of Vogue Thailand</p>
        </div>
        <div className="snap-start">
          <StaticImage src="../images/journal2.jpeg" alt="ohmycotton l'uomo cover" />
          <p>OHMYCOTTON on the cover of L'UOMO Vogue</p>
        </div>
        <div className="snap-start">
          <StaticImage
            src="../images/journal3.jpeg"
            alt="donate and win visit the atelier"
          />
          <p>Donate and win a day at our atelier</p>
        </div>
        <div className="snap-start">
          <StaticImage src="../images/journal1.jpeg" alt="ohmycotton vogue cover" />
          <p>OHMYCOTTON on the cover of Vogue Thailand</p>
        </div>
        <div className="snap-start">
          <StaticImage src="../images/journal2.jpeg" alt="ohmycotton l'uomo cover" />
          <p>OHMYCOTTON on the cover of L'UOMO Vogue</p>
        </div>
        <div className="snap-start">
          <StaticImage
            src="../images/journal3.jpeg"
            alt="donate and win visit the atelier"
          />
          <p>Donate and win a day at our atelier</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
