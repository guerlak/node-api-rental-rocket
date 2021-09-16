import { ISpecificationRepo } from "../repos/ISpecificationRepo";


interface IRequest {
    name: string,
    description: string
}

class SpecificationService {

    constructor(private specificationRepo: ISpecificationRepo) { };

    create({ name, description }: IRequest) {
        const specExists = this.specificationRepo.findByName(name);

        if (specExists) {
            console.log("ex")
            throw new TypeError("Spec already exists");
        }
        const spec = this.specificationRepo.create({ name, description });
        return spec;
    }
}

export { SpecificationService }