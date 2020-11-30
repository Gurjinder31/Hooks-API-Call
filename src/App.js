import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );
    console.log(result.data);
    setData(result.data.hits);
  }, []);

  return (
    <div className="App">
      {data.map((item) => (
        <div>{item.author}</div>
      ))}
    </div>
  );
}
