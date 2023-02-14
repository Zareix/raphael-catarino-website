import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
};

const SEO = ({
  title = "Raphaël Catarino | Portfolio",
  description,
}: Props) => {
  const desc =
    "Portfolio de Raphaël Catarino. Retrouvez ici tous mes projets, mes experiences et compétences.";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc}></meta>
    </Head>
  );
};

export default SEO;
