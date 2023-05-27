import { DUMMY_MARKDOWN } from "@/components/Blogs/constants";
import React from "react";
import { remark } from "remark";
import html from "remark-html";
import styles from "../../components/Blogs/Slug/styles.module.scss";
const BlogDetail = ({ contentHtml }) => {
  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">
          Exciting Upcoming Technologies: A Glimpse into the Future
        </h1>
        <p className="text-gray-500 mb-4">Published on May 27, 2023</p>
        <div
          className={styles.blog_content}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        {/* Author section */}
        <div className="bg-gray-100 py-8">
          <div className="flex items-center justify-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="/images/author.jpg"
              alt="Author Avatar"
            />
            <div>
              <h3 className="text-xl font-bold">Vishal Kumar</h3>
              <p className="text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

export const getStaticProps = async (props) => {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(DUMMY_MARKDOWN);
  const contentHtml = processedContent.toString();
  return {
    props: {
      contentHtml,
    },
  };
};
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slugs: "exciting-upcoming-technologies-a-glimpse-into-the-future",
        },
      },
    ],
    fallback: false,
  };
}
