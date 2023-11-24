import React from "react";

const VideoUploader: React.FC = () => {
  const handleUpload = async () => {
    try {
      const response = await fetch("api/video", {
        method: "POST",
      });

      if (response.ok) {
        console.log("Videos uploaded successfully");
      } else {
        console.error("Failed to upload videos");
      }
    } catch (error) {
      console.error("Error uploading videos:", error);
    }
  };

  return (
    <div>
      <h2>Video Uploader</h2>
      <button onClick={handleUpload}>Upload Videos</button>
    </div>
  );
};

export default VideoUploader;