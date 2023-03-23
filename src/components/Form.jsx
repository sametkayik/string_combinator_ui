import React, { useState } from "react";
import axios from "axios";
import "../../src/index.css";

const Form = () => {
  const baseUrl = "http://localhost:8080/api/texts";
  const [textList, setTextList] = useState([{ content: "" }]);
  const [mergedText, setMergedText] = useState("");
  const [duration, setDuration] = useState(0.0);

  const handleTextChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...textList];
    list[index][name] = value;
    setTextList(list);
  };

  const handleAddText = () => {
    setTextList([...textList, { content: "" }]);
  };

  const handleRemoveText = (index) => {
    const list = [...textList];
    list.splice(index, 1);
    setTextList(list);
  };

  const handleClearText = () => {
    setTextList([{ content: "" }]);
    setMergedText("");
    setDuration(0.0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { texts: textList.map((item) => item.content) };
    axios
      .post(baseUrl, requestData)
      .then((res) => {
        console.log(res.data);
        setMergedText(res.data.mergedText);
        setDuration(res.data.durationTime);
      })
      .catch((err) => {
        console.log(err);
      });
    setMergedText("");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Text Inputs</h3>
        {textList.map((item, index) => (
          <div className="text-inputs" key={index}>
            <label htmlFor={`content-${index}`}></label>
            <input
              type="text"
              name="content"
              id={`content-${index}`}
              value={item.content}
              placeholder="Enter text"
              required={true}
              onChange={(e) => handleTextChange(e, index)}
            />
            {textList.length > 1 && (
              <button
                className="remove-text-button"
                type="button"
                onClick={() => handleRemoveText(index)}
              >
                -
              </button>
            )}
          </div>
        ))}
        <div className="buttons">
          <button
            className="add-text-button"
            type="button"
            onClick={handleAddText}
          >
            +
          </button>
          <button className="submit-button" type="submit">
            Merge Texts
          </button>
          <button
            className="clear-button"
            type="button"
            onClick={handleClearText}
          >
            Clear Form
          </button>
        </div>
      </form>
      <div className="merged-text">
        <h3>Merged Text</h3>
        <p>{mergedText}</p>
        {duration > 0 && <span>Duration: {duration} seconds</span>}
      </div>
    </div>
  );
};

export default Form;
