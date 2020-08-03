import { IStrusture, Structure } from "./Structure"

export class Home extends Structure {
    public numberOfRooms: number;
    constructor(_structure: IStrusture, _nor: number) {
        super(_structure)
        this.numberOfRooms = _nor;
    }
}