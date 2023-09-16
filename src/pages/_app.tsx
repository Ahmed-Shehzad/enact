import Layout from "@components/layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import resources from "@i18n";
import { LinearProgress } from "@mui/joy";
import { Typography } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer =
      counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : counter;
    if (counter === 0) {
      setIsLoading(false);
    }
    return () => clearInterval(timer);
  }, [counter]);

  const language = locale ?? "en";
  return (
    <IntlProvider locale={language} messages={resources.locale[language]}>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "50%",
          }}
        >
          <LinearProgress />
          <Typography variant="body1" align="center">
            Loading...
          </Typography>
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </IntlProvider>
  );
}
