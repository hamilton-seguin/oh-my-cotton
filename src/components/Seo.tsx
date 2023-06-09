import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

type SEOProps ={
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl: siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👘</text></svg>" />
      {children}
    </>
  )
}