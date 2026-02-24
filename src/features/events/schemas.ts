import { z } from "zod";


export const createAlertSchema = z.object({
  id: z.string().trim().min(1, "Required"),
  sku: z.string().trim().min(1, "Required"),
  dc: z.string().trim().min(1, "Required"),
  store: z.string().trim().min(1, "Required"),
  status: z.string().trim().min(1, "Required"),
  title: z.string().trim().min(1, "Required"),
  severity: z.string().trim().min(1, "Required"),
  action: z.number(),
  owner: z.string().trim().min(1, "Required"),
  sop: z.string().trim().min(1, "Required"),
  label: z.string().trim().min(1, "Required"),
  priority: z.string().trim().min(1, "Required"),
  impact: z.number(),
});
