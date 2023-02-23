import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Not found Page</h1>
      <button onClick={() => navigate("/contact")}>GO TO ABOUT</button>
    </>
  );
}

export default Notfound;
