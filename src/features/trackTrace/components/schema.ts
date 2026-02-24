
import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({

  orderId: z.string(),
  externalId: z.string(),
  seller: z.string(),
  item: z.string(),
  quantity: z.number(),
  dueDate: z.string(),
  promisedItem: z.string(),
  shipFrom: z.string(),
  promisedQty: z.number(),
  promisedDate: z.string(),
  dcLocation: z.string(),
  orderStatus: z.string(),
  trackingNumber: z.string(),
  receivedDate: z.string(),
  dcInventory: z.number(),
  storeInventory: z.number(),
  supplierInventory: z.number(),
})

export type Task = z.infer<typeof taskSchema>
