import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { firestore } from "../../firebase/firebase";

const useUploadProfileImage = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(AuthContext);

  const handleUploadProfileImage = async (selectedFile) => {
    if (!selectedFile) {
      setError("Select file, please");
      return;
    }
    setIsUploading(true);
    setError(null);

    const storage = getStorage();
    const storageRef = ref(
      storage,
      `profileImages/${user.uid}/${selectedFile.name}`,
    );

    try {
      await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(storageRef);

      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, { profileImageURL: downloadURL });

      const updatedUser = { ...user, profileImageURL: downloadURL };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      console.log(error);
      setError("Uploading error");
    } finally {
      setIsUploading(false);
    }
  };

  return { isUploading, error, handleUploadProfileImage };
};

export default useUploadProfileImage;
