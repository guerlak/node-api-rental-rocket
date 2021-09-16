import express from "express"
import { routes as categoriesRoutes } from "./routes/categories.routes"
import { routes as specificationRoutes } from "./routes/specification.routes"
const app = express();

app.use(express.json())

app.listen(3333, () => {
    console.log("server running on port 3333...");
})

app.get("/", (req, res) => {
    res.json({ ok: true })
})

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);