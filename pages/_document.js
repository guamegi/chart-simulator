import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#3182CE" name="theme-color" />
          <meta content="#3182CE" name="msapplication-TileColor" />
          <meta name="description" content="Generated by create next app" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
