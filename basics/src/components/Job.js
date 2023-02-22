import { useState } from "react";
import styles from "../Job.module.css";

const Job = ({ salary, position, company }) => {
  const [withStyles, setWithStyles] = useState(false);

  return (
    <div>
      <p className={withStyles ? styles.detail : null}>
        {salary} - {position} - {company}
      </p>
      <button onClick={() => setWithStyles((value) => !value)}>
        Show Job Description {withStyles ? "without" : "with"} Styles
      </button>
    </div>
  );
};

export default Job;
