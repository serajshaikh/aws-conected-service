// Builder pattern
export class PhoneBuilder{
    private os!:string;
    private ram!:number;
    private processor!:string;
    private screenSize!:number;
    private battery!:number;

    setOs(os:string):PhoneBuilder{
        this.os=os;
        return this;
    }
    setRam(ram:number):PhoneBuilder{
        this.ram=ram;
        return this;
    }
    setProcessor(processor:string):PhoneBuilder{
        this.processor=processor;
        return this;
    }
    setScreenSize(screenSize:number):PhoneBuilder{
        this.screenSize=screenSize;
        return this;
    }
    setBattery(battery:number):PhoneBuilder{
        this.battery=battery;
        return this;
    }

    public getPhone():Phone{
        return new Phone(this.os,this.ram,this.processor, this.screenSize, this.battery)
    }
}



export class Phone{
    private os:string;
    private ram:number;
    private processor:string;
    private screenSize:number;
    private battery:number;
    constructor(os:string, ram:number, processor:string, screenSize:number, battery:number){
        this.os=os;
        this.ram=ram;
        this.processor=processor;
        this.screenSize=screenSize;
        this.battery=battery;
    }
    display():string{
        let info="";
        info+=`Phone Os: ${this.os} \n`;
        info+=`Phone Ram: ${this.ram} \n`;
        info+=`Phone Processor: ${this.processor} \n`;
        info+=`Phone Screen Size: ${this.screenSize} \n`;
        info+=`Phone Battery: ${this.battery} \n`;
        return info;
    }

}

// const p:Phone=new Phone("Android", 2, "QualCom",5.5,3000);

