import { postMetadata } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }: { posts: postMetadata[] }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conoce Nuestro Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Mejora tu vida diaria con los consejos de médicos profesionales
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full flex justify-center">
                <Image
                  src={post.image}
                  alt="post imagen"
                  className="object-cover h-[300px] w-[300px] shrink"
                  height={300}
                  width={300}
                />
                <div className="absolute inset-0 rounded-2xl" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <ul className="flex gap-4">
                    {post.tags &&
                      post.tags.map((tag) => (
                        <li key={`${post.title}-${tag}`}>{tag}</li>
                      ))}
                  </ul>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {post.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
