import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { postMetadata } from "@/utils/types";

const getMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markDownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markDownPosts.map((file) => ({
    params: { post: file.replace(".md", "") },
  }));
  return slugs;
};

export async function getStaticPaths() {
  return {
    paths: getMetadata(),
    fallback: false, // can also be true or 'blocking'
  };
}

export function getStaticProps(context: any) {
  const { post } = context.params;
  const folder = "posts/";
  const file = `${folder}${post}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return { props: { post: matterResult.data, content: matterResult.content } };
}

const Post = ({ post, content }: { post: postMetadata; content: any }) => {
  return (
    <main className="flex flex-col items-center bg-stone-200">
      <h1 className="text-4xl font-semibold text-center my-12">{post.title}</h1>
      <article className="prose lg:prose-xl">
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
};
export default Post;
