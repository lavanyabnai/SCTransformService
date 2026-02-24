import { Models } from "node-appwrite";

export type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  createdAt: string;
};

export type Chat = Models.Document & {
  id: string;
  createdAt: string;
  messages: Message[];
  userId: string;
  sharePath?: string;
};

export type Input = Models.Document & {
  primaryKey?: string;
  sqlQuery?: string;
  alertCondition?: string;
  howManyIncidents?: string;
  incidentTitle?: string;
  incidentType?: string;
  teamAlert?: string;
  personAssigned?: string;
  escalateIncident?: string;
  resolveIncident?: string;
  days?: string;
};
