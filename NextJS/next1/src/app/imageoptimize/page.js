import React from "react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coy,
  dracula,
  funky,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const page = () => {
  const codeString = `
  const nextConfig = {
    images: {
      domains: ["images.unsplash.com"],
    },
  };
  `;

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-12 capitalize">
        Image Optimization
      </h1>

      <div className="px-20 mt-20 w-full md:w-[80%] mx-auto flex flex-wrap justify-between items-center">
        <div>
          <h2 className="mb-1 text-black font-semibold">Imported Image</h2>
          <Image
            src="/img1.jpg"
            width={300}
            height={700}
            alt="Imported image"
          />
        </div>

        <div>
          <h2 className="mb-1 text-black font-semibold">External src Image</h2>
          <p className="mb-1">
            This imgs are not configured, so add the domain in{" "}
            <span className="text-blue-500">next.config.mjs</span>
          </p>

          <SyntaxHighlighter language="javascript" style={coy}>
            {codeString}
          </SyntaxHighlighter>

          <Image
            src="https://images.unsplash.com/photo-1731466450638-959a6f0d1514?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={600}
            alt="External source image"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
