import React, { useState } from "react";

const Fileupload = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target.elements.avatar.files[0];
    if (!file) {
      setMessage("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("File uploaded successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error uploading file");
      });
  };

  return (
    <div className="Upload-file-drive">
      <form onSubmit={handleSubmit}>
        <input type="file" name="avatar" />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Fileupload;
