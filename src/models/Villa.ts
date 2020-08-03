import { IStrusture } from "./Structure"
import { Buildings } from "./Buildings";


export default class Villa extends Buildings {
    public floors: number
    constructor(structure: IStrusture, _nor: number, _floors: number) {
        super(structure, _nor)
        this.floors = _floors;
    }
}