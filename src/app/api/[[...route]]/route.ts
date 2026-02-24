import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";
import members from "@/features/members/server/route";
import workspaces from "@/features/workspaces/server/route";
import projects from "@/features/projects/server/route";
import tasks from "@/features/tasks/server/route";
import alerts from "@/features/events/server/route";
import createEvents from "@/features/createEvents/server/route";
import inputscenarios from "@/features/inputscenario/server/route";
import organizations from "@/features/workspaces/server/organizations";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .route("/auth", auth)
  .route("/members", members)
  .route("/workspaces", workspaces)
  .route("/projects", projects)
  .route("/tasks", tasks)
  .route("/alerts", alerts)
  .route("/createEvents", createEvents)
  .route("/inputscenarios", inputscenarios)
  .route("/organizations", organizations);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
