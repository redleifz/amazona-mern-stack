import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import cors from "cors"

const app = express();
dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL

console.log(`you allow origin : ${FRONTEND_URL}`)

const corsOptions = {
  origin: `${FRONTEND_URL}` ,
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))

// const FRONTEND_URL = process.env.FRONTEND_URL
// const corsOptions = {
//   origin: `${FRONTEND_URL}` ,
//   optionsSuccessStatus: 200 
// }
// app.use(cors(corsOptions))


//fix for error message
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.use("/api/upload", uploadRouter);
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
