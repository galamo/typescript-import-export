"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villa_1 = require("./models/Villa");
var Buildings_1 = require("./models/Buildings");
var Office_1 = require("./models/Office");
var building = new Buildings_1.Buildings({ area: 1, address: "sss", city: "sds" }, 5);
var villa = new Villa_1.default({ area: 1, address: "sss", city: "sds" }, 5, 5);
console.log(building, villa);
console.log("TS COMPILE WORKS!!!", Office_1.username);
