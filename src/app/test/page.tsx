"use client";

import React, { useState } from "react";

const LinkInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  // Regex to validate a URL
  const isValidURL = (str: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return !!pattern.test(str);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    if (isValidURL(inputValue)) {
      setIsEditing(false);
    }
  };

  const handleLinkClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <input type="text" value={inputValue} onChange={handleInputChange} onBlur={handleBlur} placeholder="Enter text or a URL" />
      ) : (
        <a href={inputValue} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
          {inputValue}
        </a>
      )}
    </div>
  );
};

export default LinkInput;
