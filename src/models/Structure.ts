export interface IStrusture {
    area: number;
    address: string;
    city: string;
}

export const emailToManager = "gal.amouyal@gmail.com";
export const emailToManager2 = "gal.amouyal@gmail.com";

export class Structure implements IStrusture {
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


