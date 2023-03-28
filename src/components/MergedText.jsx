import React from "react";

const MergedText = ({ mergedText, duration, saved, handleSaveText }) => {
  return (
    <div className="merged-text">
      <h3>Merged Text</h3>
      <p>{mergedText}</p>
      <div className="merged-text-bottom">
        {mergedText && (
          <button
            className="save-button"
            type="button"
            onClick={handleSaveText}
          >
            Save Text
          </button>
        )}
        {saved && <span className="saved-span">Text saved successfully!</span>}
        {duration > 0 && (
          <span className="duration-span">Duration: {duration} seconds</span>
        )}
      </div>
    </div>
  );
};

export default MergedText;
