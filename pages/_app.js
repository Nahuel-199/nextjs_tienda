import Layout from "nahuel/components/Layout";
import { DataProvider } from "nahuel/store/GlobalState";
import "nahuel/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}
