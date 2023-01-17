import "../styles/globals.css";

import type { AppProps } from "next/app";
import axios from "axios";

// Force ipv4
var http = require("http");
var agent = new http.Agent({ family: 4 });
axios.defaults.httpAgent = agent;

function MyApp({ Component, pageProps }: AppProps) {
  return;
  <Component {...pageProps} />;
}

export default MyApp;
