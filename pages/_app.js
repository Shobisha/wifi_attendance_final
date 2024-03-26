import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "@/styles/globals.css";
import "@/styles/homeStyles.css";
import "@/styles/contactStyle.css";
import "@/styles/blog.css";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
