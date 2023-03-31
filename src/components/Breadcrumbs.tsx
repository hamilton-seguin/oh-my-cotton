import { Link } from "gatsby";
import React from "react";

type BreadcrumbsProps = {
  text: string;
  url?: string;
  text2?: string;
};

export const Breadcrumbs = ({ url, text, text2 }: BreadcrumbsProps) => {
  return (
    <>
      <div className="mt-12 mb-4 max-w-[50vw]">
        <div className="uppercase px-4 lg:px-16 xl:px-[8%] text-base lg:text-sm ">
          <Link to="/">HOME</Link>
          {url && (
            <Link to={`/${url}`}>
              {" / "}
              {text2}
            </Link>
          )}
          {" / "}
          {text}
        </div>
      </div>
    </>
  );
};
