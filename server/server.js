const express = require("express");
const { userRouter } = require("./routes/user.routes");
const app = express();
require("dotenv").config();

app.use(express.json());

// user routes
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is running at", process.env.PORT);
});
