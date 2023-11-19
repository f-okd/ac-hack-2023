import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import type { AppPage } from "@/types";
import { Layout } from "@/components/layout";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

interface MyAppProps extends AppProps {
  Component: AppProps["Component"] & AppPage;
}

export default function App({ Component, pageProps }: MyAppProps) {
  return (
    <div className={inter.className}>
      {Component.noLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </div>
  );
}
