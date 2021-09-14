import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string
}

class CategoriesRepo {

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

    getCategories(): Category[] {
        return this.categories;
    }

}

export { CategoriesRepo }