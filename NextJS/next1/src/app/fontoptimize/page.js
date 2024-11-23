import React from "react";
import { Roboto } from "next/font/google";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";

// Create a Roboto font instance with options
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "cyrillic"], // Use "latin" instead of "serif" as it's the correct subset
  display: "swap",
});

const codeString = `
//import font
import { Roboto } from "next/font/google";

// Create a Roboto font instance with options
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

//use font
<h1 className={roboto.className}>This is Roboto</h1>;
`;

const Page = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-12 capitalize">
        Font Optimization
      </h1>

      <div className="mt-6 w-full mx-auto text-center">
        <h1>Normal Font (CSS Import)</h1>
        <h1>This is Montserrat</h1>

        <br />
        <br />

        <h1 className={`${roboto.className} font-extrabold`}>
          Font using Next.js (Google Font Import)
        </h1>
        <h1 className={`${roboto.className}`}>This is Roboto</h1>

        <div className=" bg-black text-white rounded-md mt-10 w-fit mx-auto">
          <SyntaxHighlighter
            language="javascript"
            style={coy}
            className="border-2 py-2 p-5"
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Page;
