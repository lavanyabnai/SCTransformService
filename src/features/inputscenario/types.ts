import { Models } from "node-appwrite";

// export enum TaskStatus {
//   BACKLOG = "BACKLOG",
//   TODO = "TODO",
//   IN_PROGRESS = "IN_PROGRESS",
//   IN_REVIEW = "IN_REVIEW",
//   DONE = "DONE"
// };

export type InputScenario = Models.Document & {
  scenario_id: string;
  description: string;
  CreatedAt: string;
  UpdatedAt: string;
  module: string;
  status: string;
  customer: string;
  site: string;
  sku: string;
  Jan: number;
  Feb: number;
  Mar: number;
  Apr: number;
  May: number;
  Jun: number;
  Jul: number;
  Aug: number;
  Sep: number;
  Oct: number;
  Nov: number;
  Dec: number;
  inv_hold_cost_pupm: number;
  stockout_cost_pupm: number;
  hiring_cost_pw: number;
  firing_cost_pw: number;
  labor_hrs_pu: number;
  worker_cost_pm: number;
  overtime_cost_phr: number;
  outsourcing_cost_pu: number;
  max_work_hrs_pwpm: number;
  max_overtime_hrs_pwpm: number;
  inventory_start: number;
  inventory_end: number;
  backlog_start: number;
  backlog_end: number;
  num_workers_start: number;
  min_end_workers: number;
  max_end_workers: number;
};
