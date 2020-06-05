import * as express from "express";
import * as path from "path";
const app: express.Application = express();
const PORT = process.env.PORT || 8080;
app.use("/", express.static(path.resolve(__dirname, "../client/assets")));
app.use(
  "/melissa-mike",
  express.static(path.resolve(__dirname, "../client/up-assets"))
);
app.use("/static", express.static(path.resolve("/home/ubuntu/build/static")));

app.get("/", (req: express.Request, res: express.Response): void => {
  res.sendFile(path.resolve(__dirname, "../client/views/index.html"));
});

app.get(
  "/melissa-mike",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(path.resolve(__dirname, "../client/views/upTrip.html"));
  }
);

app.get("/peggy", (req: express.Request, res: express.Response): void => {
    res.sendFile(path.resolve("/home/ubuntu/build/index.html"));
});

app.listen(PORT, (): void => {
  const newLocal: string = `listing on http://localhost:${PORT}/`;
  console.log(newLocal);
});
