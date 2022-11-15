
// Factory Method
/* Example1 */

import {ConcreteCreator1, ConcreteCreator2, clientCode} from './FactoryPattern/example1'

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());


/* Example2 */
/*MackOSButton and WindowOSButton implements Button interface similarly MackOSCheckbox and WindowOSCheckbox implements Checkbox interface,
WindowsFactory and MacOSFactory implements GUIFactory interface help to create object of win and mac Checkbox and win and mac Button classes
*/
import { Demo, Application } from "./FactoryPattern/product-creator"
const app: Application = Demo.configureApplication("win");
app.paint();


/* Example3 */
/* OS is a interface 
    Android Implements OS
    IOS Implements OS
    Windows implements OS
    OperatingSystemFactory is a class return the instance of OS according to its value.
    */
import { OperatingSystemFactory } from './FactoryPattern/os-android-windows-ios';
// Android os implements OS interface
const osObj1 = new OperatingSystemFactory();
const obj1 = osObj1.getInstance("Open");
obj1.spec();
// IOS os implements OS interface
const osObj2 = new OperatingSystemFactory();
const obj2 = osObj2.getInstance("Close");
obj2.spec();
// Windows OS implements OS interface
const osObj3 = new OperatingSystemFactory();
const obj3 = osObj3.getInstance(" ");
obj3.spec();






import {Ship, Truck} from './FactoryPattern/ship-truck'
const truckObj=new Truck(214558258, "Jhon Wick");
const shipObj=new Ship(258255584, "Scarlett Johansson");
truckObj.driver();
shipObj.driver();
