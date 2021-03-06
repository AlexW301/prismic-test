import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// pages/index.js

import { PrismicText, PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
// pages/index.js, top of the file
import { components } from "../slices";

export default function Home({ page, pages }) {
  console.log(pages);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <PrismicText field={page.data.greeting} />
        </h1>

        <div className={styles.description}>
          <PrismicRichText field={page.data.description} />
        </div>

        <SliceZone slices={page.data.slices} components={components} />
      </main>

      {pages.map((page) => {
        if (page.uid === "home") {
          return
        }
        return (
          <a key={page.uid} href={`/posts/${page.uid}`}>
              {page.data.greeting[0].text}
           </a> 
        )
      })}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// pages/index.js

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID("page", "home");

   // Page documents from the CMS.
   const pages = await client.getAllByType("page");

  // Pass the homepage as prop to our page.
  return {
    props: { page, pages },
  };
}
