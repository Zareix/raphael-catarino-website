import Head from "next/head";

import { defineMessage, useIntl } from "react-intl";

type Props = {
  title?: string;
  description?: string;
};

const SEO = ({
  title = "Raphaël Catarino | Portfolio",
  description,
}: Props) => {
  const intl = useIntl();
  const desc =
    description ??
    intl.formatMessage(
      defineMessage({
        id: "meta_description",
        defaultMessage:
          "Portfolio de Raphaël Catarino. Retrouvez ici tous mes projets, mes experiences et compétences.",
        description: "Meta description",
      })
    );

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc}></meta>
    </Head>
  );
};

export default SEO;
