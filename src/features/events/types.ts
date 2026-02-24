import { Models } from "node-appwrite";

// export enum TaskStatus {
//   BACKLOG = "BACKLOG",
//   TODO = "TODO",
//   IN_PROGRESS = "IN_PROGRESS",
//   IN_REVIEW = "IN_REVIEW",
//   DONE = "DONE"
// };

export type Alert = Models.Document & {
  id: string;
  sku: string;
  dc: string;
  store: string;
  status: string;
  title: string;
  severity: string;
  action: number;
  owner: string;
  sop: string;
  label: string;
  priority: string;
  impact: number;
};
