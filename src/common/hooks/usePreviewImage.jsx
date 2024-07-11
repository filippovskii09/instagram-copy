import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const usePreviewImg = () => {
  const { setSelectedFile } = useContext(PostContext);
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
    }
  };

  return { handleImageChange, setSelectedFile };
};

export default usePreviewImg;
