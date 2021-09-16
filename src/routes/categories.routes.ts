import { Router } from "express"
import { CategoriesRepo } from "../repos/CategoriesRepo";
import { PostgresRepo } from "../repos/PostgresRepo";
import { CategoriesService } from "../services/CategoriesService";

const routes = Router();
const categoriesRepo = new CategoriesRepo();

routes.post("/", (req, res) => {
    const { name, description } = req.body;
    const categoriesService = new CategoriesService(categoriesRepo);
    try {
        const category = categoriesService.createCategory({ name, description });
        return res.status(201).json(category);
    } catch (e) {
        return res.status(400).json({ 'msg': e.message });
    }
});

routes.get("/", (req, res) => {
    const { name, description } = req.body;
    const all = categoriesRepo.list();
    return res.status(201).json(all);
});


export { routes };

