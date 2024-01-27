import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ content, getContent }) => {
  return (
    <div className="container">
      <ReactQuill theme="snow" value={content ?? ""} onChange={getContent} />
    </div>
  );
};

export default TextEditor;