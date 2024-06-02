import React, { useState } from "react";
import PhotoConvertOptions from "./PhotoConvertOptions";
import UploadFiles from "./UploadFiles";
import axios from "axios";

const PhotoConvert = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [selectedFormat, setSelectedFormat] = useState("png");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.length) {
      setSelectedFiles(files);
    }
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFormat(event.target.value);
  };

  const downloadFile = (filename: string, fileData: number[]) => {
    const blob = new Blob([new Uint8Array(fileData)], {
      type: "application/octet-stream",
    });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = filename;
    downloadLink.click();
  };

  const downloadFiles = (fileList: { fileName: string; data: any }[]) => {
    fileList.forEach((file) => downloadFile(file.fileName, file.data.data));
  };

  const handleSubmit = async () => {
    if (!selectedFiles) return;

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    formData.append("format", selectedFormat);
    console.log(selectedFiles, selectedFormat);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/image/convert`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      downloadFiles(response.data.result);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center space-x-4">
        <UploadFiles
          acceptFileType=".png, .jpg, .jpeg, .webp"
          handleFileUpload={handleFileUpload}
        />
        <PhotoConvertOptions
          targetFormat={selectedFormat}
          handleFormatChange={handleFormatChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 border-2 border-solid border-blue-200 rounded-lg px-4 py-2 bg-blue-500 text-white"
      >
        Convert
      </button>
    </div>
  );
};

export default PhotoConvert;
