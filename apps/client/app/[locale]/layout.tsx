import "../../styles/globals.css";
import axios from "axios";
import StyledComponentsRegistry from "../../lib/registry";
import PlausibleProvider from "next-plausible";
import { NextIntlClientProvider } from "next-intl/client";
import { notFound } from "next/navigation";

// Force ipv4
var http = require("http");
var agent = new http.Agent({ family: 4 });
axios.defaults.httpAgent = agent;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <PlausibleProvider domain="raphael-catarino.fr">
      <html>
        <head>
          <link rel="shortcut icon" href="/favicon.svg" />
        </head>
        <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </NextIntlClientProvider>
        </body>
      </html>
    </PlausibleProvider>
  );
}
