import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
/**
 * Used to initialize each page. Component is the active page
 */
function App({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </SessionProvider>
  );
}

export default App;
