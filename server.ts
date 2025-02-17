import { Application, Router } from "./deps.ts";


const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello from Deno!";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
