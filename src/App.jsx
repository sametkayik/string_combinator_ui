import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
<<<<<<< HEAD
  return (
    <>
      <Navbar />
      <Form />
    </>
=======
  const baseUrl = "http://localhost:8080/api/texts";
  const [textList, setTextList] = useState([{ content: "" }]);
  const [mergedText, setMergedText] = useState("");

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
        setMergedText(res.data.mergedText);
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
      <button type="button" onClick={handleSubmit}>
        Merge Texts
      </button>
      <div>{mergedText}</div>
    </div>
>>>>>>> 6d3ec48b06d0687fda7a8cd0ae957e34b9156a11
  );
}

export default App;
