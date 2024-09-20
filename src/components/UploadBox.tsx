// import React, { useState } from "react";
import { FaFile, FaCheckCircle } from "react-icons/fa"; // Import icons
import '../assets/UploadBox.css';

// Define the type for the job object
interface Job {
  _id: string;
  title: string;
  keywords: string[];
}

interface UploadBoxProps {
  setSearchedJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

const UploadBox: React.FC<UploadBoxProps> = ({ setSearchedJobs }) => {
  const [file, setFile] = useState<File | null>(null); // State to hold the file
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false); // Upload success state
  const [error, setError] = useState<string | null>(null); // Error state for file upload errors

  // Handle selected files
  const handleFile = (selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles.length > 1) {
      setError("Only one file can be uploaded at a time.");
      setFile(null);
    } else if (selectedFiles) {
      setFile(selectedFiles[0]); // Set the single file
      setError(null); // Reset error state
      setUploadSuccess(false); // Reset success state
    }
  };

  // Handle form submission for file upload
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file); // Use 'file' instead of 'files'

      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/upload', {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const text = await response.text();
          console.error("Error response from server:", text);
          throw new Error(text);
        }

        const data = await response.json();
        console.log("File uploaded successfully:", data);
        setSearchedJobs(data.searchedJobs);
        setUploadSuccess(true); // Set success state
      } catch (error) {
        console.error("Error uploading file:", error);
        setError("Error uploading file. Please try again."); // Set error state
      }
    }
  };

  // Drop event handler
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFile(event.dataTransfer.files); // Get dropped files
  };

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Allow dropping by preventing default behavior
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        id="drop_zone"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        className={file ? "has-file" : ""}
      >
        <label htmlFor="fileInput">
          {file ? (
            <FaFile className="file-icon" />
          ) : (
            "Drag & drop a file here or click to select"
          )}
        </label>
        <input
          type="file"
          id="fileInput"
          name="file"
          onChange={(event) => handleFile(event.target.files)}
        />
        {uploadSuccess && (
          <FaCheckCircle className="success-icon" />
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="upload-btn" disabled={!file}>
        Upload
      </button>
    </form>
  );
};

export default UploadBox;
