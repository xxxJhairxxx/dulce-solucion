import { MetaSEO } from "@/interfaces/shared";
import Head from "next/head";
import { FC } from "react";

interface SeoEngineProps {
  seo: MetaSEO;
}

export const SeoEngine: FC<SeoEngineProps> = ({ seo }) => {
  if (!Object.keys(seo).length) return <></>;

  return (
    <Head>
      <title>{seo.metaTitle}</title>
      <link rel="canonical" href={seo.canonicalURL || ""}></link>

      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="title" content={seo.metaTitle} />
      <meta name="description" content={seo.metaDescription || ""} />
      <meta name="subject" content={seo.metaDescription || ""} />
      <meta name="keywords" content={seo.keywords || ""} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="AMG paragon" />
      <meta name="generator" content="visual studio" />
      <meta name="distribution" content="Global" />
      {/*  Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.SITEMAP_URL} />
      <meta property="og:title" content={seo.metaTitle} />
      <meta property="og:description" content={seo.metaDescription} />
      <meta property="og:image" content={seo.metaImage.url} />

      {/* <---->>> Meta Social Support <<<------> */}

      {/* {seo.metaSocial.length > 0 &&
        seo.metaSocial.map(({ description, image, socialNetwork, title }) => {
          const name = `${socialNetwork.toLocaleLowerCase()}:`;
          return (
            <>
              <meta name={`${name}title`} content={title} />
              <meta name={`${name}description`} content={description} />
              <meta name={`${name}image`} content={image.url} />
            </>
          );
        })} */}
    </Head>
  );
};
