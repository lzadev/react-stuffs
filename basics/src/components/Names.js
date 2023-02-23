import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function Names() {
  const [predictedAge, setPredictedAge] = useState({});
  const [name, setName] = useState("");
  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((resp) => {
      setPredictedAge(resp.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Enter a name"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1 className="detail">Predicted Age</h1>
      {predictedAge ? <pre>{JSON.stringify(predictedAge)}</pre> : null}
    </div>
  );
}

export default Names;
