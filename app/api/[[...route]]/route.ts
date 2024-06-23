import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import books from "./books";
import authors from "./authors";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/books", books);
app.route("/authors", authors);

app.get("/hello", clerkMiddleware(), (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      error: "Unauthorized access",
    });
  }
  return c.json({
    message: "Hello Next.js!",
    userId: auth.userId,
  });
});
// .get(
//   "/hello/:name",
//   zValidator(
//     "param",
//     z.object({
//       name: z.string(),
//     })
//   ),
//   (c) => {
//     const test = c.req.valid("param");
//     return c.json({
//       message: `Hello ${test}!`,
//     });
//   }
// )
// .post(
//   "/hello",
//   zValidator("json", z.object({ name: z.string(), userId: z.number() })),
//   (c) => {
//     const { name, userId } = c.req.valid("json");
//     return c.json({
//       message: `name ${name} and userId ${userId}!`,
//     });
//   }
// );

export const GET = handle(app);
export const POST = handle(app);
