import Villa from "./models/Villa";
import { Buildings } from "./models/Buildings";
import { username } from "./models/Office";
const building = new Buildings({ area: 1, address: "sss", city: "sds" }, 5);

const villa = new Villa({ area: 1, address: "sss", city: "sds" }, 5, 5);
console.log(building, villa);
console.log("TS COMPILE WORKS!!!", username);
