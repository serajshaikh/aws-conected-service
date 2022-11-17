// Builders
interface Builder {
    setType(types: Type): void;
    setSeat(seats: number): void;
    setEngine(engine: Engine): void;
    setTransmission(transmission: Transmission): void;
    setTripComputer(tripComputer: TripComputer): void;
    setGPSNavigator(gpsNevegator: GPSNavigator): void;
}

class CarBuilder implements Builder {
    private types: Type;
    private seats: number | undefined;
    private engine: Engine;
    private transmission: Transmission;
    private tripComputer: TripComputer;
    private gpsNavigator: GPSNavigator;

    public setType(type: Type): void {
        this.types = type;
    };
    public setSeat(seats: number): void {
        this.seats = seats;
    };
    public setEngine(engine: Engine): void {
        this.engine = engine;
    };
    public setTransmission(transmission: Transmission): void {
        this.transmission = transmission;
    };
    public setTripComputer(tripComputer: TripComputer): void {
        this.tripComputer = tripComputer;
    };
    public setGPSNavigator(gpsNevegator: GPSNavigator): void {
        this.gpsNavigator = gpsNevegator;
    };

    public getResult(): Car {
        return new Car(this.types, this.seats, this.engine, this.transmission, this.tripComputer, this.gpsNavigator)
    }
}

class CarManualBuilder implements Builder {
    private types: Type;
    private seats: number | undefined;
    private engine: Engine;
    private transmission: Transmission;
    private tripComputer: TripComputer;
    private gpsNavigator: GPSNavigator;

    public setType(type: Type): void {
        this.types = type;
    };
    public setSeat(seats: number): void {
        this.seats = seats;
    };
    public setEngine(engine: Engine): void {
        this.engine = engine;
    };
    public setTransmission(transmission: Transmission): void {
        this.transmission = transmission;
    };
    public setTripComputer(tripComputer: TripComputer): void {
        this.tripComputer = tripComputer;
    };
    public setGPSNavigator(gpsNevegator: GPSNavigator): void {
        this.gpsNavigator = gpsNevegator;
    };

    public getResult(): Manual {
        return new Manual(this.types, this.seats, this.engine, this.transmission, this.tripComputer, this.gpsNavigator)
    }

}

// Cars
class Car {
    [x: string]: any;
    private readonly types: Type;
    private readonly seats: number;
    private readonly engine: Engine;
    private readonly transmission: Transmission;
    private readonly tripComputer: TripComputer;
    private readonly gpsNavigator: GPSNavigator;
    private fuel = 0;

    public Car(types: Type, seats: number, engine: Engine, transmission: Transmission, tripComputer: TripComputer, gpsNavigator: GPSNavigator) {
        this.types = types;
        this.seats = seats;
        this.engine = engine;
        this.transmission = transmission;
        this.tripComputer = tripComputer;
        this.tripComputer.setCar(this);
        this.gpsNavigator = gpsNavigator;
    }
    public getType(): Type {
        return this.types;
    }
    public getFuel(): number {
        return this.fuel;
    }
    public setFuel(fuel: number) {
        this.fuel = fuel;
    }
    public getEngine(): Engine {
        return this.engine;
    }
    public getSeates(): number {
        return this.seats;
    }
    public getTransmission(): Transmission {
        return this.transmission;
    }
    public getTripComputer(): TripComputer {
        return this.tripComputer;
    }
    public getGPSNavigator(): GPSNavigator {
        return this.gpsNavigator;
    }

}
class Manual {
    private readonly types: Type;
    private readonly seats: number;
    private readonly engine: Engine;
    private readonly transmission: Transmission;
    private readonly tripComputer: TripComputer;
    private readonly gpsNavigator: GPSNavigator;
    private fuel = 0;

    public Car(types: Type, seats: number, engine: Engine, transmission: Transmission, tripComputer: TripComputer, gpsNavigator: GPSNavigator) {
        this.types = types;
        this.seats = seats;
        this.engine = engine;
        this.transmission = transmission;
        this.tripComputer = tripComputer;
        this.tripComputer.setCar(this);
        this.gpsNavigator = gpsNavigator;
    }

    public print():string{
        let info="";
        info +=`Type of Car: ${this.types} \n`;
        info +=`Count of seats: ${this.seats} \n`;
        info +=`Engine volume: ${this.engine} \n`;
        info +=`Transmission: ${this.transmission} \n`;
        if(this.tripComputer!=null){
            info+=`TripComputer: Functional \n`
        }else{
            info+=`TripComputer: N/A \n`;
        }
        if(this.gpsNavigator!=null){
            info+=`gpsNavigator: Functional`;
        }else{
            info+=`GPS Navigitor: N/A`;
        }

        return info;

    }

}

enum Type{
    CITY_CAR, SPORT_CAR,SUV
}
// components
class Engine{
    private readonly volume:number;
    private milage:number;
    private started=false;

    constructor(volume:number, milage:number){
        this.volume=volume;
        this.milage=milage;
    }

    public on():void{
        this.started=true;
    }

    public off():void{
        this.started=false;
    }

    isStarted():Boolean{
        return this.started;
    }

    go(milage:)
}
// director 

// Demp 
