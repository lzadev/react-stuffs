import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function Cat() {
  const [catfact, setCatfact] = useState("");

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((resp) => {
      setCatfact(resp.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Fetch Data</button>
      <h1 className="detail">{catfact}</h1>
    </div>
  );
}

export default Cat;
