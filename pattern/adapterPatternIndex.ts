// example1
// import {} from './AdapterPattern/example'
console.log("\n ---------------------------- Example1");
import {clientCode, Adoptee, Adapter, Target} from './AdapterPattern/example'

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adoptee = new Adoptee();
console.log('Client: The Adoptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adoptee: ${adoptee.specificRequest()}`);

console.log('');
/* here we are connecting  adoptee and target class by using Adopter class  like a adopter need to charge a phone type c charger needed but have type B charger connecting through adopter */
console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adoptee);
clientCode(adapter);


// example2
// import {} from './AdoptorPattern/example'
console.log("\n ---------------------------- Example2");
import {Pen, PenAdapter, PilotPen, AssignmentWork} from './AdapterPattern/example2';

const pp:PilotPen=new PilotPen();
const p:Pen = new PenAdapter(pp);
const aw: AssignmentWork = new AssignmentWork();
aw.setP(p);
aw.writeAssignment("I am bit tired to write on Assignment");

// example3
// import {} from './AdoptorPattern/example'
console.log("\n ---------------------------- Example3");