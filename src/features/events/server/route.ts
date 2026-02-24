import { z } from "zod";
import { Hono } from "hono";
  import {  Query } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";

import { getMember } from "@/features/members/utils";

import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID,  ALERTS_ID } from "@/config";

import { Alert } from "../types";

const app = new Hono()

   .get(
    "/",
    sessionMiddleware,
    zValidator("query", z.object({ workspaceId: z.string() })),
     async (c) => {
      const user = c.get("user");
      const databases = c.get("databases");

      const { workspaceId } = c.req.valid("query");
       console.log(workspaceId, "workspaceId");
       
      if (!workspaceId) {
        return c.json({ error: "Missing workspaceId" }, 400);
      }

      const member = await getMember({
        databases,
        workspaceId,
        userId: user.$id,
      });
      console.log(member, "member");
      if (!member) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      // console.log(DATABASE_ID, "DATABASE_ID");
      // console.log(ALERTS_ID, "ALERTS_ID");
        const alerts = await databases.listDocuments<Alert>(
        DATABASE_ID,
        ALERTS_ID,
        [
          Query.equal("workspaceId", workspaceId),
          Query.orderDesc("$createdAt"),
        ],
      );
    //  console.log(alerts.documents, "Server-Alerts-Route.ts");
      return c.json({ data: alerts  });
    }
  )
  


export default app;
