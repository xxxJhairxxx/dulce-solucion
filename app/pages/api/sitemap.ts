import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import fs from "fs/promises";
import path from "path";

export const generateSitemap = async () => {
  try {
    const baseUrl = process.env.SITEMAP_URL;
    // Obtener las páginas estáticas desde la API
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/multilanguage?populate=deep`
    );
    const menu = response.data.data.menu;

    const staticUrls = menu
      .filter(
        (menuItem: any) =>
          menuItem.label === "Inicio" || menuItem.label === "Contáctanos"
      )
      .map((menuItem: { url: string }) => ({
        url: menuItem.url.startsWith("/")
          ? menuItem.url.slice(1)
          : menuItem.url,
        changefreq: "daily",
        priority: 0.5,
      }));

    const allUrls = [...staticUrls];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map(
          (page) =>
            `<url>
              <loc>${baseUrl}${page.url}</loc>
            </url>`
        )
        .join("\n")}
    </urlset>`;

    const publicPath = path.join(process.cwd(), "public");
    await fs.writeFile(path.join(publicPath, "sitemap.xml"), sitemap, "utf-8");
  } catch (error) {
    console.error("Error al generar el sitemap:", error);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await generateSitemap();
    res.status(200).end();
  } catch (error) {
    console.error("Error al generar el sitemap:", error);
    res.status(500).end();
  }
}
