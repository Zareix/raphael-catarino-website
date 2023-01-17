import "../styles/globals.css";

import type { AppProps } from "next/app";
import axios from "axios";
import PlausibleProvider from "next-plausible";

// Force ipv4
var http = require("http");
var agent = new http.Agent({ family: 4 });
axios.defaults.httpAgent = agent;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="plausible.raphael-catarino.fr">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
