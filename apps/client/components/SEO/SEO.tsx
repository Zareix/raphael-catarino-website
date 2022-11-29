import Head from "next/head";

import { defineMessage, useIntl } from "react-intl";

const SEO = () => {
  const intl = useIntl();
  const description = defineMessage({
    id: "meta_description",
    defaultMessage:
      "Portfolio de Raphaël Catarino. Retrouvez ici tous mes projets, mes experiences et compétences.",
    description: "Meta description",
  });

  return (
    <Head>
      <meta name="description" content={intl.formatMessage(description)}></meta>
    </Head>
  );
};

export default SEO;
