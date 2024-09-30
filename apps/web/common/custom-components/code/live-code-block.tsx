import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

type Example = {
  code: string;
  scope?: Record<string, any>;
};

type LiveCodeBlockProps = {
  example: Example;
};

export default function LiveCodeBlock({ example }: LiveCodeBlockProps) {
  return (
    <LiveProvider code={example.code} scope={example.scope}>
      <div style={{ marginBottom: "1rem" }}>
        <LiveEditor />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <LiveError />
      </div>
      <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
        <LivePreview />
      </div>
    </LiveProvider>
  );
}
