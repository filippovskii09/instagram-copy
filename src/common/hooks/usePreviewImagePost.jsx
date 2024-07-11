import React, { useState } from "react";

const usePreviewImagePost = () => {
  const [selectedPostImage, setSelectedPostImage] = useState(null);
  const maxFileSize = 2 * 1024 * 1024; // in bytes 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSize) {
        setSelectedPostImage(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPostImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedPostImage(null);
    }
  };

  return { selectedPostImage, setSelectedPostImage, handleImageChange };
};

export default usePreviewImagePost;
