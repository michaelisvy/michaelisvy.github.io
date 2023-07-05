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
    date: "11 July 2023 (Tuesday evening)",
    sessionType: "Biodiversity Collage",
    host: "L'Oreal",
    url: "https://www.eventbrite.sg/e/biodiversity-collage-loreal-singapore-tickets-658117395847",
  },
  {
    id: 3,
    date: "15 July 2023 (Saturday)",
    sessionType: "Climate Fresk",
    host: "Palo IT",
    url: "https://association.climatefresk.org/training_sessions/e77154d5-d96e-4a0f-af6b-8e2b10fb24aa/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 4,
    date: "9 July 2023 (Sunday)",
    sessionType: "Climate Fresk at Youth4Climate Festival",
    host: "Youth4Climate Festival",
    url: "https://association.climatefresk.org/training_sessions/c65594b9-159a-41ee-865d-aa549fda63aa/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 5,
    date: "10 July 2023 (Monday)",
    sessionType: "Digital Collage",
    host: "	Viseo",
    url: "https://www.eventbrite.sg/e/the-digital-collage-workshop-singapore-tickets-396945513717",
  },
  {
    id: 6,
    date: "18 July 2023 (Tuesday evening)",
    sessionType: "2 Tonnes",
    host: "	Chemistry",
    url: "https://www.eventbrite.sg/e/2tonnes-workshop-chemistry-singapore-tickets-620538757127",
  },
  {
    id: 7,
    date: "19 August 2023 (Saturday)",
    sessionType: "Climate Fresk",
    host: "	Palo IT",
    url: "https://association.climatefresk.org/session_invitations/89e74481-fa04-44ee-a8ee-9cd8c52ee02e",
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
