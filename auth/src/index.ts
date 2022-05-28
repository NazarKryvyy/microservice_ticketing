import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routs/current-user";
import { signupRouter } from "./routs/signup";
import { signinRouter } from "./routs/singin";
import { signoutRouter } from "./routs/signout";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
