"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUploader = () => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // const response = await axios.post("/api/upload", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      //
      // console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Specify the accepted file types
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #ccc",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      <p>Drag and drop a file here, or click to select a file.</p>
    </div>
  );
};

export default FileUploader;
