import postgres from "postgres";
import { config } from "@/config/env";
import { drizzle } from "drizzle-orm/postgres-js";

const client = postgres(config.databaseUrl);

export const db = drizzle(client);
