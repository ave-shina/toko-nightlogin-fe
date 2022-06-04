// Import Layout
import Layout from "../components/Layout";

// This MyApp Function is for
function MyApp({ Component, pageProps }) {
  // getLayout is used for implement the Layout
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  // Call the getLayout component which has the entire page inside
  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
