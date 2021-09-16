import { CategoriesRepo } from "../repos/CategoriesRepo";
import { ICategoriesRepo } from "../repos/ICategoriesRepo";


interface IRequest {
    name: string,
    description: string
}

class CategoriesService {

    constructor(private categoriesRepo: ICategoriesRepo) { };

    createCategory({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepo.findByName(name);

        if (categoryAlreadyExists) {
            throw new TypeError("Category already exists");
        }
        const category = this.categoriesRepo.create({ name, description });
        return category;
    }
}

export { CategoriesService }