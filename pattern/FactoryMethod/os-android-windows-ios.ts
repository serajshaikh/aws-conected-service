interface OS{
    spec:()=>void;
}

class IOS implements OS{
    spec(){
        console.log("IOS is Most Secure OS.....");
    }
}

class Windows implements OS{
    spec(){
        console.log("Windows gonna Die....");
    }
}


class Android implements OS{
    spec(){
        console.log("Android is most powerful OS....");
    }
}


export class OperatingSystemFactory{
    /**
     * getInstance
    */
    public getInstance(str:string):OS {
        if(str==="Open"){
            return new Android()
        }else if(str==="Close"){
            return new IOS();
        }else{
            return new Windows();
        }
    }
}


// Factory Method
/* OS is a interface 
    Android Implements OS
    IOS Implements OS
    Windows implements OS
    OperatingSystemFactory is a class return the instance of OS according to its value.
    */
// Android os implements OS interface
const osObj1=new OperatingSystemFactory();
const obj1=osObj1.getInstance("Open");
obj1.spec();
// IOS os implements OS interface
const osObj2=new OperatingSystemFactory();
const obj2=osObj2.getInstance("Close");
obj2.spec();
// Windows OS implements OS interface
const osObj3=new OperatingSystemFactory();
const obj3=osObj3.getInstance(" ");
obj3.spec();
