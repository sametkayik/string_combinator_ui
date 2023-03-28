import React from "react";

const TextInput = ({
  content,
  handleTextChange,
  handleRemoveText,
  index,
  hasRemoveButton,
}) => {
  return (
    <div className="text-inputs">
      <input
        type="text"
        name="content"
        id={`content-${index}`}
        value={content}
        placeholder="Enter text"
        required={true}
        onChange={(e) => handleTextChange(e, index)}
      />
      {hasRemoveButton && (
        <button
          className="remove-text-button"
          type="button"
          onClick={() => handleRemoveText(index)}
        >
          -
        </button>
      )}
    </div>
  );
};

export default TextInput;
