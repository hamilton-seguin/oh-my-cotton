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
      <div className="uppercase ml-4 mt-12 mb-4 lg:ml-[10%] text-base lg:text-sm">
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
    </>
  );
};
