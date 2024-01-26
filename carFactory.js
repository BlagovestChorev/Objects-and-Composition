function carFactory(order) {
    // Engine selection based on minimum power requirement
    let engine;
    if (order.power <= 90) {
      engine = { power: 90, volume: 1800 };
    } else if (order.power <= 120) {
      engine = { power: 120, volume: 2400 };
    } else {
      engine = { power: 200, volume: 3500 };
    }
  
    // Carriage creation
    const carriage = { type: order.carriage, color: order.color };
  
    // Wheel size rounding to the nearest odd number
    const roundedSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize
    const wheels = [roundedSize, roundedSize, roundedSize, roundedSize];
  
    // Assembling the car object with correct engine details
    const car = {
      model: order.model,
      engine: engine, // Include power and volume properties
      carriage: carriage,
      wheels: wheels,
    };
  
    return car;
  }
  
  // Example usage:
  const orderDetails = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
  };
  
  const assembledCar = carFactory(orderDetails);
  console.log(assembledCar);