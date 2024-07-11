import { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [createPostDescription, setCreatePostDescription] = useState(false);

  return (
    <PostContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
        setCreatePostDescription,
        createPostDescription,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
