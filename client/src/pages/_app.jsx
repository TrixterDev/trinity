import { Providers } from "@/context";
import localFont from "next/font/local";
import "../styles/globals.sass";
import Layout from "./components/Layout";

const fontsss = localFont({
  src: [
    {
      path: "../fonts/Stolzl-Light.ttf",
      weight: "300",
    },
    {
      path: "../fonts/Stolzl-Book.ttf",
      weight: "350",
    },
    {
      path: "../fonts/Stolzl-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Stolzl-Thin.ttf",
      weight: "425",
    },
    {
      path: "../fonts/Stolzl-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Stolzl-Bold.ttf",
      weight: "700",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <div className={fontsss.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Providers>
  );
}
