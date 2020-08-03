interface IStrusture {
    area: number;
    address: string;
    city: string;
}

export default class Structure implements IStrusture {
    area: number;
    address: string;
    city: string;
    createdAt: Date;
    constructor(structure: IStrusture) {
        this.area = structure.area;
        this.address = structure.address;
        this.city = structure.city;
        this.createdAt = new Date();
    }
}


