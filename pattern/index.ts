
// Factory Method
/*MackOSButton and WindowOSButton implements Button interface similarly MackOSCheckbox and WindowOSCheckbox implements Checkbox interface,
WindowsFactory and MacOSFactory implements GUIFactory interface help to create object of win and mac Checkbox and win and mac Button classes
*/
import { Demo, Application } from "../pattern/FactoryMethod/product-creator"
const app: Application = Demo.configureApplication("win");
app.paint();



/* OS is a interface 
    Android Implements OS
    IOS Implements OS
    Windows implements OS
    OperatingSystemFactory is a class return the instance of OS according to its value.
    */
import { OperatingSystemFactory } from '../pattern/FactoryMethod/os-android-windows-ios';
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






import {Ship, Truck} from '../pattern/FactoryMethod/ship-truck'
const truckObj=new Truck(214558258, "Jhon Wick");
const shipObj=new Ship(258255584, "Scarlett Johansson");
truckObj.driver();
shipObj.driver();
