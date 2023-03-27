import Head from "next/head";
import { HomePage } from "@/ui/pages";
import fs from "fs";
import matter from "gray-matter";
import { postMetadata } from "@/utils/types";

const getMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markDownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markDownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      image: matterResult.data.image || "",
      tags: matterResult.data.tags.split(",") || [],
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export function getStaticProps(): { props: { metadata: postMetadata[] } } {
  const metadata = getMetadata();
  return { props: { metadata } };
}

export default function Home({ metadata }: { metadata: postMetadata[] }) {
  metadata.sort((a, b) => {
    const dateA: Date = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA < dateB ? 1 : -1;
  });
  return (
    <>
      <Head>
        <title>Medico General</title>
        <meta name="description" content="Medico general" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage homePosts={[metadata[0], metadata[1], metadata[2]]} />
    </>
  );
}
