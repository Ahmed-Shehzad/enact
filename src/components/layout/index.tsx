import Body from "@components/layout/body";
import Footer from "@components/layout/footer";
import Navbar from "@components/layout/nav";
import { Container } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { useIntl } from "react-intl";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { locales, route } = useRouter();
  const intl = useIntl();

  const page = route === "/" ? "home" : route.split("/")[1];
  const title = intl.formatMessage({ id: `$page.${page}.head.title` });
  const description = intl.formatMessage({
    id: `$page.${page}.head.description`,
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />

        {locales?.map((locale) => (
          <link key={locale} rel="icon" href="/favicon.ico" hrefLang={locale} />
        ))}
      </Head>

      <Navbar />

      <Container maxWidth="xl">
        <div style={{ marginBottom: 16 }}>
          <Body>{children}</Body>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
