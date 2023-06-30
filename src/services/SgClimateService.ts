const sessionList: Session[] = [
  {
    id: 1,
    date: "July 3rd 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Babilou",
    url: "https://association.climatefresk.org/training_sessions/33303dc1-0e04-48df-ae11-03ac796ccb04/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 2,
    date: "July 3rd 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "L'Oreal",
    url: "https://www.eventbrite.sg/e/biodiversity-collage-loreal-singapore-tickets-658117395847",
  },
];

export function getSessionList() {
  return sessionList;
}

export function getSession(sessionId: number) {
  return sessionList.find((item) => item.id === sessionId);;
}

export interface Session {
    id: number;
    date: string;
    sessionType: string;
    host: string;
    url: string;
  }
