import React, { useState } from "react";
import axios from "axios";

function App() {
  const baseUrl = "http://localhost:8080/api/texts";
  const [textList, setTextList] = useState([{ content: "" }]);

  const handleTextChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...textList];
    list[index][name] = value;
    setTextList(list);
  };

  const handleAddText = () => {
    setTextList([...textList, { content: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { texts: textList.map((item) => item.content) };
    axios
      .post(baseUrl, requestData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {textList.map((item, index) => (
          <div key={index}>
            <label htmlFor={`content-${index}`}>Text {index + 1}</label>
            <input
              type="text"
              name="content"
              id={`content-${index}`}
              value={item.content}
              onChange={(e) => handleTextChange(e, index)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddText}>
          +
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
