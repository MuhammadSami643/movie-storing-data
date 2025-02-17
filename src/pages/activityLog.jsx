import { useState } from "react";
import "../pagesCSS/activityLog.css";

const ActivityLog = () => {
  const [activity, setActivity] = useState("");
  const [log, setLog] = useState([]);

  const handleAddActivity = () => {
    if (activity) {
      setLog([...log, activity]);
      setActivity("");
    }
  };

  return (
    <div className="activity-log">
      <h2>Daily Activity Log</h2>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="What did you do today?"
      />
      <button onClick={handleAddActivity}>Add Activity</button>

      <div className="log-list">
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityLog;
