import { useParams } from "react-router";
import { getSession } from "../services/SgClimateService";

export const SessionDetail = () => {
  let params = useParams();
  const sessionId = parseInt(params.sessionId || "");
  const session = getSession(sessionId);
  return (
    <div key={session?.id}>
      {session && (
        <>
          <p>Date: {session.date}</p>
          <p>Session Type: {session.sessionType}</p>
          <p>Host: {session.host}</p>
          <p>Url: {session.url}</p>
        </>
      )}
    </div>
  );
};
