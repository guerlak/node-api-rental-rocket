import { Specification } from "../model/Specification";
import { ISpecificationRepo, ISpecificationDTO } from "./ISpecificationRepo";



class SpecificationRepo implements ISpecificationRepo {

    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    findByName(name: string): Specification {
        const spec = this.specifications.find(spec => spec.name === name);
        return spec;
    }
    list(): Specification[] {
        console.log("list categories");
        return this.specifications;
    }
    create({ name, description }: ISpecificationDTO): Specification {
        const spec = new Specification(name, description);
        this.specifications.push(spec)
        return spec;
    }
}

export { SpecificationRepo }