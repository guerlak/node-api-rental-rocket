import { Router } from "express"
import { CategoriesRepo } from "../repos/CategoriesRepo";

const routes = Router();
const categoriesRepo = new CategoriesRepo();

routes.post("/", (req, res) => {
    const { name, description } = req.body;
    const categoryAlreadyExists = categoriesRepo.findByName(name);

    if (categoryAlreadyExists) {
        return res.status(400).json({ message: "Category already exists" })
    }

    const cat = categoriesRepo.create({ name, description });
    return res.status(201).json(cat);
});


routes.get("/", (req, res) => {
    const { name, description } = req.body;
    const all = categoriesRepo.getCategories();
    return res.status(201).json(all);
});


export { routes };

