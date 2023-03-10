
//this includes the vehicle class as a module
const VehicleModule = require('./vehicle.js').Vehicle

// create a class and add parameters
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

    //methos for the class
    //adding passengers
    loadPassenger(num){
        this.passenger = num;
    }

    //start function taken from vehicle.js
    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!")
            return this.started = true;
            
        } else {
            console.log("engine cannot start...")
            return this.started = false;
            
        }
    }

    //service function (mileage over 30000)
    scheduledService(){
        if (this.mileage>30000){
            this.scheduleService = true
            return this.scheduleService
        }
    }

}

// create a variable who's value is a custom car class
let honda = new Car('mercury', 'rad_sedan', '2002', 'sonic grey', 50000)

//call the functions in the class
honda.start()
honda.loadPassenger(5) //added 5
honda.stop()
honda.scheduledService()

console.log(honda) //print honda in console. (check for the change in scheduleService) 

/*
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

*/

