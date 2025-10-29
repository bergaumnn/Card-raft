import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type Template = "classic" | "creative" | "minimal" | "professional";

export interface BusinessCardData {
  firstName: string;
  lastName: string;
  profession: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  avatar?: string;
}

export const businessCardSchema = z.object({
  firstName: z.string().min(1, "validation.firstNameRequired"),
  lastName: z.string().min(1, "validation.lastNameRequired"),
  profession: z.string().min(1, "validation.professionRequired"),
  phone: z.string().optional().default(""),
  email: z.string().email("validation.invalidEmail").or(z.literal("")),
  website: z.string().optional().default(""),
  address: z.string().optional().default(""),
});

export type InsertBusinessCard = z.infer<typeof businessCardSchema>;
