import { z } from "zod";
import { Hono } from "hono";
import { Query } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";

import { getMember } from "@/features/members/utils";

import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID,  ORGANIZATIONS_ID } from "@/config";

import { Models } from "node-appwrite";

export type Organization = Models.Document & {
  orgId: string;
  orgName: string;
  description: string;
};

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
      console.log(DATABASE_ID, "DATABASE_ID");
      console.log(ORGANIZATIONS_ID, "ORGANIZATIONS_ID");
      const organizations = await databases.listDocuments<Organization>(
        DATABASE_ID,
        ORGANIZATIONS_ID,
        [
          Query.equal("workspaceId", workspaceId),
          Query.orderDesc("$createdAt"),
        ],
      );
     console.log(organizations.documents, "Server-Accounts-Route.ts");
      return c.json({ data: organizations  });
    }
  )
  


export default app;
