import Head from "next/head";
import React, { ReactNode, FC } from "react";
import { Navbar } from "../UI";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Sebastian Chavez" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta
          property="og:image"
          content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
