import { format } from "date-fns";

export type Status = "approved" | "pending" | "rejected" | "watchlist";

export interface Project {
  id: string;
  title: string;
  url: string;
  status: Status;
  createdAt: Date;
  watchlisted: boolean;
  rejectionReason?: string;
}

// Generate random dates between start and end
function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Mock data for the dashboard
export const projects: Project[] = [
  {
    id: "1",
    title: "Nostr Web Client",
    url: "https://github.com/org/nostr-web-client",
    status: "approved",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: false
  },
  {
    id: "2",
    title: "Nostr Relay Implementation",
    url: "https://github.com/org/nostr-relay",
    status: "pending",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: true
  },
  {
    id: "3",
    title: "Nostr Protocol Extension",
    url: "https://github.com/org/nostr-extension",
    status: "rejected",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: false
  },
  {
    id: "4",
    title: "Nostr Mobile App",
    url: "https://github.com/org/nostr-mobile",
    status: "approved",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: false
  },
  {
    id: "5",
    title: "Nostr Desktop Client",
    url: "https://github.com/org/nostr-desktop",
    status: "watchlist",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: true
  },
  {
    id: "6",
    title: "Nostr Integration Service",
    url: "https://github.com/org/nostr-integration",
    status: "pending",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: false
  },
  {
    id: "7",
    title: "Nostr Compliance Tools",
    url: "https://github.com/org/nostr-compliance",
    status: "approved",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: false
  },
  {
    id: "8",
    title: "Nostr Explorer",
    url: "https://github.com/org/nostr-explorer",
    status: "watchlist",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: true
  },
  {
    id: "9",
    title: "Nostr Development Kit",
    url: "https://github.com/org/nostr-dev-kit",
    status: "rejected",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: true
  },
  {
    id: "10",
    title: "Nostr Command Line Interface",
    url: "https://github.com/org/nostr-cli",
    status: "approved",
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    watchlisted: false
  },
];

// Utility to format dates consistently
export function formatDate(date: Date): string {
  return format(date, "MMM d, yyyy");
}

// Get projects for the watchlist
export function getWatchlistedProjects(): Project[] {
  return projects.filter(project => project.watchlisted);
}

// Search projects by title
export function searchProjects(query: string): Project[] {
  const lowercasedQuery = query.toLowerCase().trim();
  if (!lowercasedQuery) return projects;
  
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowercasedQuery) || 
    project.url.toLowerCase().includes(lowercasedQuery)
  );
}
