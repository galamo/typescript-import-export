import { Buildings } from "./Buildings"
export const username = "sdsd";
export class Office extends Buildings {
    isFurniture: Boolean;
    constructor(_building: Buildings, _isFurniture: Boolean, _nor: number) {
        super(_building, _nor)
        this.isFurniture = _isFurniture
    }
}