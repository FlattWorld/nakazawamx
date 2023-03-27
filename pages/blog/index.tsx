import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import Image from "next/image";
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

export default function Blog({ metadata }: { metadata: postMetadata[] }) {
  if (!metadata)
    return <h1 className="text-3xl text-center">No hay publicaciones</h1>;
  metadata.sort((a, b) => {
    const dateA: Date = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA < dateB ? 1 : -1;
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bienvenid@ al Blog
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aquí encontrarás información útil e interesante que he recolectado
            en todos mis años de experiencia en el área de la salud.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {metadata.map(
            ({ slug, title, subtitle, date, image, tags }: postMetadata) => (
              <article
                key={slug}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full flex justify-center">
                  <Image
                    src={image}
                    alt="post imagen"
                    className="object-cover h-[300px] w-[300px] shrink"
                    height={300}
                    width={300}
                  />
                  <div className="absolute inset-0 rounded-2xl" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={date} className="text-gray-500">
                      {date}
                    </time>
                    {/* <Link
                    href={`/blog/${slug}`}
                    className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                  > */}
                    <ul className="flex gap-4">
                      {tags &&
                        tags.map((tag) => (
                          <li key={`${title}-${tag}`}>{tag}</li>
                        ))}
                    </ul>
                    {/* </Link> */}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${slug}`}>
                        <span className="absolute inset-0" />
                        {title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </div>
  );
}
