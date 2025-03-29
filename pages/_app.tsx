import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { Provider } from "@/components/ui/provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </Provider>

  );
}
