/**
* The Creator Principle
*
* Q: Who creates an object?
* A: Whoever is closest to it. This promotes low coupling by making class
*   instances responsible for creating objects they need to reference.
*
* In this example we have a bike, which has wheels and a frame. Should the Wheels and Frame
* be injected into the Bike, or should the Bike create them itself?
*
* To solve this, refactor Bike so instead of having its dependencies injected into it, have
* it create them itself.
*
* BONUS: Use true dependency injection to decouple wheels and frame from bike altogether, using
* interfaces like IRound and ISturdy or something that bike takes
*/

import assert from 'node:assert';

class Wheel {
  diameter: number

  constructor(diameter: number) {
    this.diameter = diameter;
  }

  spin(): true {
    return true
  }
}

class Frame {
  size: number

  constructor(size: number) {
    this.size = size;
  }

  flex(): true {
    return true
  }
}

class Bike {
  wheels: Wheel[]
  frame: Frame

  constructor(wheels: Wheel[], frame: Frame) {
    this.wheels = wheels;
    this.frame = frame;
  }
}

function test() {
  // Build it
  const wheels = [36, 36].map(diameter => new Wheel(diameter));
  const frame = new Frame(18)

  const bike = new Bike(wheels, frame);

  // Test Wheels
  assert.ok(bike.wheels)
  assert.equal(bike.wheels.length, 2)
  bike.wheels.forEach(wheel => {
    assert.equal(wheel.constructor.name, "Wheel")
    assert.equal(wheel.diameter, 36)
    assert.equal(wheel.spin(), true)
  })

  // Test Frame
  assert.ok(bike.frame)
  assert.equal(bike.constructor.name, "Bike")
  assert.equal(bike.frame.flex(), true)
}

test();

