import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto font-sans">
        <Navbar />
        <main className="pb-32">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
