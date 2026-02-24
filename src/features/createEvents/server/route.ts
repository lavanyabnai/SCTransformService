import { Hono } from "hono";
import { ID, Query } from "node-appwrite";

import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, CREATE_EVENTS_ID } from "@/config";
import { Input } from "../types";
import { createInputSchema } from "../schemas";
import { zValidator } from "@hono/zod-validator";

const app = new Hono()
  .get(
    "/",
    sessionMiddleware,
    async (c) => {

      const databases = c.get("databases");

      // console.log("Databases object:", databases);

      const inputs = await databases.listDocuments<Input>(
        DATABASE_ID,
        CREATE_EVENTS_ID,
        [
          Query.orderDesc("$createdAt"),
        ],
      );

      // console.log("Fetched alerts:", alerts);

      return c.json({ data: inputs });
    }
  )
  .post(
    "/",
    sessionMiddleware,
    zValidator("form", createInputSchema),
    async (c) => {
      const databases = c.get("databases");

      const {
        primaryKey,
        sqlQuery,
        alertCondition,
        howManyIncidents,
        incidentTitle,
        incidentType,
        teamAlert,
        personAssigned,
        escalateIncident,
        resolveIncident,
        days,
      } = c.req.valid("form");

      // Ensure all fields are processed correctly
      const input = await databases.createDocument(
        DATABASE_ID,
        CREATE_EVENTS_ID,
        ID.unique(),
        {
          primaryKey,
          sqlQuery,
          alertCondition,
          howManyIncidents,
          incidentTitle,
          incidentType,
          teamAlert,
          personAssigned,
          escalateIncident,
          resolveIncident,
          days,
        },
      );

      return c.json({ data: input });
    }
  )


export default app;
