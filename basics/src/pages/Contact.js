import { useParams } from "react-router-dom";

function Contact() {
  const { username } = useParams();

  return <h1>Contact {username}</h1>;
}

export default Contact;
