import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";

const codeString = `export function generateMetadata() {
  return {
    title: "Meta Data Page",
    description: "This is a meta data page",
  };
}
`;

const page = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-12 capitalize">
        Dynamic Meta Data
      </h1>

      <p className="mt-7 text-zinc-700 font-medium px-3 md:px-28 text-center mb-7">
        <span className="text-cyan-700">generateMetadata</span> in Next.js
        dynamically generates page metadata (like title, description, and Open
        Graph tags) for SEO and social sharing. It ensures the correct metadata
        is available for each page, improving search engine optimization and
        social media previews.
      </p>

      <div className="w-fit mx-auto border-2  p-3">
        <SyntaxHighlighter language="javascript" style={coy} className="">
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default page;

export function generateMetadata() {
  return {
    title: "Meta Data Page",
    description: "This is a meta data page",
  };
}
