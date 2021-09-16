import { Category } from "../model/Category";
import { ICategoriesRepo } from "./ICategoriesRepo";

class PostgresRepo implements ICategoriesRepo {
    findByName(name: string): Category {
        console.log("find by name")
        return null
    }
    list(): Category[] {
        console.log("list categories");
        return [];
    }
    create(name: string, description: string): void {
        console.log("creating cat")
    }
}

export { PostgresRepo }