import { Router } from "express"
import { SpecificationRepo } from "../repos/SpecificationRepo";
import { SpecificationService } from "../services/SpecificationService";

const routes = Router();
const specificationRepo = new SpecificationRepo();

routes.post("/", (req, res) => {
    const { name, description } = req.body;
    const specService = new SpecificationService(specificationRepo);
    try {
        const spec = specService.create({ name, description });
        return res.status(201).json(spec);
    } catch (e) {
        return res.status(400).json({ 'msg': e.message });
    }
});

routes.get("/", (req, res) => {
    const { name, description } = req.body;
    const all = specificationRepo.list();
    return res.status(201).json(all);
});


export { routes };

