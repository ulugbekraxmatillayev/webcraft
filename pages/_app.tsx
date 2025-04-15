import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import { Provider } from "@/components/ui/provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider attribute="class">
      <Head>
        <title>WebCraft - Internet marketing xizmati</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
      
    </Provider>

  );
}
