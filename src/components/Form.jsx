import React, { useState } from "react";
import axios from "axios";
import TextList from "./TextList";
import MergedText from "./MergedText";

const Form = () => {
  const baseUrl = "http://localhost:8080/api";
  const [textList, setTextList] = useState([{ content: "" }, { content: "" }]);
  const [mergedText, setMergedText] = useState("");
  const [duration, setDuration] = useState(0.0);
  const [saved, setSaved] = useState(false);
  const [routeUrl, setRouteUrl] = useState("");

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
    setTextList([{ content: "" }, { content: "" }]);
    setMergedText("");
    setDuration(0.0);
    setSaved(false);
  };

  const handleSaveText = () => {
    const requestData = {
      texts: textList.map((item) => item.content),
      mergedText: mergedText,
      durationTime: duration,
    };
    axios
      .post(baseUrl + "/saveText", requestData)
      .then((res) => {
        console.log(res.data);
        setSaved(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { texts: textList.map((item) => item.content) };
    axios
      .post(baseUrl + routeUrl, requestData)
      .then((res) => {
        console.log(res.data);
        setMergedText(res.data.mergedText);
        setDuration(res.data.durationTime);
      })
      .catch((err) => {
        console.log(err);
      });
    setMergedText("");
    setSaved(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextList
          textList={textList}
          handleTextChange={handleTextChange}
          handleAddText={handleAddText}
          handleRemoveText={handleRemoveText}
          handleClearText={handleClearText}
          setRouteUrl={setRouteUrl}
        />
      </form>
      <MergedText
        mergedText={mergedText}
        duration={duration}
        saved={saved}
        handleSaveText={handleSaveText}
      />
    </div>
  );
};

export default Form;
