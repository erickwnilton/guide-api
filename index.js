import { app } from "./app.js";
import { server } from "./config.js";
import { startBackend } from "./app.js";

const port = server.port;

app.listen(port, async () => {
  await startBackend();
  console.log(`Server started on port ${port} 📦`)
})