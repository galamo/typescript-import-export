import { IStrusture, Structure } from "./Structure"
import { Building } from "./Building";


class Villa extends Building {
    public floors: number
    constructor(structure: IStrusture, _nor: number, _floors: number) {
        super(structure, _nor)
        this.floors = _floors;
    }
}