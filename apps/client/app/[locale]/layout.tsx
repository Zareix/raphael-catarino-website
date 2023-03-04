import "@styles/globals.css";
import axios from "axios";
import StyledComponentsRegistry from "../../lib/registry";
import PlausibleProvider from "next-plausible";
import { NextIntlClientProvider } from "next-intl/client";
import { notFound } from "next/navigation";
import { Inter as BaseFont, IBM_Plex_Mono as MonoFont } from "next/font/google";
import { Metadata } from "next";
import generateSEO from "@components/SEO";

const base = BaseFont({
  variable: "--font-base",
  display: "swap",
  subsets: ["latin"],
});

const mono = MonoFont({
  variable: "--font-mono",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Force ipv4
var http = require("http");
var agent = new http.Agent({ family: 4 });
axios.defaults.httpAgent = agent;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const lang = (await import(`../../lang/${params.locale}.json`)).default;
  return generateSEO(
    params.locale,
    lang.seo.home.title,
    lang.seo.home.description
  );
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
    messages = (await import(`../../lang/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <PlausibleProvider domain="raphael-catarino.fr">
      <html className={`${base.variable} ${mono.variable}`}>
        <head>
          <link rel="shortcut icon" href="/favicon.svg" />
        </head>
        <body className={base.className}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </NextIntlClientProvider>
        </body>
      </html>
    </PlausibleProvider>
  );
}
