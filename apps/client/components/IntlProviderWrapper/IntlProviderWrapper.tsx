import { useMemo } from "react";
import { IntlProvider } from "react-intl";

type Props = {
  children: React.ReactNode;
  locale?: string;
};

import English from "../../lang/compiled/en.json";
import French from "../../lang/compiled/fr.json";

const IntlProviderWrapper = ({ children, locale }: Props) => {
  const messages = useMemo(() => {
    switch (locale) {
      case "en":
        return English;
      case "fr":
        return French;
      default:
        return French;
    }
  }, [locale]);
  return (
    <IntlProvider
      messages={messages}
      locale={locale ?? "fr"}
      defaultLocale="fr"
    >
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;
