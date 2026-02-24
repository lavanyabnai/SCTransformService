
import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  warehouseId: z.string(),
  type: z.string(),
  process: z.string(),
  status: z.string(),
  description: z.string(),
  details: z.string(),
  severity: z.string(),
  action: z.string(),
  owner: z.string(),
})

export type Task = z.infer<typeof taskSchema>
