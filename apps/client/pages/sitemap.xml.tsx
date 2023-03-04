import { queryStrapiAPIPlural } from "../helpers/strapi";
import { StrapiBlogPost } from "../models/strapi/StrapiBlogPost";

function generateSiteMap(slugsFR: string[], slugsEN: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://raphael-catarino.fr/fr</loc>
     </url>
     <url>
       <loc>https://raphael-catarino.fr/en</loc>
     </url>
     <url>
       <loc>https://raphael-catarino.fr/fr/blog</loc>
     </url>
     <url>
       <loc>https://raphael-catarino.fr/en/blog</loc>
     </url>
     ${slugsFR
       .map((slug) => {
         return `
       <url>
           <loc>${`https://raphael-catarino.fr/fr/blog/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
       ${slugsEN
         .map((slug) => {
           return `
       <url>
           <loc>${`https://raphael-catarino.fr/en/blog/${slug}`}</loc>
       </url>
     `;
         })
         .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const postsParamsFR = (
    await queryStrapiAPIPlural<StrapiBlogPost>("fr", "blog-posts")
  ).data.map((post) => ({
    ...post.attributes,
    id: post.id,
  }));
  const postsParamsEN = (
    await queryStrapiAPIPlural<StrapiBlogPost>("en", "blog-posts")
  ).data.map((post) => ({
    ...post.attributes,
    id: post.id,
  }));

  const sitemap = generateSiteMap(
    postsParamsFR.map((params) => params.slug),
    postsParamsEN.map((params) => params.slug)
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
