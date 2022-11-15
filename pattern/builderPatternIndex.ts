/* Builder pattern */
// example1
console.log("\n ---------------------------- Example1");
import {clientCode, Director} from "./BuilderPattern/example1"
const director = new Director();
clientCode(director);

// example2
console.log("\n ---------------------------- Example2");


// example3 
console.log("\n ---------------------------- Example3");
import {Phone, PhoneBuilder} from './BuilderPattern/example3'
const p:Phone=new PhoneBuilder().setOs("Android").setBattery(3000).getPhone();

console.log(p.display());