import { Category } from "../model/Category";
import { ICategoriesRepo, ICreateCategoryDTO } from "./ICategoriesRepo";

class CategoriesRepo implements ICategoriesRepo {

    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): Category {
        const cat: Category = new Category(name, description)
        this.categories.push(cat);
        return cat;
    }

    findByName(name: string): Category {
        const cat = this.categories.find(cat => cat.name === name);
        return cat;
    }

    list(): Category[] {
        return this.categories;
    }

}

export { CategoriesRepo }