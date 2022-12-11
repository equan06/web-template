import "../styles/globals.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
/**
 * Used to initialize each page. Component is the active page
 */
function App({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}

export default App;
