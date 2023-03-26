import React from "react";
import axios from "axios";
import { useEffect } from "react";
import "../index.css";

const Collections = () => {
  const [data, setData] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [showButton, setShowButton] = React.useState(false);

  const handleShowDetail = (id) => {
    setSelectedItem(id === selectedItem ? null : id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/api/texts");
      setData(result.data);
    };
    fetchData();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="collection">
        <ul>
          {data.map((item) => (
            <div
              key={item._id}
              onClick={() => handleShowDetail(item._id)}
              className={item._id === selectedItem ? "selected" : ""}
            >
              <p>
                <b>Merged Text</b>
                <li>{item.mergedText}</li>
              </p>
              {item._id === selectedItem ? (
                <>
                  <p>
                    <b>Texts</b>
                    {item.texts.map((text, index) => (
                      <li key={index}> {text} </li>
                    ))}
                  </p>
                  <p>
                    <b>Duration Time</b> <li>{item.durationTime}</li>
                  </p>
                </>
              ) : null}
            </div>
          ))}
        </ul>
      </div>
      {showButton && (
        <button className="scroll-up-button" onClick={handleClick}>
          ↑
        </button>
      )}
    </>
  );
};

export default Collections;
