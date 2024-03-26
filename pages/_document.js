import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://wp.wifiattendance.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css"
        />
        <link
          rel="stylesheet"
          href="https://wp.wifiattendance.com/wp-content/uploads/elementor/css/post-6.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://wp.wifiattendance.com/wp-content/uploads/elementor/css/post-2327.css"
          media="all"
        />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
