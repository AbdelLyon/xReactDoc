import Document, { Html, Head, Main, NextScript } from "next/document";
import { SkipNavLink } from "nextra-theme-docs";

class AuthDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AuthDocument;
