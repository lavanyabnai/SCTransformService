import { z } from "zod";

// Message schema
export const messageSchema = z.object({
  id: z.string(),
  content: z.string(),
  role: z.enum(['user', 'assistant']),
  createdAt: z.string(),
});

// Chat schema
export const chatSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  messages: z.array(messageSchema),
  userId: z.string(),
  sharePath: z.string().optional(),
});

// Create chat schema
export const createChatSchema = z.object({
  messages: z.array(messageSchema).optional(),
  userId: z.string(),
});

// Share chat schema
export const shareChatSchema = z.object({
  id: z.string(),
});

// Remove chat schema
export const removeChatSchema = z.object({
  id: z.string(),
  path: z.string(),
});

// Existing schemas
export const createInputSchema = z.object({
  primaryKey: z.string().optional(),
  sqlQuery: z.string().optional(),
  alertCondition: z.string().optional(),
   howManyIncidents: z.string().optional(),
  incidentTitle: z.string().optional()  ,
  incidentType: z.string().optional(),
  teamAlert: z.string().optional(),
  personAssigned: z.string().optional(),
  escalateIncident: z.string().optional(),
  resolveIncident: z.string().optional(),
  days: z.string().optional(),
});

export const inputSchema = z.object({
  primaryKey: z.string(),
  sqlQuery: z.string(),
  alertCondition: z.string().optional(),
   howManyIncidents: z.string(),
  incidentTitle: z.string(),
  incidentType: z.string(),
  teamAlert: z.string(),
  personAssigned: z.string(),
  escalateIncident: z.string(),
  resolveIncident: z.string(),
  days: z.string(),
});
