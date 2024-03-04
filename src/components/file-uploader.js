"use client";
import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const UploadForm = ({ onImageUploaded }) => {
  const [file, setFile] = useState(null);

  const onDropAccepted = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    console.log('acceptedFiles: ', acceptedFiles)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    console.log('formData', formData)

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log('response: ', response);
        console.log("File berhasil diunggah!");
        onImageUploaded(response.data)
      } else {
        console.error("Terjadi kesalahan saat mengunggah file.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDropAccepted });

  return (
    <form onSubmit={handleSubmit}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag & drop file di sini, atau klik untuk memilih file</p>
      </div>
      {file && <p>File yang diunggah: {file.name}</p>}
      <button type="submit" disabled={!file}>
        Unggah
      </button>
    </form>
  );
};

export default UploadForm;
