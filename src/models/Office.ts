import { Building } from "./Building"

class Office extends Building {
    isFurniture: Boolean;
    constructor(_building: Building, _isFurniture: Boolean, _nor: number) {
        super(_building, _nor)
        this.isFurniture = _isFurniture
    }
}