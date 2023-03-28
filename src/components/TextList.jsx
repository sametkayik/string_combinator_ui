import React from "react";
import TextInput from "./TextInput";

const TextList = ({
  textList,
  handleTextChange,
  handleAddText,
  handleRemoveText,
  handleClearText,
  setRouteUrl,
}) => {
  return (
    <div>
      <h3>Text Inputs</h3>
      {textList.map((item, index) => (
        <TextInput
          key={index}
          content={item.content}
          handleTextChange={handleTextChange}
          handleRemoveText={handleRemoveText}
          index={index}
          hasRemoveButton={textList.length > 2}
        />
      ))}
      <div className="buttons">
        <button
          className="add-text-button"
          type="button"
          onClick={handleAddText}
        >
          +
        </button>
        <button
          id="linear-merge-button"
          className="submit-button"
          type="submit"
          onClick={() => setRouteUrl("/mergeText")}
        >
          Linear Merge Texts
        </button>
        <button
          id="nonlinear-merge-button"
          className="submit-button"
          type="submit"
          onClick={() => setRouteUrl("/mergeTextNonlinear")}
        >
          Nonlinear Merge Texts
        </button>

        <button
          className="clear-button"
          type="button"
          onClick={handleClearText}
        >
          Clear Form
        </button>
      </div>
    </div>
  );
};

export default TextList;
