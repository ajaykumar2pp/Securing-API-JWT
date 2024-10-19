import express from "express";
import productRoutes from "./src/features/product/routes/product.routes.js";
import userRoutes from "./src/features/user/routes/user.routes.js";
// import authorizer from './src/middlewares/basicAuth.js'
// import jwtAuth from './src/middlewares/jwtAuth.js'
import testAuth from './src/middlewares/testAuth.js'
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

// app.use("/api/product", authorizer, productRoutes);
// app.use("/api/product",jwtAuth, productRoutes);
app.use("/api/product",testAuth, productRoutes);
app.use("/api/user", userRoutes);

export default app;
