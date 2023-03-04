import { Metadata } from "next";

const generateSEO = (
  locale = "en",
  title = "Portfolio",
  description = "Raphaël Catarino's Portfolio. You can find here my experiences, skills, projects, blog and contact informations.",
  type: "website" | "article" = "website",
  publishedTime = "2023-03-04T00:00:00.000Z"
): Metadata => {
  return {
    title,
    description,
    generator: "Next.js",
    keywords: [
      "Next.js",
      "React",
      "JavaScript",
      "Portfolio",
      "Raphaël Catarino",
      "Engineer",
    ],
    authors: [{ name: "Raphaël Catarino" }],
    creator: "Raphaël Catarino",
    publisher: "Raphaël Catarino",
    alternates: {
      canonical: "https://raphael-catarino.fr",
      languages: {
        "en-US": "https://raphael-catarino.fr/en",
        "fr-FR": "https://raphael-catarino.fr/fr",
      },
    },
    openGraph: {
      title,
      description,
      url: "https://raphael-catarino.fr",
      siteName: "Portfolio",
      images: [
        {
          url:
            "https://" +
            process.env.NEXT_PUBLIC_S3_BUCKET_HOST +
            "/preview.png",
          width: 1280,
          height: 800,
        },
      ],
      locale,
      type,
      publishedTime,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@zareix",
      images: [
        "https://" + process.env.NEXT_PUBLIC_S3_BUCKET_HOST + "/preview.png",
      ],
    },
  };
};

export default generateSEO;
