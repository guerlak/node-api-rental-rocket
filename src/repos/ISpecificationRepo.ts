import { Specification } from "../model/Specification";


interface ISpecificationDTO {
    name: string;
    description: string
}

interface ISpecificationRepo {
    findByName(name: string): Specification;
    list(): Specification[];
    create({ name, description }: ISpecificationDTO): void;
}

export { ISpecificationRepo, ISpecificationDTO }