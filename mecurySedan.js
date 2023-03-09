
//this includes the vehicle class as a module
const VehicleModule = require('./vehicle.js').Vehicle

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;

    }

    loadPassenger(num){
        this.passenger = num;
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!")
            return this.started = true;
            
        } else {
            console.log("engine cannot start...")
            return this.started = false;
            
        }
    }

    scheduledService(){
        if (this.mileage>30000){
            this.scheduleService = true
            return this.scheduleService
        }
    }

}

let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.scheduledService()

console.log(myCar)

/*
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

*/

