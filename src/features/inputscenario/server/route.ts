import { Hono } from "hono";
import { ID, Query } from "node-appwrite";

import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, INPUT_SCENARIOS_ID } from "@/config";
import { InputScenario } from "../types";
import { createInputScenarioSchema } from "../schemas";
import { zValidator } from "@hono/zod-validator";

const app = new Hono()
  .get(
    "/",
    sessionMiddleware,
    async (c) => {

      const databases = c.get("databases");

      // console.log("Databases object:", databases);

      const inputscenarios = await databases.listDocuments<InputScenario>(
        DATABASE_ID,
        INPUT_SCENARIOS_ID,
        [
          Query.orderDesc("$createdAt"),
        ],
      );

      // console.log("Fetched alerts:", alerts);

      return c.json({ data: inputscenarios });
    }
  )
  .post(
    "/",
    sessionMiddleware,
    zValidator("form", createInputScenarioSchema),
    async (c) => {
      const databases = c.get("databases");

      const {
        scenario_id,
        description,
        CreatedAt,
        UpdatedAt,
        module,
        status,
        customer,
        site,
        sku,
        Jan,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec,
        inv_hold_cost_pupm,
        stockout_cost_pupm,
        hiring_cost_pw,
        firing_cost_pw,
        labor_hrs_pu,
        worker_cost_pm,
        overtime_cost_phr,
        outsourcing_cost_pu,
        max_work_hrs_pwpm,
        max_overtime_hrs_pwpm,
        inventory_start,
        inventory_end,
        backlog_start,
        backlog_end,
        num_workers_start,
        min_end_workers,
        max_end_workers,
      } = c.req.valid("form");

      // Ensure all fields are processed correctly
      const inputscenarios = await databases.createDocument(
        DATABASE_ID,
        INPUT_SCENARIOS_ID,
        ID.unique(),
        {
          scenario_id,
          description,
          CreatedAt,
          UpdatedAt,
          module,
          status,
          customer,
          site,
          sku,
          Jan,
          Feb,
          Mar,
          Apr,
          May,
          Jun,
          Jul,
          Aug,
          Sep,
          Oct,
          Nov,
          Dec,
          inv_hold_cost_pupm,
          stockout_cost_pupm,
          hiring_cost_pw,
          firing_cost_pw,
          labor_hrs_pu,
          worker_cost_pm,
          overtime_cost_phr,
          outsourcing_cost_pu,
          max_work_hrs_pwpm,
          max_overtime_hrs_pwpm,
          inventory_start,
          inventory_end,
          backlog_start,
          backlog_end,
          num_workers_start,
          min_end_workers,
          max_end_workers,

        },
      );

      return c.json({ data: inputscenarios });
    }
  )


export default app;
