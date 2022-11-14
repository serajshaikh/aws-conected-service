interface Transport{
    modelNumber:number;
    driverName:string;
    driver:()=>void;
}

export class Truck implements Transport{
    readonly modelNumber:number;
    readonly driverName:string;
    constructor(modelNumber:number, driverName:string){
        this.modelNumber=modelNumber;
        this.driverName=driverName;
    }
    driver(){
        console.log("Truck Driver Name is: ", this.driverName);
        console.log("Truck ModelNumber is: ", this.modelNumber);
    }


}

export class Ship implements Transport{
    readonly modelNumber:number;
    readonly driverName:string;
    constructor(modelNumber:number, driverName:string){
        this.modelNumber=modelNumber;
        this.driverName=driverName;
    }
    driver(){
        console.log("Ship Driver Name is: ", this.driverName);
        console.log("Ship ModelNumber is: ", this.modelNumber);
    }


}