class Garage {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getMakeModel() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Garage {
  constructor(make, model) {
    super(make, model);
  }

  noOfDoors(value) {
    this.doors = value;
  }
}

class Motorbike extends Garage {
  constructor(make, model) {
    super(make, model);
  }
  mileage(value) {
    this.mileage = value;
  }
}

class engineCC extends Motorbike {
  constructor(value) {
    this.engineCC = value;
  }
}

const _motorbike = new Motorbike("Honda", "CBR650");
console.log(_motorbike.getMakeModel);
