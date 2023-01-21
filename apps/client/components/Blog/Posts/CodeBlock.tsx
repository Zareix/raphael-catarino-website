import { HTMLAttributes } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

const CodeBlock = (props: HTMLAttributes<HTMLPreElement>) => {
  const language = props.className?.split("-")[1];
  return (
    <pre className="relative mx-auto my-4 rounded-md bg-gray-900 pt-2 md:w-3/4">
      <div className="absolute top-2 left-2 flex gap-1 md:top-3 md:left-4">
        <div className="h-2 w-2 rounded-full bg-red-400 md:h-3 md:w-3"></div>
        <div className="aspect-square h-2 w-2 rounded-full bg-yellow-400 md:h-3 md:w-3"></div>
        <div className="aspect-square h-2 w-2 rounded-full bg-green-400 md:h-3 md:w-3"></div>
      </div>
      <div className="absolute top-2 right-4 text-gray-50">{language}</div>
      <SyntaxHighlighter
        language={language}
        style={theme}
        customStyle={{
          backgroundColor: "rgb(17 24 39)",
        }}
        wrapLines={false}
        showLineNumbers={language !== "bash"}
      >
        {props.children?.toString() ?? ""}
      </SyntaxHighlighter>
    </pre>
  );
};

export default CodeBlock;
