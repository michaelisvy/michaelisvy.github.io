import React, { useState, useEffect } from "react";
import { getSessionList, Session } from "../services/SgClimateService";



export const SessionList: React.FC = () => {
  const [sessionList, setSessionList] = useState<Session[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulating fetching data from an API
    const data = getSessionList();

    setSessionList(data);
  };

  return (
    <div>
      {sessionList.map((session) => (
        <div key={session.id}>
          <p>Date: {session.date}</p>
          <p>Session Type: {session.sessionType}</p>
          <p>Host: {session.host}</p>
          <p>Url: {session.url}</p>
        </div>
      ))}
    </div>
  );
};
